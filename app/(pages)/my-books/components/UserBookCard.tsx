import Image from 'next/image'
import React from 'react'
import BtnModalBookInfo from '@/app/components/ModalBookCard'
import ButtonBookAction from '@/app/components/ButtonBookAction'
import { I_booksDB_User } from '@/app/types'
import { IconBookPages } from '@/app/assets/svgIcons'

function UserBookCard({ id, title, author, release, pages, pagesRead, pdfPath, coverUrl, synopsis, genre, rating }: I_booksDB_User) {

    return (
        <article className='flex flex-col justify-between bg-dark2 p-4 w-[232px] h-[180px] rounded-lg border-[1px] border-borders'>
            <div className='flex items-center gap-3'>
                <div className='skeletonImg flex-shrink-0 w-12 h-16 bg-dark1 border-borders border-[1px] rounded-md overflow-hidden'>
                    <Image className='z-[1] object-fill h-full' src={coverUrl} width="48" height="64" alt={`Cover of ${title} by ${author}`} />
                </div>
                <div className='flex flex-col py-1 truncate'>
                    <h2 className='font-bold text-14 truncate' title={title}>{title}</h2>
                    <p className='text-c100 text-12'>{author}</p>
                    <div className='flex flex-wrap gap-1'>
                        <span className=' mt-1 flex gap-2 bg-dark3 rounded-md border-[1px] border-borders px-1 py-[.5px] max-w-max text-12 text-text2'><IconBookPages />{pagesRead}/{pages}</span>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <div>
                    <BtnModalBookInfo id={id} title={title} pagesRead={pagesRead} author={author} release={release} pages={pages} pdfPath={pdfPath} coverUrl={coverUrl} synopsis={synopsis} genre={genre} rating={rating} />
                </div>
                <ButtonBookAction text='Read' bookId={id} title={title} author={author} pages={pages} pdfPath={pdfPath} />
            </div>
        </article>
    )
}

export default UserBookCard