import React from 'react'
import NavLink from 'next/link'
import { handleSignOut } from './lib/actions'
import { auth } from './lib/auth'
import SideNav from './components/SideNav'

async function Home() {
   const session = await auth()

   return (
      <>
         <div className='flex gap-4'>
            <SideNav />
            <div className='flex-grow'>
               <header className='bg-[blue] flex items-center justify-center gap-8'> <nav>
                  <NavLink className='mr-8' href="/">Search for a book</NavLink>
                  {session?.user &&
                     <form action={handleSignOut} className="inline">
                        <button className='hover:bg-dark3 transition-colors p-4 rounded-full text-c100 font-bold text-14'>
                           Sign Out
                        </button>
                     </form>
                  }
               </nav>
               </header>
               <main className='bg-[red]'>Books here</main>
            </div>
         </div>
      </>
   )
}

export default Home