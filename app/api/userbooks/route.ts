import User from '@/app/models/user'
import { NextResponse } from 'next/server';

export const POST = async (request: any) => {
    const { userId } = await request.json();
    try {

        const findUser = await User.findById({ _id: userId });
        if (!findUser) return new NextResponse("Usuário não encontrado!", { status: 400 });

        const userBooks: any = findUser.books.map((book: any) => book);

        return new NextResponse(JSON.stringify({ userBooks }), { status: 200 });
    } catch (error: any) {
        return new NextResponse("Internal error, try again later!", { status: 500 })
    }
}