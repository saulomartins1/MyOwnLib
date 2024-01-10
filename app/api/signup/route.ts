import User from '@/app/models/user'
import connectDB from '@/app/lib/connectMongo'
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export const POST = async (request: any) => {
    const { email, password } = await request.json();

    try {
        await connectDB();

        const emailExists = await User.findOne({ email });
        if (emailExists) return new NextResponse("This email account already exists!", { status: 400 });

        const hashedPassword = await bcrypt.hash(password, 6);

        const newUser = new User({
            email,
            password: hashedPassword
        });

        await newUser.save();
        return new NextResponse("User successfully registered!", { status: 201 })
    } catch (error: any) {
        console.error("signup route" + error.error);
        return new NextResponse("Internal error, try again later!", { status: 500 })
    }
}