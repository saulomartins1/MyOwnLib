"use client"
import Button from '@/app/components/ui/Button'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import BookViewer from './BookViewer';

function ButtonBookAction({ bookId, text }: { bookId?: number, text?: string; }) {
    const { data: session, status } = useSession();
    const router = useRouter()
    const [isReading, setIsReading] = React.useState(false);

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


    React.useEffect(() => {
        const keyDownHandler = (event: any) => {

            if (event.key === 'Escape') {
                event.preventDefault();
                if (isReading) setIsReading((prev) => !prev);
            }
        };

        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [isReading]);


    const readBook = async () => {
        // Desenvolver a lógica de ler um livro específico, na última página que o usuário parou
        // Traquear o progresso de cada livro individualmente;
        setIsReading((prev) => !prev);
        return console.log("Read", bookId);
    }

    if (text === "Read") {
        return <>
            <form action={readBook}>
                <Button>{text}</Button>
            </form>
            {isReading && <BookViewer bookId={bookId as number} />}
        </>
    } else {
        return <form action={getBook}>
            <Button>Get Book</Button>
        </form>
    }
}

export default ButtonBookAction