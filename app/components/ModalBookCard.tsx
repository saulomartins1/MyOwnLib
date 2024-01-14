'use client'
import Image from 'next/image'
import React from 'react'
import { IconBookPages, IconMoreInfo, IconRating } from '../assets/svgIcons'
import { I_booksDB_User } from '@/app/types'
import ButtonBookAction from '@/app/components/ButtonBookAction'
import Button from '@/app/components/ui/Button'
import { usePathname } from 'next/navigation'


export function BtnModalBookInfo({ id, children, title, author, release, pages, pagesRead, pdfPath, coverUrl, synopsis, genre, rating }: I_booksDB_User) {
    const [modal, setModal] = React.useState(false);
    const [modalClass, setModalClass] = React.useState<'animate-login' | 'animate-logout'>('animate-login');
    const isOnHome = usePathname();

    const handleModal = (e: React.MouseEvent) => {

        const closeModalButton = e.target instanceof HTMLButtonElement && e.target.innerText == "Go back";
        const clickBgModal = e.target === e.currentTarget;

        if (modal && clickBgModal || closeModalButton && modalClass === 'animate-login') {

            setModalClass('animate-logout');

            setTimeout(() => {
                setModal((prev) => !prev);
                setModalClass('animate-login');
            }, 400);
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
                    {isOnHome === "/" ? <ButtonBookAction bookId={id} /> : <></>}
                    <Button type='secondary'>Go back</Button>
                </div>
            </article>
        </div>
    }

    return (
        <>
            <button className='w-full' onClick={() => setModal((prev) => !prev)}>{children ?? <IconMoreInfo />}</button>
            {modal && <ModalBookCard />}
        </>
    )
}

export default BtnModalBookInfo