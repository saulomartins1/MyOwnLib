'use client'

import Button from '@/app/components/ui/Button'
import { InputEmail, InputPassword } from '@/app/components/ui/Input'
import { Loading } from '@/app/components/ui/Loading';
import { useRouter } from 'next/navigation';
import React from 'react'

const validate = {
    email: (value: string) => {
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexEmail.test(value);
    },
    password: (value: string) => {
        if (value.length < 3) return true;
    }
}

function SignUpForm() {
    const [error, setError] = React.useState('');
    const router = useRouter();
    const [isLoading, setIsLoading] = React.useState(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            const email = e.target[0].value;
            if (!validate.email(email)) return setError("Invalid email, try again!");

            const password = e.target[1].value;
            if (validate.password(password)) {
                return setError("Password needs at least 3+ digits!");
            } else { setError("") }

            const response = await fetch("/api/signup", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });

            if (response.status === 201) {
                setError('');
                setIsLoading(false);
                router.push('/signin');
            } else {
                const ErrorResponse = await response.text();
                setError(`${ErrorResponse}`);
            }

        } catch (error) {
            console.log(error);
        }
        finally {
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
            <Button>Sign Up</Button>
        }
    </form>
}

export default SignUpForm