import { NextResponse } from 'next/server';
import dbConnect from '../../../../../lib/mongodb';
import CourseVideo from '../../../../../models/courseVideo.model';
import Course from '../../../../../models/course.model'; // Import the Course model
import s3Client, { BUCKET_NAME } from '../../../../../lib/awsUtil';
import { DeleteObjectCommand } from '@aws-sdk/client-s3';

/**
 * DELETE handler to remove a video and its thumbnail from S3,
 * and then delete its corresponding record from MongoDB.
 * @param {Request} request - The incoming request object.
 * @param {object} context - The context object containing route parameters.
 * @param {string} context.params.videoId - The MongoDB ObjectId of the video to delete.
 * @returns {NextResponse} - A JSON response indicating success or failure.
 */
export async function DELETE(request, { params }) {
    // 1. Get the video's MongoDB _id from the URL query string
    const { searchParams } = new URL(request.url);
    const videoId = searchParams.get('_id');

    if (!videoId) {
        return NextResponse.json({ error: 'Video ID (_id) is required in the query string.' }, { status: 400 });
    }

    await dbConnect();

    try {
        // 2. Find the video document in MongoDB to get the S3 keys and courseId
        const video = await CourseVideo.findById(videoId);

        if (!video) {
            return NextResponse.json({ error: 'Video not found.' }, { status: 404 });
        }

        // 3. Extract the S3 keys for the video and the thumbnail
        const videoKey = video.video_link;
        const thumbnailUrl = new URL(video.thumbnail_url);
        // The pathname includes a leading '/', which we need to remove
        const thumbnailKey = thumbnailUrl.pathname.substring(1);

        // 4. Delete both the video and thumbnail from the S3 bucket in parallel
        const deleteVideoCommand = new DeleteObjectCommand({
            Bucket: BUCKET_NAME,
            Key: videoKey,
        });

        const deleteThumbnailCommand = new DeleteObjectCommand({
            Bucket: BUCKET_NAME,
            Key: thumbnailKey,
        });

        await Promise.all([
            s3Client.send(deleteVideoCommand),
            s3Client.send(deleteThumbnailCommand)
        ]);

        // 5. Decrement the video count on the course and delete the video record from MongoDB
        // We run these two database operations in parallel for better performance.
        await Promise.all([
            Course.findByIdAndUpdate(video.courseId, { $inc: { totalVideos: -1 } }),
            CourseVideo.findByIdAndDelete(videoId)
        ]);

        return NextResponse.json({ success: true, message: 'Video deleted successfully.' });

    } catch (error) {
        console.error('Error deleting video:', error);
        return NextResponse.json({ error: 'Failed to delete video.' }, { status: 500 });
    }
}

