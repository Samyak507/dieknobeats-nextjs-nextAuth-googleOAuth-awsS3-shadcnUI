import bcrypt from 'bcryptjs';
import { NextRequest, NextResponse } from 'next/server'
import User from '../../../../models/user.model'
import connectToDatabase from '../../../../lib/mongodb';


export async function POST(request: NextRequest) {
    console.log("Signup API route hit!");
    try {
        // 1. Read the FormData from the request
        const formData = await request.formData();

        // 2. Get each field by its name
        const username = formData.get('name') as string;
        const email = formData.get('email') as string;
        const password = formData.get('password') as string;
        const confirmPassword = formData.get('confirmPassword') as string;

        // Example of handling a file upload (e.g., profile picture)
        // const profileImage = formData.get('profileImage') as File | null;

        // --- All your existing validation logic remains the same ---

        const isValidEmail = (email: string) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email);
        }

        if (!username || !email || !password || !confirmPassword) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }
        if (!isValidEmail(email)) {
            return NextResponse.json({ message: "Invalid email format" }, { status: 400 });
        }
        if (confirmPassword !== password) {
            return NextResponse.json({ message: "Passwords do not match" }, { status: 400 });
        }
        if (password.length < 6) {
            return NextResponse.json({ message: "Password must be at least 6 characters long" }, { status: 400 });
        }

        // --- Database logic also remains the same ---

        await connectToDatabase();
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({ message: "User already exists" }, { status: 400 });
        }

        // Here you would handle the file upload, e.g., save profileImage to S3 or another storage service
        // if (profileImage) {
        //     console.log("Received file:", profileImage.name, "Size:", profileImage.size);
        //     // Add your file upload logic here...
        // }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            email,
            username,
            password: hashedPassword,
            // profileImageUrl: "URL from your file upload logic"
        });
        await newUser.save();
        return NextResponse.json({ message: "User created successfully" }, { status: 201 });

    } catch (error) {
        console.log("Error in user registration:", error);
        return NextResponse.json({ message: "Something went wrong" }, { status: 500 });
    }
}