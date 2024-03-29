"use client"

import React from 'react'
import { I_UserBookReading } from "@/app/types";
import { useDebounce } from '@/app/hooks/useDebounce';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.js',
    import.meta.url,
).toString();



const userScale = (scale: number, setScale: React.Dispatch<React.SetStateAction<number>>) => {
    React.useEffect(() => {
        const storedZoom = localStorage.getItem("zoom");
        if (!storedZoom || storedZoom === "1") {
            localStorage.setItem("zoom", "1");
        } else {
            setScale(+storedZoom);
        }
    }, []);

    React.useEffect(() => {
        localStorage.setItem("zoom", scale.toString());
    }, [scale]);
}


const BookViewer = ({ readingBookInfo, setReadingBookInfo }: { readingBookInfo: I_UserBookReading, setReadingBookInfo: any }) => {
    const { pages, id: bookId, pagesRead, pdfPath } = readingBookInfo;
    const [scale, setScale] = React.useState(1);
    const [page, setPage] = React.useState(pagesRead);
    const saveCurrentPage = useDebounce(page, 500);
    const { data: session, status } = useSession();
    const router = useRouter();

    userScale(scale, setScale);

    React.useEffect(() => {
        if (saveCurrentPage) {
            saveBookProgress();
        }
    }, [saveCurrentPage])

    const saveBookProgress = async () => {
        try {
            if (status !== "authenticated") return;
            const userEmail = session.user?.email;

            const response = await fetch("/api/savebookprogress", {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userEmail, bookId, saveCurrentPage })
            })

            if (response.status !== 201) {
                const error = await response.text();
                return alert(error);
            }

            return true;

        } catch (error) {
            console.log(error)
        }
    }

    return <div className="bg-[black]/[96%] justify-center flex items-center h-screen w-full absolute inset-0">
        {/* container */}
        <article className="bg-dark2 flex justify-center gap-4 w-[990px] mx-auto rounded-md borderCard p-4">

            {/* PDFViewer */}
            <div className="bg-[#e6e2c4] flex flex-1 justify-center rounded-sm min-w-[400px] max-w-[990px] h-[660px] overflow-y-auto">
                <Document className='max-w-max max-h-full'
                    file={pdfPath}
                    loading={<p className='text-dark2'>Wait a few seconds...</p>}
                    error={<p className='text-dark2'>An error occurred, please refresh the page!</p>}
                    noData={<p className='text-dark2'>An error occurred, please refresh the page!</p>}
                >
                    <Page
                        width={800}
                        canvasBackground='#e6e2c4'
                        scale={scale}
                        pageNumber={page}
                    />
                </Document>
            </div>

            {/* controls */}
            <div className="flex flex-col gap-8">

                {/* zoom */}
                <div className="flex flex-col items-center gap-3">
                    <div className="px-2 py-1 bg-dark3 borderCard rounded-sm">
                        <p className="font-semibold">{scale.toFixed(1)}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            className="hover:bg-borders w-[48px] h-[48px] bg-dark1 borderCard rounded-full text-24 font-bold"
                            onClick={() => setScale((prev) => prev <= 1.1 ? 1 : prev - .2)}
                        >{"-"}
                        </button>
                        <button
                            className="hover:bg-borders w-[48px] h-[48px] bg-dark1 borderCard rounded-full text-24 font-bold"
                            onClick={() => setScale((prev) => prev >= 1.9 ? 2 : prev + .2)}
                        >{"+"}</button>
                    </div>
                </div>

                {/* page */}
                <div className="flex flex-col items-center gap-3">
                    <div className="px-2 py-1 bg-dark3 borderCard rounded-sm">
                        <p><span className="font-semibold text-20">{page}</span>/{pages}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <button
                            className="hover:bg-borders w-[48px] h-[48px] bg-dark1 borderCard rounded-full font-bold text-20"
                            onClick={() => setPage((prev) => prev === 1 ? prev : prev - 1)}
                        >
                            {"<-"}</button>
                        <button
                            className="hover:bg-borders w-[48px] h-[48px] bg-dark1 borderCard rounded-full font-bold text-20"
                            onClick={() => setPage((prev) => prev === pages ? pages : prev + 1)}
                        >
                            {"->"}</button>
                    </div>

                    {/* Leave */}
                    <button
                        className="flex items-center hover:bg-borders mt-8 h-[48px] bg-dark1 borderCard rounded-full px-4 font-bold text-16 gap-3"
                        onClick={() => { setReadingBookInfo(null), router.refresh() }}
                    >Go back
                    </button>

                </div>

            </div>

        </article>
    </div>
}

export default BookViewer