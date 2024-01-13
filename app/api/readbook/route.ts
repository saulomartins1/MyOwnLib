import User from '@/app/models/user'
import { NextResponse } from 'next/server';

export const POST = async (request: any) => {
    const { userEmail, bookId } = await request.json();

    try {
        const findUser = await User.findOne({ email: userEmail });
        if (!findUser) return new NextResponse("User not found!", { status: 400 });

        // WIP

        return new NextResponse("Book added into your library!", { status: 201 });

    } catch (error: any) {
        console.log(error.message)
        return new NextResponse("Internal error, try again later!", { status: 500 })
    }
}