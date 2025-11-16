import mongoose, { Document, Model, Schema } from "mongoose";

// 1. Define the TypeScript Interface for the document
export interface ICourse extends Document {
  courseTitle: string;
  totalVideos: number;
  thumbnail_url: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}

// 2. Create the Mongoose Schema
const CourseSchema: Schema<ICourse> = new mongoose.Schema(
  {
    courseTitle: {
      type: String,
      required: [true, "Course title is required."],
      trim: true, // Removes whitespace from both ends of a string
    },
    totalVideos: {
      type: Number,
      required: [true, "Total number of videos is required."],
      default: 0, // Sets a default value if not provided
      min: [0, "Total videos cannot be negative."],
    },
    thumbnail_url: {
      type: String,
      required: [true, "Thumbnail URL is required."],
    },
    price: {
      type: Number,
      required: [true, "Price is required."],
      min: [0, "Price cannot be negative."],
    },
  },
  {
    // 3. Add automatic `createdAt` and `updatedAt` timestamps
    timestamps: true,
  }
);

// 4. Create and export the Mongoose model
const Course: Model<ICourse> =
  mongoose.models.Course || mongoose.model<ICourse>("Course", CourseSchema);

export default Course;