import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '../../../../../../lib/mongodb';
import CourseVideo from '../../../../../../models/courseVideo.model'; // Import the new Video model
import mongoose from 'mongoose';

// This function handles GET requests to /api/aws/video/getByCourse/[courseId]
export async function GET(
    request: NextRequest,
    { params }: { params: { courseId: string } }
) {
    await dbConnect();

    try {
        const { courseId } = params;

        // 1. Validate the provided courseId
        if (!courseId || !mongoose.Types.ObjectId.isValid(courseId)) {
            return NextResponse.json(
                { error: 'A valid course ID is required.' },
                { status: 400 }
            );
        }

        // 2. Find all videos that match the courseId
        // We sort by 'lecture_no' in ascending order (1) to ensure the videos are in the correct sequence.
        const videos = await CourseVideo.find({ courseId: courseId }).sort({ lecture_no: 1 });

        // 3. Return the found videos
        // Note: If no videos are found, this will correctly return an empty array [].
        return NextResponse.json(videos, { status: 200 });

    } catch (error) {
        console.error('Failed to fetch videos:', error);
        return NextResponse.json(
            { error: 'An internal server error occurred while fetching videos.' },
            { status: 500 }
        );
    }
}
