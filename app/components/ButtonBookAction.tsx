"use client"
import Button from '@/app/components/ui/Button'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'

function ButtonBookAction({ bookId, text }: { bookId?: number, text?: string; }) {
    const { data: session, status } = useSession();
    const router = useRouter()

    const getBook = async () => {
        try {
            if (status !== "authenticated") return router.push('/signin');
            const userEmail = session.user?.email;

            const response = await fetch("/api/getbook", { //Relative paths problems, url must be absolute
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userEmail, bookId })
            })

            if (response.status !== 201) {
                const error = await response.text();
                return alert(error);
            }

            const addedMsg = await response.text();
            router.refresh();
            return alert(addedMsg);


        } catch (error) {
            console.log(error)
        }
    }

    const readBook = async () => {
        return console.log("Read")
    }

    if (text === "Read") {
        return <form action={readBook}>
            <Button>{text}</Button>
        </form>
    } else {
        return <form action={getBook}>
            <Button>Get Book</Button>
        </form>
    }
}

export default ButtonBookAction