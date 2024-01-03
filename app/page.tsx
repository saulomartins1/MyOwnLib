import React from 'react'
import NavLink from 'next/link'
import { LogoSVG } from './assets/LogoMyOwnLib'
import { handleSignOut } from './lib/actions'
import { auth } from './lib/auth'

/*

Sistema de login pronto, funcionando credentials - sign UP e sign IN;
Funcionando GoogleProvider com sign up / in direto;

Ambos estão sendo salvos na database (mongoose) quando sign UP;

////A fazer:
Continuar a criação da UI;
-> Tela inicial principal.

*/

async function Home() {
  const session = await auth()

  return (
    <>
      <header className='bg-dark2 flex items-center justify-center gap-8'><LogoSVG /> <nav>
        <NavLink className='mr-8' href="/">Books</NavLink>
        <NavLink className='mr-8 font-bold' href="/mylibrary">My Library</NavLink>
        <NavLink className='mr-8' href="/signin">Sign In</NavLink>
        <NavLink href="/signup">Sign Up</NavLink>
        {session?.user &&
          <form action={handleSignOut}>
            <button className='hover:bg-dark3 transition-colors p-4 rounded-full text-c100 font-bold text-14'>
              Sign Out
            </button>
          </form>
        }
      </nav></header>
      <h1>All books</h1>
    </>
  )
}

export default Home