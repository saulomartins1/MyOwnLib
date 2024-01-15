"use client"
import Button from '@/app/components/ui/Button'
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react'
import { I_BookGetOrRead, I_UserBookReading } from '@/app/types';
import BookViewer from '@/app/components/BookViewer';


function ButtonBookAction({ bookId, text, title, author, pages, pdfPath }: I_BookGetOrRead) {
    const { data: session, status } = useSession();
    const router = useRouter()
    const [readingBookInfo, setReadingBookInfo] = React.useState<I_UserBookReading | null>(null);

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
                if (readingBookInfo) setReadingBookInfo(null);
            }
        };

        document.addEventListener('keydown', keyDownHandler);
        return () => {
            document.removeEventListener('keydown', keyDownHandler);
        };
    }, [readingBookInfo]);


    const readBook = async () => {
        try {
            if (status !== "authenticated") return router.push('/signin');
            const userEmail = session.user?.email;

            const response = await fetch("/api/readbook", { //Relative paths problems, url must be absolute
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userEmail, bookId })
            })

            if (response.status !== 200) {
                const error = await response.text();
                return alert(error);
            }
            const dataBook = await response.json();
            if (!dataBook) return;

            setReadingBookInfo({ ...dataBook, title, author, pages, pdfPath });
            return true;

        } catch (error) {
            console.log(error)
        }
    }

    if (text === "Read") {
        return <>
            <form action={readBook}>
                <Button>{text}</Button>
            </form>
            {readingBookInfo && <BookViewer readingBookInfo={readingBookInfo} />}
        </>
    } else {
        return <form action={getBook}>
            <Button>Get Book</Button>
        </form>
    }
}

export default ButtonBookAction