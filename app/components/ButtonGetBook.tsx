"use client"
import Button from '@/app/components/ui/Button'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'

function ButtonGetBook({ bookId }: { bookId?: number }) {
    const { data: session, status } = useSession();
    const router = useRouter()

    const handleSubmit = async () => {

        try {
            if (status !== "authenticated") return router.push('/signin');
            const userId = session.user?.id;

            const response = await fetch("/api/getbook", { //Relative paths problems, url must be absolute
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userId, bookId })
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

    return <form action={handleSubmit}>
        <Button>Get Book</Button>
    </form>
}

export default ButtonGetBook