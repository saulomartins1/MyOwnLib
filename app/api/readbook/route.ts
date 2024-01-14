import User from '@/app/models/user'
import { NextResponse } from 'next/server';

export const POST = async (request: any) => {
    const { userEmail, bookId } = await request.json();

    try {
        const findUser = await User.findOne({ email: userEmail });
        if (!findUser) return new NextResponse("User not found!", { status: 400 });

        const userBookInfo: any = await findUser.books.filter((book: any) => book.id === bookId);
        if (!findUser) return new NextResponse("Book not find!", { status: 409 });

        return new NextResponse(JSON.stringify(userBookInfo[0]), { status: 200 });

    } catch (error: any) {
        console.log(error.message)
        return new NextResponse("Internal error, try again later!", { status: 500 })
    }
}