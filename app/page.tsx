import React from 'react'
import SideNav from './components/SideNav'
import { InputSearchBook, SearchBook_Filter, SearchBook_Grid } from './components/ui/Input'

async function Home() {

   return (
      <>
         <div className='flex gap-4'>
            <SideNav />
            <div className='flex-grow'>
               <header className='p-4 bg-dark2 flex items-center justify-center gap-8'>
                  <nav className='flex'>
                     <InputSearchBook />
                     <SearchBook_Filter />
                     <SearchBook_Grid />
                  </nav>
               </header>
               <main className='bg-[red]'>Books here</main>
            </div>
         </div>
      </>
   )
}

export default Home