import mongoose, { Document, Model, Schema, Types } from "mongoose";

// 1. Define the TypeScript Interface for the document
export interface ICourseVideo extends Document {
  lecture_no: number;
  title: string;
  description: string;
  courseId: Types.ObjectId; // Reference to the Course model
  courseName: string;
  thumbnail_url: string;
  video_link: string;
  video_length: number; // Stored in seconds
  createdAt: Date;
  updatedAt: Date;
}

// 2. Create the Mongoose Schema
const CourseVideoSchema: Schema<ICourseVideo> = new mongoose.Schema(
  {
    lecture_no: {
      type: Number,
      required: [true, "Lecture number is required."],
      min: [1, "Lecture number must be at least 1."],
      index: true,
    },
    title: {
      type: String,
      required: [true, "Video title is required."],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Video description is required."],
      trim: true,
    },
    courseId: {
      type: Schema.Types.ObjectId,
      ref: 'Course', // Creates a link to the 'Course' model
      required: true,
      index: true, // Speeds up queries to find videos by course
    },
    courseName: {
      type: String,
      required: [true, "Course name is required."],
    },
    thumbnail_url: {
      type: String,
      required: [true, "Thumbnail URL is required."],
    },
    video_link: {
      type: String,
      required: [true, "Video link (S3 key) is required."],
    },
    video_length: {
      type: Number, // Stored in total seconds for easy calculations
      required: [true, "Video length is required."],
      min: [0, "Video length cannot be negative."],
    },
  },
  {
    // 3. Add automatic `createdAt` and `updatedAt` timestamps
    timestamps: true,
  }
);

// 4. Create and export the Mongoose model
const CourseVideo: Model<ICourseVideo> =
  mongoose.models.CourseVideo || mongoose.model<ICourseVideo>("CourseVideo", CourseVideoSchema);

export default CourseVideo;