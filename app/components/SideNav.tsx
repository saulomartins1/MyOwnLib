import React from 'react'
import NavLink from 'next/link'
import { auth } from '@/app/lib/auth'
import { handleSignOut } from '@/app/lib/actions'
import { IconAccount, IconHome, IconOnFire } from '@/app/assets/svgIcons';

async function SideNav() {
    const session = await auth();

    return (
        <aside className='flex-shrink-0 bg-dark2 w-[256px] flex flex-col gap-4 border-r-[1px] border-borders'>
            {!session?.user ?
                <NavLink className='flex gap-3 items-center p-6 hover:bg-dark3 font-bold border-b-2 border-borders' href="/signup">
                    <IconAccount /> Sign Up
                </NavLink>
                :
                <>
                    <NavLink
                        className='flex gap-3 items-center p-6 hover:bg-dark3 font-bold border-b-2 border-borders'
                        href="/signup">
                        <IconAccount /> <span className="truncate">{session?.user.email}</span>
                    </NavLink>
                    <form action={handleSignOut} className="inline">
                        <button className='hover:bg-dark3 transition-colors p-4 rounded-full text-c100 font-bold text-14'>
                            Sign Out
                        </button>
                    </form>
                </>
            }
            <nav className="flex flex-col">
                <NavLink className="flex gap-3 items-center p-6 hover:bg-dark3 font-bold" href='/#onfire'><IconOnFire />3 days on fire</NavLink>
                <NavLink className="flex gap-3 items-center p-6 hover:bg-dark3 font-bold" href='/'><IconHome />Home</NavLink>
                <NavLink className="flex gap-3 items-center p-6 hover:bg-dark3 font-bold" href='/my-books'><IconHome />My books</NavLink>
            </nav>
        </aside >
    )
}

export default SideNav