import { NextRequest, NextResponse } from 'next/server';
import path from 'path'; // Import the path module
import s3Client, { BUCKET_NAME } from '../../../../../lib/awsUtil'; // Adjust to your S3 client setup
import { PutObjectCommand } from '@aws-sdk/client-s3';
import dbConnect from '../../../../../lib/mongodb'; // Adjust to your DB connection utility
import Course from '../../../../../models/course.model'; // Import your Course model

export async function POST(request: NextRequest) {
  await dbConnect();

  try {
    const formData = await request.formData();

    const courseTitle = formData.get('courseTitle');
    const totalVideos = formData.get('totalVideos');
    const price = formData.get('price');
    const thumbnail = formData.get('thumbnail');

    // 1. Validate Course Title
    if (!courseTitle) {
      return NextResponse.json(
        { error: 'Course Title is a required field.' },
        { status: 400 }
      );
    }

    // 2. Validate Total Videos
    // Note: This checks for undefined/null. If 0 is not a valid number, you can use !totalVideos.
    if (totalVideos == null) {
      return NextResponse.json(
        { error: 'Total Videos count is a required field.' },
        { status: 400 }
      );
    }

    // 3. Validate Price
    // Note: This checks for undefined/null. If 0 is not a valid price, you can use !price.
    if (price == null) {
      return NextResponse.json(
        { error: 'Price is a required field.' },
        { status: 400 }
      );
    }

    // 4. Validate Thumbnail
    if (!thumbnail) {
      return NextResponse.json(
        { error: 'A thumbnail file is required.' },
        { status: 400 }
      );
    }

    // 5. Validate Thumbnail File Type
    if (!(thumbnail instanceof File)) {
      return NextResponse.json(
        { error: 'The uploaded thumbnail is not a valid file.' },
        { status: 400 }
      );
    }
    if (isNaN(Number(price)) || isNaN(Number(totalVideos))) {
      return NextResponse.json(
        { error: 'Price and Total Videos must be valid numbers.' },
        { status: 400 }
      );
    }

    const thumbnailBuffer = Buffer.from(await thumbnail.arrayBuffer());

    // --- KEY CHANGE IS HERE ---
    // The S3 object prefix (folder) is now the sanitized course title.
    const slug = courseTitle.toString().toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
    const fileExtension = path.extname(thumbnail.name);
    const thumbnailKey = `${slug}/thumbnail-${Date.now()}${fileExtension}`;
    // Example Key: "mixing-and-mastering/thumbnail-1726606822123.jpg"

    const command = new PutObjectCommand({
      Bucket: BUCKET_NAME,
      Key: thumbnailKey,
      Body: thumbnailBuffer,
      ContentType: thumbnail.type,
      ACL: 'public-read',
    });

    await s3Client.send(command);

    const region = await s3Client.config.region();
    const thumbnailUrl = `https://${BUCKET_NAME}.s3.${region}.amazonaws.com/${thumbnailKey}`;

    const newCourse = new Course({
      courseTitle: courseTitle.toString(),
      totalVideos: Number(totalVideos),
      price: Number(price),
      thumbnail_url: thumbnailUrl,
    });

    await newCourse.save();

    return NextResponse.json({
      success: true,
      message: `Course '${courseTitle}' created successfully.`,
      course: newCourse,
    }, { status: 201 });

  } catch (error) {
    console.error('Failed to create course:', error);
    if (error.name === 'ValidationError') {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }
    return NextResponse.json({ error: 'Failed to create course.' }, { status: 500 });
  }
}