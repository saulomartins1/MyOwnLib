import React from 'react'
import SideNav from '@/app/components/SideNav'
import UserBookCard from './components/UserBookCard'
import { SearchBar } from '@/app/components/SearchBar'
import { booksDB } from '@/app/data/books'
import { auth } from '@/app/lib/auth'

async function GetUserBooks() {
    const user = await auth();
    const userId = user?.user?.id;

    try {
        const response = await fetch("http://localhost:3000/api/userbooks", { //Relative paths problems, url must be absolute
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ userId })

        })

        if (!response.ok) return false;

        const data = await response.json();
        return data.userBooks.map((b: any) => b);

    } catch (error) {
        console.log(error)
    }
}

async function Home() {
    console.log("=======================================")
    const userBooks = await GetUserBooks();
    console.log(userBooks)

    return (
        <>
            <div className='flex gap-4 overflow-hidden h-screen'>
                <SideNav />
                <div className='flex-grow'>
                    <header className='p-4 bg-dark2 flex items-center justify-center gap-8 border-borders border-[1px] rounded-bl-lg'>
                        <nav className='flex text-text2'>
                            <SearchBar />
                        </nav>
                    </header>
                    <main className='flex flex-wrap gap-4 py-4 pb-[100px] overflow-y-auto max-h-screen'>
                        {booksDB.map((book: any) => {
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
                            }
                            return null;
                        })}
                    </main>
                </div>
            </div >
        </>
    )
}

export default Home