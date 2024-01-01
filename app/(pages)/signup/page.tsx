'use client'
import React from 'react'
import NavLink from 'next/link'
import Button from '@/app/components/ui/Button'
import { LogoSVG } from '@/app/assets/LogoMyOwnLib'
import { InputEmail, InputPassword } from '@/app/components/ui/Input'
import { useRouter } from 'next/navigation'

const validate = {
    email: (value: string) => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(value);
    },
    password: (value: string) => {
        if (value.length < 8) return true;
    }
}

function SignUp() {
    const [error, setError] = React.useState('');
    const router = useRouter()

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            const email = e.target[0].value;
            if (!validate.email(email)) return setError("Invalid email, try it again!");

            const password = e.target[1].value;
            if (validate.password(password)) {
                return setError("Password needs at least 8+ digits!");
            } else { setError("") }

            const response = await fetch("/api/signup", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password
                })
            });
            if (response.status === 400) {
                setError("This email already exists!");
            } else if (response.status === 200) {
                setError('');
                router.push('/signin');
                return;
            }

        } catch (error: any) {

        }
        finally {

        }

    }

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
                <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-8'>
                    <div className='flex flex-col gap-5'>
                        <InputEmail />
                        <InputPassword />
                    </div>
                    {error.length > 0 && <p className='text-[#fe8b3e]'>{error}</p>}
                    <Button>Sign Up</Button>
                </form>
                <p className='text-text2'>Already have an account? <NavLink className='text-text underline' href="/signin">Sign In</NavLink></p>


            </article>
        </main>
    )
}

export default SignUp