import connectDB from '@/app/lib/connectMongo';
import User from '@/app/models/user'
import { NextResponse } from 'next/server';

export const POST = async (request: any) => {
    const { userEmail, bookId } = await request.json();

    try {
        await connectDB();

        const findUser = await User.findOne({ email: userEmail });
        if (!findUser) return new NextResponse("User not found!", { status: 400 });

        const userBooks: any = findUser.books.map((book: any) => book);

        const userHas: any = userBooks.filter((book: any) => book.id === bookId);

        if (userHas.length) {
            return new NextResponse("You already have this book!", { status: 409 });
        }

        findUser.books.push({ id: bookId });
        await findUser.save();
        return new NextResponse("Book added into your library!", { status: 201 });

    } catch (error: any) {
        console.log(error.message)
        return new NextResponse("Internal error, try again later!", { status: 500 })
    }
}