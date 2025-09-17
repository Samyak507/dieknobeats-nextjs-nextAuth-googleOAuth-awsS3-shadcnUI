// In your services/s3CourseService.ts file

import s3Client, { BUCKET_NAME } from "../../../../lib/awsUtil"; // Adjust path as needed
import { ListObjectsV2Command, _Object } from "@aws-sdk/client-s3";

export interface CourseInfo {
  key: string;
  size: number;
  lastModified: Date;
}

interface GetAllCoursesOptions {
  prefix?: string;
}

export const getAllCourses = async (options: GetAllCoursesOptions = {}): Promise<CourseInfo[]> => {
  const { prefix } = options;
  
  console.log(`Fetching courses from bucket: ${BUCKET_NAME}` + (prefix ? ` with prefix: "${prefix}"` : '...'));
  
  const allObjects: _Object[] = [];

  try {
    let isTruncated = true;
    let continuationToken: string | undefined;

    while (isTruncated) {
      const command = new ListObjectsV2Command({
        Bucket: BUCKET_NAME,
        Prefix: prefix,
        ContinuationToken: continuationToken,
      });

      const { Contents, IsTruncated, NextContinuationToken } = await s3Client.send(command);

      if (Contents) {
        allObjects.push(...Contents);
      }

      isTruncated = !!IsTruncated;
      continuationToken = NextContinuationToken;
    }

    console.log(`Successfully fetched ${allObjects.length} objects.`);
    // Pro-tip: To debug this in the future, you could log the raw data here:
    // console.log("Raw objects from S3:", allObjects);

    const courses = allObjects
      // ✅ CORRECTED FILTER: Only include objects that are actual files.
      .filter(obj => obj.Key) 
      .map(obj => ({
        key: obj.Key!,
        size: obj.Size!,
        lastModified: obj.LastModified!,
      }));
      
    return courses;

  } catch (error) {
    console.error("Error fetching courses from S3:", error);
    throw new Error("Could not retrieve courses from the bucket.");
  }
};