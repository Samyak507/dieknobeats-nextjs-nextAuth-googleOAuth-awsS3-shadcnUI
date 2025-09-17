import { S3Client } from "@aws-sdk/client-s3";

// Ensure that the environment variables are set.
if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY || !process.env.AWS_S3_REGION || !process.env.AWS_S3_BUCKET_NAME) {
    throw new Error("Missing AWS S3 configuration environment variables.");
}

const s3Client = new S3Client({
    region: process.env.AWS_S3_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    },
});




export const BUCKET_NAME = process.env.AWS_S3_BUCKET_NAME;

export default s3Client;