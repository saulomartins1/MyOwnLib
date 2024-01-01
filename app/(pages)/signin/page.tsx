import React from 'react'
import NavLink from 'next/link'
import Button from '@/app/components/ui/Button'
import { LogoSVG } from '@/app/assets/LogoMyOwnLib'
import { InputEmail, InputPassword } from '@/app/components/ui/Input'

function SignIn() {
    return (
        <main className='h-screen flex items-center justify-center'>
            <article className='animate-login flex flex-col items-center gap-8'>
                <div className='flex flex-col items-center'>
                    <NavLink href='/'>
                        <LogoSVG />
                    </NavLink>
                    <h1 className='text-24 font-bold mt-5'>MyOwnLib</h1>
                    <span className='text-c100 text-14'>More than 19 free-read books</span>
                </div>
                <form className='flex flex-col items-center justify-center gap-8'>
                    <div className='flex flex-col gap-5'>
                        <InputEmail />
                        <InputPassword />
                    </div>
                    <Button>Sign In</Button>
                </form>
                <p className='text-text2'>Do not have an account? <NavLink className='text-text underline' href="/signup">Sign Up</NavLink></p>
            </article>
        </main>
    )
}

export default SignIn