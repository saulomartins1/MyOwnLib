'use client'
import Image from 'next/image'
import React from 'react'
import { I_booksDB } from '../data/books'
import { IconBookPages } from './BookCard'
import Button from './ui/Button'

const IconMoreInfo = () => {
    return <svg className='pointer-events-none' xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M11.3 18H13.7V10.8H11.3V18ZM12.5 8.4C12.84 8.4 13.125 8.285 13.355 8.055C13.585 7.825 13.7 7.54 13.7 7.2C13.7 6.86 13.585 6.575 13.355 6.345C13.125 6.115 12.84 6 12.5 6C12.16 6 11.875 6.115 11.645 6.345C11.415 6.575 11.3 6.86 11.3 7.2C11.3 7.54 11.415 7.825 11.645 8.055C11.875 8.285 12.16 8.4 12.5 8.4ZM12.5 24C10.84 24 9.28 23.685 7.82 23.055C6.36 22.425 5.09 21.57 4.01 20.49C2.93 19.41 2.075 18.14 1.445 16.68C0.815 15.22 0.5 13.66 0.5 12C0.5 10.34 0.815 8.78 1.445 7.32C2.075 5.86 2.93 4.59 4.01 3.51C5.09 2.43 6.36 1.575 7.82 0.945C9.28 0.315 10.84 0 12.5 0C14.16 0 15.72 0.315 17.18 0.945C18.64 1.575 19.91 2.43 20.99 3.51C22.07 4.59 22.925 5.86 23.555 7.32C24.185 8.78 24.5 10.34 24.5 12C24.5 13.66 24.185 15.22 23.555 16.68C22.925 18.14 22.07 19.41 20.99 20.49C19.91 21.57 18.64 22.425 17.18 23.055C15.72 23.685 14.16 24 12.5 24ZM12.5 21.6C15.18 21.6 17.45 20.67 19.31 18.81C21.17 16.95 22.1 14.68 22.1 12C22.1 9.32 21.17 7.05 19.31 5.19C17.45 3.33 15.18 2.4 12.5 2.4C9.82 2.4 7.55 3.33 5.69 5.19C3.83 7.05 2.9 9.32 2.9 12C2.9 14.68 3.83 16.95 5.69 18.81C7.55 20.67 9.82 21.6 12.5 21.6Z" fill="currentColor" />
    </svg>
}

const IconRating = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M5.48 11.86L8 10.34L10.52 11.88L9.86 9L12.08 7.08L9.16 6.82L8 4.1L6.84 6.8L3.92 7.06L6.14 9L5.48 11.86ZM3.06 15.2L4.36 9.58L0 5.8L5.76 5.3L8 0L10.24 5.3L16 5.8L11.64 9.58L12.94 15.2L8 12.22L3.06 15.2Z" fill="currentColor" />
    </svg>
}

function BtnModalBookInfo({ id, title, author, release, pages, pdfPath, coverUrl, synopsis, genre, rating }: I_booksDB) {
    const [modal, setModal] = React.useState(false);
    const [modalClass, setModalClass] = React.useState<'animate-login' | 'animate-logout'>('animate-login');

    const handleModal = (e: React.MouseEvent) => {
        if (modal && (e.target === e.currentTarget || e.target instanceof HTMLButtonElement) && modalClass === 'animate-login') {

            setModalClass('animate-logout');

            setTimeout(() => {
                setModal((prev) => !prev);
                setModalClass('animate-login');
            }, 500);
        }
    }

    const ModalBookCard = () => {
        return <div onClick={(e) => modal && handleModal(e)} className='absolute inset-0 bg-[#0009] flex justify-center items-center'>
            <article className={`${modalClass} flex flex-col gap-12 justify-between bg-dark3 p-4 w-[480px] rounded-lg border-[1px] border-borders`}>
                <div className='flex items-start gap-3'>
                    <div className='flex-shrink-0 w-[110px] h-[146px] bg-dark1 border-borders border-[1px] rounded-md overflow-hidden'>
                        <Image className='object-fill h-full' src={coverUrl} width="110" height="146" alt="Cover of {booksName}" />
                    </div>
                    <div className='flex flex-col py-1'>
                        <h2 className='font-bold text-24'>{title}</h2>
                        <p className='text-c100 text-14 mt-1'>{author}</p>
                        <div className='flex flex-wrap gap-2 mt-4'>
                            <span className='mt-1 flex items-center gap-2 bg-dark2 rounded-md border-[1px] border-borders px-1 py-[.5px] max-w-max text-14 text-text2'>{release}</span>
                            <span className='mt-1 flex items-center gap-2 bg-dark2 rounded-md border-[1px] border-borders px-1 py-[.5px] max-w-max text-14 text-text2'><IconBookPages />{pages} pages</span>
                            <span className='mt-1 flex items-center gap-2 bg-dark2 rounded-md border-[1px] border-borders px-1 py-[.5px] max-w-max text-14 text-text2'><IconRating />{rating}</span>
                            <span className='mt-1 flex items-center gap-2 bg-dark2 rounded-md border-[1px] border-borders px-1 py-[.5px] max-w-max text-14 text-text2'>{genre}</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-2'>
                    <h3 className='font-bold'>Synopsis</h3>
                    <div className='boxShadowSynopsis rounded-sm bg-dark2 p-4 max-h-[150px] overflow-y-auto'>
                        <p className='break-words text-text2'>{synopsis}</p>
                    </div>
                </div>
                <div className='flex items-center gap-4 justify-center'>
                    <Button>Get book</Button>
                    <Button type='secondary'>Go back</Button>
                </div>
            </article>
        </div>
    }
    return (
        <>
            <button onClick={() => setModal((prev) => !prev)}><IconMoreInfo /></button>
            {modal && <ModalBookCard />}
        </>
    )
}

export default BtnModalBookInfo