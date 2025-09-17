import { NextRequest, NextResponse } from 'next/server';
import s3Client, { BUCKET_NAME } from '../../../../lib/awsUtil'; // Adjust this import to your s3 client setup
import { PutObjectCommand } from '@aws-sdk/client-s3';

// const BUCKET_NAME = process.env.S3_BUCKET_NAME;

export async function POST(request) {
    try {
        const formData = await request.formData();
        const directoryName = formData.get('directoryName')

        // --- 1. Validate Input ---
        if (!directoryName || typeof directoryName !== 'string') {
            return NextResponse.json({ error: 'A valid directory name is required.' }, { status: 400 });
        }

        // Clean up the name and ensure it ends with a slash to represent a folder.
        const key = `${directoryName.trim()}/`;

        // --- 2. Create the S3 Command ---
        // To create a folder, we upload an empty object with the key ending in "/".
        const command = new PutObjectCommand({
            Bucket: BUCKET_NAME,
            Key: key,
            Body: '', // The body is empty for a folder placeholder
        });

        // --- 3. Execute the Command ---
        await s3Client.send(command);

        // --- 4. Return Success Response --- ✅
        return NextResponse.json({
            success: true,
            message: `Directory '${directoryName}' created successfully.`,
            key: key,
        }); // 201 Created

    } catch (error) {
        console.error('Failed to create S3 directory:', error);
        return NextResponse.json({ error: 'Failed to create directory.' }, { status: 500 });
    }
}