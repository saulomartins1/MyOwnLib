import connectDB from '@/app/lib/connectMongo';
import User from '@/app/models/user'
import { NextResponse } from 'next/server';

export const POST = async (request: any) => {
    const { userEmail, bookId } = await request.json();

    try {
        await connectDB();

        const findUser = await User.findOne({ email: userEmail });
        if (!findUser) return new NextResponse("User not found!", { status: 400 });

        const userBooks = findUser.books;
        const bookIndex = userBooks.findIndex((book: any) => book.id === bookId);

        await findUser.books.splice(bookIndex, 1);

        await findUser.save();
        return new NextResponse("The book was removed from your library!", { status: 201 });

    } catch (error: any) {
        console.log(error.message)
        return new NextResponse("Internal error, try again later!", { status: 500 })
    }
}