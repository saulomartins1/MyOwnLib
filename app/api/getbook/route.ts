import User from '@/app/models/user'
import { NextResponse } from 'next/server';

export const POST = async (request: any) => {
    const { userId, bookId } = await request.json();
    try {

        const findUser = await User.findById({ _id: userId });
        if (!findUser) return new NextResponse("Usuário não encontrado!", { status: 400 });

        // Array com 2 objetos com id cada
        const userBooks: any = findUser.books.map((book: any) => book);

        //Não tem = [] 
        //Tem = [ { id: ... } ]
        const userHas: any = userBooks.filter((book: any) => book.id === bookId);

        if (userHas.length) {
            return new NextResponse("You already have this book!", { status: 409 });
        }

        findUser.books.push({ id: bookId, pagesRead: 0 });
        await findUser.save();
        return new NextResponse("Book added into your library!", { status: 201 });

    } catch (error: any) {
        console.log(error)
        return new NextResponse("Internal error, try again later!", { status: 500 })
    }
}