'use client'
import Image from "next/image"
import React from "react"
import { IconSearchBar, SearchBar_Filter, SearchBar_Grid } from "../assets/svgIcons"
import { booksDB } from "@/app/data/books"
import { I_booksDB } from "@/app/types"
import BtnModalBookInfo from "@/app/components/ModalBookCard"
import { useDebounce } from "../hooks/useDebounce"

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
    const resultsDebounced = useDebounce(results, 500);

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
                <input onChange={(e) => handleSearch(e)}
                    className='pl-[60px] placeholder:text-text_opacity bg-borders px-9 py-3 rounded-full outline-none borderCard'
                    type='text'
                    placeholder='Search for a book...'
                    name="searchBook"
                    autoComplete='off'
                />
                <SearchBar_Filter />
                <SearchBar_Grid />
            </div>
            <div className="bg-dark3 flex flex-col rounded-lg overflow-hidden w-[318px] max-h-[150px] overflow-y-auto">

                {resultsDebounced.length > 0 && <p className="flex justify-end pr-2">{`${resultsDebounced.length > 1 ?
                    `${resultsDebounced.length} results found`
                    :
                    `${resultsDebounced.length} result found`}`}
                </p>}

                {resultsDebounced.length > 0 &&
                    resultsDebounced.map(({ id, title, author, release, pages, pdfPath, coverUrl, synopsis, genre, rating }: I_booksDB, index: number) =>
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