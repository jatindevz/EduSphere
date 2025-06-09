//src/app/api/register/route.js

import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/models/user.model";
import dbConnect from "@/lib/database";

export async function POST(request) {
    await dbConnect();
    try {

        const { username, email, password } = await request.json();

        if (!username || !email || !password) {
            console.log("All fields are required");
            return NextResponse.json({ message: "All fields are required" ,error: "All fields are required" }, { status: 400 });
        }

        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return NextResponse.json({  message: "User already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            username,
            email,
            password: hashedPassword,
        });

        await user.save();

        return NextResponse.json({ message: "User registered successfully" }, { status: 201 });




    } catch (error) {
        console.log('Error in register server:', error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}