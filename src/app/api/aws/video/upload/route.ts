import { NextResponse } from 'next/server';
import path from 'path';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { Upload } from '@aws-sdk/lib-storage';
import s3Client, { BUCKET_NAME } from '../../../../../lib/awsUtil';
import dbConnect from '../../../../../lib/mongodb';
import CourseVideo from '../../../../../models/courseVideo.model';
import Course from '../../../../../models/course.model'; // Import the Course model

const uploadToS3 = async (file, key) => {
    const fileBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(fileBuffer);

    const upload = new Upload({
        client: s3Client,
        params: {
            Bucket: BUCKET_NAME,
            Key: key,
            Body: buffer,
            ContentType: file.type,
        },
    });

    await upload.done();
};

export async function POST(request) {
    await dbConnect();

    try {
        const formData = await request.formData();

        // --- 1. Extract All Fields ---
        const videoFile = formData.get('file');
        const thumbnailFile = formData.get('thumbnail');
        const title = formData.get('title');
        const description = formData.get('description');
        const lecture_no = formData.get('lecture_no');
        const courseId = formData.get('courseId');
        const courseName = formData.get('courseName');
        const video_length = formData.get('video_length');

        // --- 2. Validate Input ---
        if (!videoFile || !thumbnailFile || !title || !description || !lecture_no || !courseId || !courseName || !video_length || typeof videoFile === 'string' || typeof thumbnailFile === 'string') {
            return NextResponse.json({ error: 'Missing required fields or invalid file types.' }, { status: 400 });
        }


        // --- 3. Construct Nested S3 Keys ---
        const courseSlug = courseName.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        const videoSlug = title.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
        const videoKey = `${courseSlug}/${videoSlug}/video-${Date.now()}${path.extname(videoFile.name)}`;
        const thumbnailKey = `${courseSlug}/${videoSlug}/thumbnail-${Date.now()}${path.extname(thumbnailFile.name)}`;

        // --- 4. Upload Both Files to S3 in Parallel ---
        await Promise.all([
            uploadToS3(videoFile, videoKey),
            uploadToS3(thumbnailFile, thumbnailKey)
        ]);

        // --- 5. Save Video Metadata to MongoDB ---
        const region = await s3Client.config.region();
        const thumbnailUrl = `https://${BUCKET_NAME}.s3.${region}.amazonaws.com/${thumbnailKey}`;
        const videoLink = `https://${BUCKET_NAME}.s3.${region}.amazonaws.com/${videoKey}`;

        const newVideo = new CourseVideo({
            title,
            description,
            lecture_no: Number(lecture_no),
            courseId,
            courseName,
            video_length: Number(video_length),
            thumbnail_url: thumbnailUrl,
            video_link: videoLink,
        });

        await newVideo.save(); // This will trigger the 'post-save' middleware in the model

        /*
        // --- ALTERNATIVE: Direct Update in API Route ---
        // If you weren't using Mongoose middleware, you would place this code here.
        // --- 6. Update the total_videos count in the Course model ---
        
        */

        const totalVideos = await Course.findByIdAndUpdate(courseId, { $inc: { totalVideos: 1 } });
        console.log(totalVideos);
        

        // --- 6. Generate Temporary Access URL for the VIDEO ---
        const getCommand = new GetObjectCommand({
            Bucket: BUCKET_NAME,
            Key: videoKey,
        });

        const accessUrl = await getSignedUrl(s3Client, getCommand, {
            expiresIn: 3600, // URL is valid for 1 hour
        });

        return NextResponse.json({
            success: true,
            message: 'Files uploaded and video record created successfully.',
            url: accessUrl,
            video: newVideo,
        });

    } catch (error) {
        console.error('Upload failed:', error);
        if (error.name === 'ValidationError') {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        return NextResponse.json({ error: 'Failed to upload file.' }, { status: 500 });
    }
}
