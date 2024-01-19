import React from 'react'
import NavLink from 'next/link'
import { LogoSVG } from '@/app/assets/LogoMyOwnLib'
import SignUpForm from '@/app/(pages)/signup/components/SignUpForm'
import { SignInWithGoogle } from '@/app/(pages)/signin/components/SignInWithGoogle'

function SignUp() {
    return (
        <main className='h-screen flex flex-col items-center justify-center'>
            <article className='animate-login flex flex-col items-center gap-8'>
                <div className='flex flex-col items-center'>
                    <NavLink href='/'>
                        <LogoSVG />
                    </NavLink>
                    <h1 className='text-24 font-bold mt-5'>MyOwnLib</h1>
                    <span className='text-c100 text-14'>More than ** free-to-read books</span>
                    <span className='text-c100 text-14'>Create an account and join us!</span>
                </div>
                <SignUpForm />
                <SignInWithGoogle />
                <p className='text-text2'>Already have an account? <NavLink className='text-text underline' href="/signin">Sign In</NavLink></p>
            </article>
        </main>
    )
}

export default SignUp