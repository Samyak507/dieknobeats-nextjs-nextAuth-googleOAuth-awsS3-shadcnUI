import { NextResponse } from 'next/server';
import dbConnect from '../../../../../lib/mongodb'; // Adjust path to your dbConnect utility
import Course from '../../../../../models/course.model'; // Adjust path to your Course model

/**
 * Handles GET requests to fetch all courses from MongoDB.
 */
export async function GET(request: Request) {
  try {
    // 1. Connect to the database
    await dbConnect();

    // 2. Fetch all documents from the "courses" collection
    const courses = await Course.find({});

    // 3. Return a successful response with the course data
    return NextResponse.json(courses, { status: 200 });

  } catch (error) {
    console.error("API route error:", error);
    
    // 4. Return an error response if something goes wrong
    return NextResponse.json(
      { message: "Failed to retrieve courses from database." },
      { status: 500 }
    );
  }
}

