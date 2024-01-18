import React from 'react'
import BookCard from './components/BookCard'
import SideNav from './components/SideNav'
import { SearchBar } from './components/SearchBar'
import { booksDB } from '@/app/data/books'
import { SkeletonBookCard } from './components/ui/SkeletonBookCard'



function Home() {

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
                  {booksDB.map((book) => {
                     return <React.Suspense key={book.id} fallback={<SkeletonBookCard />}>
                        <BookCard
                           id={book.id}
                           title={book.title}
                           author={book.author}
                           release={book.release}
                           pages={book.pages}
                           pdfPath={book.pdfPath}
                           coverUrl={book.coverUrl}
                           synopsis={book.synopsis}
                           genre={book.genre}
                           rating={book.rating}
                        />
                     </React.Suspense>
                  })}
               </main>
            </div>
         </div>
      </>
   )
}

export default Home