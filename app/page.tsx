import React from 'react'
import BookCard from './components/BookCard'
import SideNav from './components/SideNav'
import { InputSearchBook, SearchBook_Filter, SearchBook_Grid } from './components/ui/Input'

async function Home() {

   return (
      <>
         <div className='flex gap-4 overflow-hidden h-screen'>
            <SideNav />
            <div className='flex-grow'>
               <header className='p-4 bg-dark2 flex items-center justify-center gap-8 border-borders border-[1px] rounded-bl-lg'>
                  <nav className='flex text-text2'>
                     <InputSearchBook />
                     <SearchBook_Filter />
                     <SearchBook_Grid />
                  </nav>
               </header>
               <main className='flex flex-wrap gap-4 py-4 pb-[100px] overflow-y-auto max-h-screen'>
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
                  <BookCard />
               </main>
            </div>
         </div>
      </>
   )
}

export default Home