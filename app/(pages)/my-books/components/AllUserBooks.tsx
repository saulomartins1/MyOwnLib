import React from 'react'
import UserBookCard from '@/app/(pages)/my-books/components/UserBookCard'
import { booksDB } from '@/app/data/books'
import { auth } from '@/app/lib/auth'
import baseUrl from '@/app/utils/baseUrl'

export async function GetUserBooks() {
    const user = await auth();
    const userEmail = user?.user?.email;

    try {
        const response = await fetch(`${baseUrl}/api/userbooks`, { //Relative paths problems, url must be absolute
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userEmail })
        })

        if (!response.ok) return false;

        const data = await response.json();
        return data.userBooks.map((b: any) => b);

    } catch (error) {
        console.log(error)
    }
}

export const AllUserBooks = async () => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    const userBooks = await GetUserBooks();

    return <>
        {userBooks?.length > 0 ?
            booksDB.map((book: any) => {
                const userHasBook = userBooks.find((userBook: any) => userBook.id === book.id);
                if (userHasBook) {
                    return <UserBookCard
                        key={book.id}
                        id={book.id}
                        title={book.title}
                        author={book.author}
                        release={book.release}
                        pages={book.pages}
                        pagesRead={userHasBook.pagesRead}
                        pdfPath={book.pdfPath}
                        coverUrl={book.coverUrl}
                        synopsis={book.synopsis}
                        genre={book.genre}
                        rating={book.rating}
                    />
                } else return null;
            })
            :
            <h2 className='font-bold'>You don't have any book, yet!</h2>
        }
    </>
}

export default AllUserBooks