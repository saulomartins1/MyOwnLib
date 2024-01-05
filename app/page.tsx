import React from 'react'
import NavLink from 'next/link'
import SideNav from './components/SideNav'

async function Home() {

   return (
      <>
         <div className='flex gap-4'>
            <SideNav />
            <div className='flex-grow'>
               <header className='bg-[blue] flex items-center justify-center gap-8'> <nav>
                  <NavLink className='mr-8' href="/">Search for a book</NavLink>
               </nav>
               </header>
               <main className='bg-[red]'>Books here</main>
            </div>
         </div>
      </>
   )
}

export default Home