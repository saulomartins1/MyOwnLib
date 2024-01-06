import Image from 'next/image'
import React from 'react'
import Button from './ui/Button'
import { I_booksDB } from '@/app/data/books'

const IconBookPages = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M8 15.0909C7.41818 14.6303 6.78788 14.2727 6.10909 14.0182C5.4303 13.7636 4.72727 13.6364 4 13.6364C3.49091 13.6364 2.99091 13.703 2.5 13.8364C2.00909 13.9697 1.53939 14.1576 1.09091 14.4C0.836364 14.5333 0.590909 14.5273 0.354545 14.3818C0.118182 14.2364 0 14.0242 0 13.7455V4.98182C0 4.84848 0.0333333 4.72121 0.1 4.6C0.166667 4.47879 0.266667 4.38788 0.4 4.32727C0.957576 4.03636 1.53939 3.81818 2.14545 3.67272C2.75152 3.52727 3.3697 3.45454 4 3.45454C4.70303 3.45454 5.39091 3.54545 6.06364 3.72727C6.73636 3.90909 7.38182 4.18182 8 4.54545V13.3455C8.61818 12.9576 9.26667 12.6667 9.94545 12.4727C10.6242 12.2788 11.3091 12.1818 12 12.1818C12.4364 12.1818 12.8636 12.2182 13.2818 12.2909C13.7 12.3636 14.1212 12.4727 14.5455 12.6182V3.89091C14.7273 3.95151 14.9061 4.01515 15.0818 4.08182C15.2576 4.14848 15.4303 4.2303 15.6 4.32727C15.7333 4.38788 15.8333 4.47879 15.9 4.6C15.9667 4.72121 16 4.84848 16 4.98182V13.7455C16 14.0242 15.8818 14.2364 15.6455 14.3818C15.4091 14.5273 15.1636 14.5333 14.9091 14.4C14.4606 14.1576 13.9909 13.9697 13.5 13.8364C13.0091 13.703 12.5091 13.6364 12 13.6364C11.2727 13.6364 10.5697 13.7636 9.89091 14.0182C9.21212 14.2727 8.58182 14.6303 8 15.0909ZM9.45455 11.4545V4.54545L13.0909 0.909088V8.18182L9.45455 11.4545ZM6.54545 12.6364V5.43636C6.14545 5.26666 5.7303 5.13636 5.3 5.04545C4.8697 4.95454 4.43636 4.90909 4 4.90909C3.55152 4.90909 3.11515 4.95151 2.69091 5.03636C2.26667 5.12121 1.85455 5.24848 1.45455 5.41818V12.6364C1.87879 12.4788 2.3 12.3636 2.71818 12.2909C3.13636 12.2182 3.56364 12.1818 4 12.1818C4.43636 12.1818 4.86364 12.2182 5.28182 12.2909C5.7 12.3636 6.12121 12.4788 6.54545 12.6364Z" fill="currentColor" />
    </svg>
}
const IconMoreInfo = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M11.3 18H13.7V10.8H11.3V18ZM12.5 8.4C12.84 8.4 13.125 8.285 13.355 8.055C13.585 7.825 13.7 7.54 13.7 7.2C13.7 6.86 13.585 6.575 13.355 6.345C13.125 6.115 12.84 6 12.5 6C12.16 6 11.875 6.115 11.645 6.345C11.415 6.575 11.3 6.86 11.3 7.2C11.3 7.54 11.415 7.825 11.645 8.055C11.875 8.285 12.16 8.4 12.5 8.4ZM12.5 24C10.84 24 9.28 23.685 7.82 23.055C6.36 22.425 5.09 21.57 4.01 20.49C2.93 19.41 2.075 18.14 1.445 16.68C0.815 15.22 0.5 13.66 0.5 12C0.5 10.34 0.815 8.78 1.445 7.32C2.075 5.86 2.93 4.59 4.01 3.51C5.09 2.43 6.36 1.575 7.82 0.945C9.28 0.315 10.84 0 12.5 0C14.16 0 15.72 0.315 17.18 0.945C18.64 1.575 19.91 2.43 20.99 3.51C22.07 4.59 22.925 5.86 23.555 7.32C24.185 8.78 24.5 10.34 24.5 12C24.5 13.66 24.185 15.22 23.555 16.68C22.925 18.14 22.07 19.41 20.99 20.49C19.91 21.57 18.64 22.425 17.18 23.055C15.72 23.685 14.16 24 12.5 24ZM12.5 21.6C15.18 21.6 17.45 20.67 19.31 18.81C21.17 16.95 22.1 14.68 22.1 12C22.1 9.32 21.17 7.05 19.31 5.19C17.45 3.33 15.18 2.4 12.5 2.4C9.82 2.4 7.55 3.33 5.69 5.19C3.83 7.05 2.9 9.32 2.9 12C2.9 14.68 3.83 16.95 5.69 18.81C7.55 20.67 9.82 21.6 12.5 21.6Z" fill="currentColor" />
    </svg>
}

//Objetivo de hoje:
/* 
- Finalizar a página da home em relação aos CARDS dos livros;
- Como lidar com a barra de pesquisa e os filtros;
- Ver como vai ser manipulada a questão do modal de informações com o restante das infos do livro;
- 48px de altura no botão de get book;

//----- Depois dos arranjos acima, descobrir como adicionar o livro em "My-books" = na database do usuário;
*/

function BookCard({ id, title, author, release, pages, pdfPath, coverUrl, synopsis, genre, rating }: I_booksDB) {
    return (
        <article className='flex flex-col justify-between bg-dark2 p-4 w-[232px] h-[180px] rounded-lg border-[1px] border-borders'>
            <div className='flex items-center gap-3'>
                <div className='flex-shrink-0 w-12 h-16 bg-dark1 border-borders border-[1px] rounded-md overflow-hidden'>
                    <Image src={coverUrl} width="48" height="64" alt="Cover of {booksName}" />
                </div>
                <div className='flex flex-col py-1 truncate'>
                    <h2 className='font-bold text-14 truncate'>{title}</h2>
                    <p className='text-c100 text-12'>{author}</p>
                    <div className='flex gap-1'>
                        <span className='mt-1 flex gap-2 bg-dark3 rounded-md border-[1px] border-borders px-1 py-[.5px] max-w-max text-12 text-text2'>{release}</span>
                        <span className=' mt-1 flex gap-2 bg-dark3 rounded-md border-[1px] border-borders px-1 py-[.5px] max-w-max text-12 text-text2'><IconBookPages />{pages}</span>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-between'>
                <button>
                    <IconMoreInfo />
                </button>
                <Button>Get book</Button>
            </div>
        </article>
    )
}

export default BookCard