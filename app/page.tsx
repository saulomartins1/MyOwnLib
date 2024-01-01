import React from 'react'
import NavLink from 'next/link'
import { LogoSVG } from './assets/LogoMyOwnLib'

function Home() {
  return (
    <>
      <header className='bg-dark2 flex items-center justify-center gap-8'><LogoSVG /> <nav>
        <NavLink className='mr-8' href="/">Books</NavLink>
        <NavLink className='mr-8 font-bold' href="/mylibrary">My Library</NavLink>
        <NavLink className='mr-8' href="/signin">Sign In</NavLink>
        <NavLink href="/signup">Sign Up</NavLink>
      </nav></header>
      <h1>All books</h1>
    </>
  )
}

export default Home