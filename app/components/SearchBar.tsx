'use client'
import Image from "next/image"
import React from "react"
import { booksDB, I_booksDB } from "../data/books"
import BtnModalBookInfo from "./ModalBookCard"

// SEARCH BAR
const IconSearchBar = () => {
    return <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
        <path d="M18.9444 20.5L11.9444 13.5C11.3889 13.9444 10.75 14.2963 10.0278 14.5556C9.30556 14.8148 8.53704 14.9444 7.72222 14.9444C5.7037 14.9444 3.99537 14.2454 2.59722 12.8472C1.19907 11.4491 0.5 9.74074 0.5 7.72222C0.5 5.7037 1.19907 3.99537 2.59722 2.59722C3.99537 1.19907 5.7037 0.5 7.72222 0.5C9.74074 0.5 11.4491 1.19907 12.8472 2.59722C14.2454 3.99537 14.9444 5.7037 14.9444 7.72222C14.9444 8.53704 14.8148 9.30556 14.5556 10.0278C14.2963 10.75 13.9444 11.3889 13.5 11.9444L20.5 18.9444L18.9444 20.5ZM7.72222 12.7222C9.11111 12.7222 10.2917 12.2361 11.2639 11.2639C12.2361 10.2917 12.7222 9.11111 12.7222 7.72222C12.7222 6.33333 12.2361 5.15278 11.2639 4.18056C10.2917 3.20833 9.11111 2.72222 7.72222 2.72222C6.33333 2.72222 5.15278 3.20833 4.18056 4.18056C3.20833 5.15278 2.72222 6.33333 2.72222 7.72222C2.72222 9.11111 3.20833 10.2917 4.18056 11.2639C5.15278 12.2361 6.33333 12.7222 7.72222 12.7222Z" fill="currentColor" />
    </svg>
}
const SearchBar_Filter = () => {
    return <button className="text-text2 px-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
            <path d="M9.25321 20.4487C8.89995 20.4487 8.60384 20.3292 8.36487 20.0902C8.1259 19.8512 8.00642 19.5551 8.00642 19.2019V11.7211L0.775027 2.49487C0.46333 2.07927 0.416575 1.64289 0.634763 1.18574C0.852952 0.728578 1.23218 0.5 1.77246 0.5H19.2275C19.7678 0.5 20.147 0.728578 20.3652 1.18574C20.5834 1.64289 20.5367 2.07927 20.225 2.49487L12.9936 11.7211V19.2019C12.9936 19.5551 12.8741 19.8512 12.6351 20.0902C12.3962 20.3292 12.1 20.4487 11.7468 20.4487H9.25321ZM10.5 10.8484L16.6716 2.99358H4.32838L10.5 10.8484Z" fill="currentColor" />
        </svg>
    </button>
}
const SearchBar_Grid = () => {
    return <button className="text-text2 px-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
            <path d="M2.72222 9.38889C2.11111 9.38889 1.58796 9.1713 1.15278 8.73611C0.717593 8.30093 0.5 7.77778 0.5 7.16667V2.72222C0.5 2.11111 0.717593 1.58796 1.15278 1.15278C1.58796 0.717593 2.11111 0.5 2.72222 0.5H18.2778C18.8889 0.5 19.412 0.717593 19.8472 1.15278C20.2824 1.58796 20.5 2.11111 20.5 2.72222V7.16667C20.5 7.77778 20.2824 8.30093 19.8472 8.73611C19.412 9.1713 18.8889 9.38889 18.2778 9.38889H2.72222ZM2.72222 7.16667H18.2778V2.72222H2.72222V7.16667ZM2.72222 20.5C2.11111 20.5 1.58796 20.2824 1.15278 19.8472C0.717593 19.412 0.5 18.8889 0.5 18.2778V13.8333C0.5 13.2222 0.717593 12.6991 1.15278 12.2639C1.58796 11.8287 2.11111 11.6111 2.72222 11.6111H18.2778C18.8889 11.6111 19.412 11.8287 19.8472 12.2639C20.2824 12.6991 20.5 13.2222 20.5 13.8333V18.2778C20.5 18.8889 20.2824 19.412 19.8472 19.8472C19.412 20.2824 18.8889 20.5 18.2778 20.5H2.72222ZM2.72222 18.2778H18.2778V13.8333H2.72222V18.2778Z" fill="currentColor" />
        </svg>
    </button>
}
//-----
const SearchResult = ({ id, title, author, release, pages, pdfPath, coverUrl, synopsis, genre, rating }: I_booksDB) => {

    return <>
        <div className="flex hover:bg-dark1 items-center">
            <BtnModalBookInfo id={id} title={title} author={author} release={release} pages={pages} pdfPath={pdfPath} coverUrl={coverUrl} synopsis={synopsis} genre={genre} rating={rating}>
                <div className="flex gap-2 p-2">
                    <div className='flex-shrink-0 w-8 h-12 bg-dark1 border-borders border-[1px] rounded-md overflow-hidden'>
                        <Image className='object-fill h-full' src={coverUrl} width="32" height="48" alt="Cover of {booksName}" />
                    </div>
                    <div className="flex flex-col items-start truncate w-full text-left">
                        <h2 className='text-text font-bold text-14 w-full truncate'>{title}</h2>
                        <p className='text-c100 text-12'>{author}</p>
                    </div>
                </div>
            </BtnModalBookInfo>
        </div>
    </>
}

export const SearchBar = () => {
    const [results, setResults] = React.useState<I_booksDB[] | []>([]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {

        const searchValue = e.currentTarget.value.toLowerCase();
        if (searchValue.length <= 0) return setResults([]);

        const ValueMatchResult = booksDB
            .map((book) => {
                const titleScore = book.title.toLowerCase().includes(searchValue) ? 2 : 0;
                const authorScore = book.author.toLowerCase().includes(searchValue) ? 1 : 0;
                const totalScore = titleScore + authorScore;

                return { book, totalScore };
            })
            .filter((item) => item.totalScore > 0)
            .sort((a, b) => b.totalScore - a.totalScore)
            .map((item) => item.book);


        setResults(ValueMatchResult);

    }

    return <>
        <div>
            <div className="relative flex items-center">
                <span className='absolute text-text_opacity left-5 top-[50%] -translate-y-[50%]' >
                    <IconSearchBar />
                </span>
                <input onChange={(e) => handleSearch(e)} type='text' placeholder='Search for a book...' name="searchBook" className='pl-[60px] placeholder:text-text_opacity bg-borders px-9 py-3 rounded-full outline-none borderCard' autoComplete='off' />
                <SearchBar_Filter />
                <SearchBar_Grid />
            </div>
            <div className="bg-dark3 flex flex-col rounded-lg overflow-hidden w-[318px] max-h-[150px] overflow-y-auto">
                {results.length > 0 && <p className="flex justify-end pr-2">{`${results.length > 1 ? `${results.length} results found` : `${results.length} result found`}`}</p>}
                {results.length > 0 && results.map(({ id, title, author, release, pages, pdfPath, coverUrl, synopsis, genre, rating }: I_booksDB, index) =>
                    <SearchResult
                        key={index}
                        id={id}
                        coverUrl={coverUrl}
                        title={title}
                        author={author}
                        release={release}
                        pages={pages}
                        pdfPath={pdfPath}
                        synopsis={synopsis}
                        genre={genre}
                        rating={rating}
                    />
                )}
            </div>
        </div>
    </>
}