import connectDB from '@/app/lib/connectMongo';
import User from '@/app/models/user'
import { NextResponse } from 'next/server';

export const POST = async (request: any) => {
    const { userEmail, bookId, saveCurrentPage } = await request.json();

    try {
        await connectDB();

        const findUser = await User.findOne({ email: userEmail });
        if (!findUser) return new NextResponse("User not found!", { status: 400 });

        const userBookProgress: any = await findUser.books.filter((book: any) => book.id === bookId);
        if (!findUser) return new NextResponse("Book not found!", { status: 409 });

        if (saveCurrentPage) {
            JSON.stringify(userBookProgress[0].pagesRead = saveCurrentPage);
        }

        await findUser.save();

        return new NextResponse("Progress successfully save!", { status: 201 });

    } catch (error: any) {
        console.log(error.message)
        return new NextResponse("Internal error, try again later!", { status: 500 })
    }
}