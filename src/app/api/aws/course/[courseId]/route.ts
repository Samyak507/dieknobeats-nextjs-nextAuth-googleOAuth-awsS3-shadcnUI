import { NextResponse } from 'next/server';
import dbConnect from '../../../../../lib/mongodb';
import Course from '../../../../../models/course.model';
import CourseVideo from '../../../../../models/courseVideo.model';
import s3Client, { BUCKET_NAME } from '../../../../../lib/awsUtil';
import { ListObjectsV2Command, DeleteObjectsCommand } from '@aws-sdk/client-s3';

/**
 * GET handler to fetch a single course and all of its associated video metadata.
 * @param {Request} request - The incoming request object.
 * @param {object} context - The context object containing route parameters.
 * @param {string} context.params.courseId - The MongoDB ObjectId of the course.
 * @returns {NextResponse} - A JSON response with the course and its videos, or an error.
 */
export async function GET(request: Request, { params }: { params: { courseId: string } }) {
    const { courseId } = params;

    if (!courseId) {
        return NextResponse.json({ error: 'Course ID is required.' }, { status: 400 });
    }

    await dbConnect();

    try {
        // Find the course and all its videos in parallel for better performance
        const [course, videos] = await Promise.all([
            Course.findById(courseId).lean(), // .lean() for a faster, plain JS object
            CourseVideo.find({ courseId: courseId }).sort({ lecture_no: 1 }).lean()
        ]);

        if (!course) {
            return NextResponse.json({ error: 'Course not found.' }, { status: 404 });
        }

        // Combine the course data with its videos
        const courseData = { ...course, videos };

        return NextResponse.json({ success: true, course: courseData });

    } catch (error) {
        console.error('Error fetching course and videos:', error);
        return NextResponse.json({ error: 'Failed to fetch course data.' }, { status: 500 });
    }
}


/**
 * DELETE handler to completely remove a course. This includes:
 * 1. Deleting all associated files (videos, thumbnails) from the S3 bucket.
 * 2. Deleting all associated CourseVideo documents from MongoDB.
 * 3. Deleting the main Course document from MongoDB.
 * @param {Request} request - The incoming request object.
 * @param {object} context - The context object containing route parameters.
 * @param {string} context.params.courseId - The MongoDB ObjectId of the course to delete.
 * @returns {NextResponse} - A JSON response indicating success or failure.
 */
export async function DELETE(request: Request, { params }: { params: { courseId: string } }) {
    // 1. Get the course's MongoDB _id from the URL path parameter
    const { courseId } = params;

    if (!courseId) {
        return NextResponse.json({ error: 'Course ID is required in the URL path.' }, { status: 400 });
    }

    await dbConnect();

    try {
        // 2. Find the course document to get its slug for S3 path
        const course = await Course.findById(courseId);

        if (!course) {
            // If the course is already gone, we can consider the job done.
            return NextResponse.json({ message: 'Course not found. It may have already been deleted.' }, { status: 404 });
        }
        
        const courseTitle = (course as any).courseTitle;

        // FIX: Add a guard clause to ensure courseName exists and is a string
        if (!courseTitle || typeof courseTitle !== 'string') {
            console.error(`Course with ID ${courseId} is missing a valid 'name' field.`);
            return NextResponse.json(
                { error: 'Course data is invalid; cannot determine S3 path for deletion.' },
                { status: 500 }
            );
        }

        const courseSlug = courseTitle.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        const s3Prefix = `${courseSlug}/`;

        // --- 3. Delete all associated files from S3 ---
        const listCommand = new ListObjectsV2Command({
            Bucket: BUCKET_NAME,
            Prefix: s3Prefix,
        });
        const listedObjects = await s3Client.send(listCommand);

        if (listedObjects.Contents && listedObjects.Contents.length > 0) {
            // Format the keys for the batch delete operation
            const deleteParams = {
                Bucket: BUCKET_NAME,
                Delete: {
                    Objects: listedObjects.Contents.map(({ Key }) => ({ Key })),
                },
            };
            
            const deleteCommand = new DeleteObjectsCommand(deleteParams);
            await s3Client.send(deleteCommand);
        }
        
        // --- 4. Delete the course and its videos from MongoDB ---
        // We run these in parallel for efficiency
        await Promise.all([
            CourseVideo.deleteMany({ courseId: courseId }),
            Course.findByIdAndDelete(courseId)
        ]);
        
        return NextResponse.json({ success: true, message: `Course "${courseTitle}" and all its content have been deleted.` });

    } catch (error) {
        console.error('Error deleting course:', error);
        return NextResponse.json({ error: 'Failed to delete course and its assets.' }, { status: 500 });
    }
}

