import mongoose, { Document, Model, Schema, Types } from "mongoose";

// Interface for the sub-document array
interface IPurchasedCourse {
  courseId: Types.ObjectId;
  courseName: string;
  purchasedDate: Date;
}

// Main user interface
interface IUser extends Document {
  username: string;
  email: string;
  password?: string; // Optional for when we exclude it from queries
  accountType: 'paid' | 'trial'; // Use a union type for strictness
  purchasedCourse: IPurchasedCourse[];
  createdAt: Date;
  updatedAt: Date;
}

const UserSchema: Schema<IUser> = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    select: false, // Automatically exclude password from query results
  },
  accountType: {
    type: String,
    required: true,
    enum: ['paid', 'trial'],
    default: 'trial'
  },
  purchasedCourse: [{
    courseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Course',
      required: true
    },
    courseName: {
      type: String,
      required: true
    },
    purchasedDate: {
      type: Date,
      default: Date.now
    },
    
  }]
  
}, {
  // Adds createdAt and updatedAt timestamps automatically
  timestamps: true
});

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;