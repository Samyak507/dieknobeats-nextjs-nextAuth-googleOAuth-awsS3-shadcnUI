import { NextResponse } from 'next/server';
import path from 'path';
import { Upload } from '@aws-sdk/lib-storage';
import s3Client, { BUCKET_NAME, deleteFromS3 } from '../../../../../lib/awsUtil'; // Make sure to export deleteFromS3
import dbConnect from '../../../../../lib/mongodb';
import CourseVideo from '../../../../../models/courseVideo.model';

// Re-using your upload function
const uploadToS3 = async (file, key) => {
    const fileBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(fileBuffer);
    const upload = new Upload({
        client: s3Client,
        params: { Bucket: BUCKET_NAME, Key: key, Body: buffer, ContentType: file.type },
    });
    await upload.done();
};

export async function PUT(request, { params }) {
    await dbConnect();
    const { videoId } = params;

    if (!videoId) {
        return NextResponse.json({ error: 'Video ID is required.' }, { status: 400 });
    }

    try {
        // --- 1. Find the Existing Video Document ---
        const existingVideo = await CourseVideo.findById(videoId);
        if (!existingVideo) {
            return NextResponse.json({ error: 'Video not found.' }, { status: 404 });
        }

        const formData = await request.formData();
        const updateData: Record<string, any> = {};

        // --- 2. Handle Text and Number Fields ---
        // Dynamically add fields to updateData if they exist in the form
        const fields = ['title', 'description', 'lecture_no', 'video_length'];
        fields.forEach(field => {
            if (formData.has(field)) {
                const value = formData.get(field);
                updateData[field] = (field === 'lecture_no' || field === 'video_length') ? Number(value) : value;
            }
        });

        const newVideoFile = formData.get('file');
        const newThumbnailFile = formData.get('thumbnail');

        const s3Tasks = [];

        // --- 3. Handle Video File Update ---
        if (newVideoFile && typeof newVideoFile !== 'string') {
            // A. Delete old video from S3
            s3Tasks.push(deleteFromS3(existingVideo.video_link));

            // B. Upload new video and get new key
            const courseSlug = existingVideo.courseName.toLowerCase().replace(/\s+/g, '-');
            const videoSlug = (updateData.title || existingVideo.title).toLowerCase().replace(/\s+/g, '-');
            const videoKey = `${courseSlug}/${videoSlug}/video-${Date.now()}${path.extname(newVideoFile.name)}`;
            
            s3Tasks.push(uploadToS3(newVideoFile, videoKey));
            updateData.video_link = videoKey; // Update the key in the database
        }

        // --- 4. Handle Thumbnail File Update ---
        if (newThumbnailFile && typeof newThumbnailFile !== 'string') {
            // A. Delete old thumbnail from S3 by parsing the URL
            const oldThumbnailKey = existingVideo.thumbnail_url.split('.amazonaws.com/')[1];
            s3Tasks.push(deleteFromS3(oldThumbnailKey));

            // B. Upload new thumbnail and get new URL
            const courseSlug = existingVideo.courseName.toLowerCase().replace(/\s+/g, '-');
            const videoSlug = (updateData.title || existingVideo.title).toLowerCase().replace(/\s+/g, '-');
            const thumbnailKey = `${courseSlug}/${videoSlug}/thumbnail-${Date.now()}${path.extname(newThumbnailFile.name)}`;
            
            s3Tasks.push(uploadToS3(newThumbnailFile, thumbnailKey));
            const region = await s3Client.config.region();
            updateData.thumbnail_url = `https://${BUCKET_NAME}.s3.${region}.amazonaws.com/${thumbnailKey}`;
        }
        
        // --- 5. Execute S3 Deletions and Uploads ---
        await Promise.all(s3Tasks);

        // --- 6. Update the MongoDB Document ---
        // We only update if there are changes to be made
        if (Object.keys(updateData).length === 0) {
            return NextResponse.json({ success: true, message: 'No changes detected.', video: existingVideo });
        }
        
        const updatedVideo = await CourseVideo.findByIdAndUpdate(
            videoId,
            { $set: updateData },
            { new: true } // This option returns the modified document
        );

        return NextResponse.json({
            success: true,
            message: 'Video updated successfully.',
            video: updatedVideo,
        });

    } catch (error) {
        console.error('Update failed:', error);
        return NextResponse.json({ error: 'Failed to update video.' }, { status: 500 });
    }
}