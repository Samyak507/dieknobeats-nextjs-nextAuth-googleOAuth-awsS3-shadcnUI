import { NextResponse } from 'next/server';
import { PutObjectCommand, DeleteObjectCommand, GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import s3Client, { BUCKET_NAME } from '../../../../../lib/awsUtil';
import { Upload } from '@aws-sdk/lib-storage';

// This function handles POST requests to generate a pre-signed URL for uploading a file to S3.
let mockVideoDatabase = [];

/**
 * POST: Handles the entire upload process in one go.
 * 1. Receives a file and course name from the client.
 * 2. Streams the file directly to the S3 bucket.
 * 3. Saves the video metadata to our mock database.
 * 4. Generates a pre-signed GET URL for accessing the video.
 * 5. Returns the access URL to the client.
 */
export async function POST(request) {
    try {
        const formData = await request.formData();
        const file = formData.get('file'); // This is a File object
        const courseName = formData.get('courseName');

        if (!file || !courseName || typeof file === 'string') {
            return NextResponse.json({ error: 'A file object and course name are required.' }, { status: 400 });
        }
        
        // Convert the file to a buffer to prepare for uploading
        const fileBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(fileBuffer);

        const fileName = file.name;
        const fileType = file.type;

        // Generate a unique key for the file in S3
        const key = `${courseName}/${Date.now()}-${fileName}`;
        
        // Use the Upload class from @aws-sdk/lib-storage for robust, streaming uploads
        const upload = new Upload({
            client: s3Client,
            params: {
                Bucket: BUCKET_NAME,
                Key: key,
                Body: buffer,
                ContentType: fileType,
            },
        });
        
        // This will start and complete the upload to S3
        await upload.done();
        
        // --- Save Metadata ---
        // This logic is similar to the /api/videos POST endpoint
        const newVideo = {
            id: `vid_${Date.now()}`,
            s3Key: key,
            title: fileName.replace(/\.[^/.]+$/, ""), // Title without extension
            courseName,
            createdAt: new Date().toISOString(),
        };
        mockVideoDatabase.push(newVideo);
        console.log('Saved to Mock DB:', newVideo);

        // --- Generate Access URL ---
        // This logic is similar to the /api/videos GET endpoint
        const getCommand = new GetObjectCommand({
            Bucket: BUCKET_NAME,
            Key: key,
        });

        const accessUrl = await getSignedUrl(s3Client, getCommand, {
            expiresIn: 3600, // URL is valid for 1 hour
        });

        return NextResponse.json({ 
            success: true, 
            message: 'File uploaded successfully',
            url: accessUrl 
        });

    } catch (error) {
        console.error('Direct upload failed:', error);
        return NextResponse.json({ error: 'Failed to upload file.' }, { status: 500 });
    }
}



export async function DELETE(request: any, { params }) {
    // The key is passed as a dynamic segment in the URL, but it might be URL-encoded.
    const urlEncodedKey = params.key;
    if (!urlEncodedKey) {
        return NextResponse.json({ error: 'Video key is required.' }, { status: 400 });
    }

    const key = decodeURIComponent(urlEncodedKey);

    try {
        // 1. Delete the object from the S3 bucket
        const command = new DeleteObjectCommand({
            Bucket: BUCKET_NAME,
            Key: key,
        });
        await s3Client.send(command);

        // 2. Delete the video record from your database
        // TODO: Replace this with your actual database logic
        const initialLength = mockVideoDatabase.length;
        mockVideoDatabase = mockVideoDatabase.filter(video => video.s3Key !== key);
        if (mockVideoDatabase.length === initialLength) {
            // This isn't a fatal error for the client, but good to know on the server.
            console.warn(`Video with key "${key}" not found in mock DB, but deletion from S3 was attempted.`);
        }
        console.log('Updated Mock DB after delete:', mockVideoDatabase);


        return NextResponse.json({ success: true, message: 'Video deleted successfully.' });

    } catch (error) {
        console.error('Error deleting video:', error);
        return NextResponse.json({ error: 'Failed to delete video.' }, { status: 500 });
    }
}
