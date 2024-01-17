'use client'
import Button from '@/app/components/ui/Button'
import { InputEmail, InputPassword } from '@/app/components/ui/Input'
import { Loading } from '@/app/components/ui/Loading';
import React from 'react'

function SignInForm() {
    const [error, setError] = React.useState('');
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const email = e.target[0].value;
            const password = e.target[1].value;

            const response = await fetch("/api/signin", {
                method: "POST",
                headers: { 'Content-Type': 'application/json', },
                body: JSON.stringify({ email, password })
            });

            if (response.status === 200) {
                setError('');
                window.location.href = "/" //First time when signin fix "undefined" session
            } else {
                const ErrorResponse = await response.text();
                setError(`${ErrorResponse}`);
            }

        } catch (error) {
            console.log(error)
        } finally {
            setIsLoading(false);
        }
    }

    return <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center gap-8'>
        <div className='flex flex-col gap-5'>
            <InputEmail />
            <InputPassword />
        </div>
        {error.length > 0 && <p className='text-[#fe8b3e]'>{error}</p>}
        {isLoading ?
            <Button status='loading'><Loading /> Wait...</Button>
            :
            <Button>Sign In</Button>
        }
    </form>
}

export default SignInForm