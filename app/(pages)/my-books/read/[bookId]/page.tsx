"use client"
import React from 'react'

import { useParams } from 'next/navigation'

function page() {
    const { bookId } = useParams<{ bookId: string }>()

    return <>
        <header>Current book: {bookId}</header>
        <main>read viewer</main>
    </>

}

export default page