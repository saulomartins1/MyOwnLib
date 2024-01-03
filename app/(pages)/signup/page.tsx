import React from 'react'
import NavLink from 'next/link'
import { LogoSVG } from '@/app/assets/LogoMyOwnLib'
import { handleGoogleSignIn } from '@/app/lib/actions'
import SignUpForm from './components/SignUpForm'

function SignUp() {
    return (
        <main className='h-screen flex flex-col items-center justify-center'>
            <article className='animate-login flex flex-col items-center gap-8'>
                <div className='flex flex-col items-center'>
                    <NavLink href='/'>
                        <LogoSVG />
                    </NavLink>
                    <h1 className='text-24 font-bold mt-5'>MyOwnLib</h1>
                    <span className='text-c100 text-14'>More than 19 free-read books</span>
                    <span className='text-c100 text-14'>Create an account and enjoy us!</span>
                </div>
                <SignUpForm />
                <form action={handleGoogleSignIn}>
                    <button className='hover:bg-dark3 transition-colors p-4 rounded-full text-c100 font-bold text-14'>
                        Sign Up with Google
                    </button>
                </form>
                <p className='text-text2'>Already have an account? <NavLink className='text-text underline' href="/signin">Sign In</NavLink></p>
            </article>
        </main>
    )
}

export default SignUp