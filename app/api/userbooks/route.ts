import connectDB from '@/app/lib/connectMongo';
import User from '@/app/models/user'
import { NextResponse } from 'next/server';

export const POST = async (request: any) => {
    const { userEmail } = await request.json();
    try {
        await connectDB();

        const findUser = await User.findOne({ email: userEmail });
        if (!findUser) return new NextResponse("Usuário não encontrado!", { status: 400 });

        const userBooks: any = findUser.books.map((book: any) => book);

        return new NextResponse(JSON.stringify({ userBooks }), { status: 200 });
    } catch (error: any) {
        return new NextResponse("Internal error, try again later!", { status: 500 })
    }
}