// File: src/app/api/aws/course/getAllCourses/route.ts

import { NextResponse } from 'next/server';
import { getAllCourses } from '../../services/s3CourseService'; // Adjust path to your function

/**
 * Handles GET requests to /api/aws/course/getAllCourses.
 * This is the function that was missing.
 */
export async function GET(request: Request) {
  try {
    // Call your existing logic to get the courses from S3
    const courses = await getAllCourses();

    // Return a successful response with the course data
    return NextResponse.json(courses, { status: 200 });

  } catch (error) {
    console.error("API route error:", error);
    // Return an error response if something goes wrong
    return NextResponse.json(
      { message: "Failed to retrieve courses." },
      { status: 500 }
    );
  }
}