import React from 'react'
import SideNav from '@/app/components/SideNav'
import { SearchBar } from '@/app/components/SearchBar'
import AllUserBooks from '@/app/(pages)/my-books/components/AllUserBooks'
import { Loading } from '@/app/components/ui/Loading'

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
                        <React.Suspense fallback={<Loading />}>
                            <AllUserBooks />
                        </React.Suspense>
                    </main>
                </div>
            </div>
        </>
    )
}

export default Home