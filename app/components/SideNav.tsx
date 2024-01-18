import React from 'react'
import NavLink from 'next/link'
import { auth } from '@/app/lib/auth'
import { handleSignOut } from '@/app/lib/actions'
import { IconAccount, IconHome, IconLogOut, IconOnFire } from '@/app/assets/svgIcons';
import Image from 'next/image';

async function SideNav() {
    const session = await auth();
    const emailToUsername = session?.user?.email?.split("@")[0];

    return (
        <aside className='flex-shrink-0 bg-dark2 w-[256px] flex flex-col border-r-[1px] border-borders'>
            {!session?.user ?
                <NavLink className='flex gap-3 items-center p-6 hover:bg-dark3 font-bold border-b-2 border-borders' href="/signup">
                    <IconAccount /> Sign Up
                </NavLink>
                :
                <>
                    <div className='flex gap-3 items-center justify-between p-6 font-bold border-b-2 border-borders'>
                        <div className='flex items-center gap-3 truncate'>
                            {session?.user.image ?
                                <div className='flex justify-center items-center text-text2 w-12 h-12 bg-dark1 rounded-full overflow-hidden object-cover'>
                                    <Image src={session?.user.image} width={48} height={48} alt={`Profile's photo of ${session?.user.name}`} />
                                </div>
                                :
                                <div className='flex justify-center items-center text-text2 w-12 h-12 bg-dark1 rounded-full'><IconAccount /></div>
                            }
                            <span className="truncate" title={emailToUsername}>{emailToUsername}</span>
                        </div>
                        <form action={handleSignOut} className="inline">
                            <button className='hover:bg-dark1 transition-colors p-4 rounded-full text-c100 font-bold text-14' title="Sign Out">
                                <IconLogOut />
                            </button>
                        </form>
                    </div>
                </>
            }
            <nav className="flex flex-col">
                <NavLink className="flex gap-3 items-center p-6 hover:bg-dark1 font-bold" href='/#onfire'><IconOnFire />3 days on fire</NavLink>
                <NavLink className="flex gap-3 items-center p-6 hover:bg-dark1 font-bold" href='/'><IconHome />Home</NavLink>
                <NavLink className="flex gap-3 items-center p-6 hover:bg-dark1 font-bold" href='/my-books'><IconHome />My books</NavLink>
            </nav>
        </aside>
    )
}

export default SideNav