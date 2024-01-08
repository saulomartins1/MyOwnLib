import React from "react";

export interface I_booksDB {
    children?: React.ReactNode;
    id?: number;
    title?: string;
    author?: string;
    release?: string;
    pages?: number;
    pdfPath?: string;
    coverUrl: string;
    synopsis?: string;
    genre?: string;
    rating?: number;
}

export const booksDB = [
    {
        id: 1,
        title: "How to Win Friends & Influence People",
        author: "Dale Carnegie",
        release: '1936',
        pages: 280,
        pdfPath: "/pdfs/how_to_win_friends_and_influence_people.pdf",
        coverUrl: "/pdfs/how_to_win_friends_and_influence_people.jpg",
        synopsis: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris ut rhoncus dolor. Morbi condimentum, nisi quis aliquet cursus, tortor purus sagittis elit, id pulvinar magna mauris at ipsum. Quisque mattis lacus eu dui pharetra laoreet. Ut a diam nunc. Donec non purus ut erat porta consectetur. Nam convallis venenatis lacus quis dictum. Duis mi risus, tristique non lacus vel, consequat elementum quam. In diam nisi, porta vel dolor et orci aliquam.",
        genre: "Self-Help",
        rating: 4.6,
    },
    {
        id: 2,
        title: "Meditations",
        author: "Marcus Aurelius",
        release: '2nd century',
        pages: 180,
        pdfPath: "/pdfs/meditations.pdf",
        coverUrl: "/pdfs/meditations.jpg",
        synopsis: "A series of personal writings by the Roman Emperor, in which he outlines his Stoic philosophy for self-improvement and reflection.",
        genre: "Philosophy",
        rating: 4.5,
    },
    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        release: "1949",
        pages: 328,
        pdfPath: "/pdfs/1984.pdf",
        coverUrl: "/pdfs/1984.jpg",
        synopsis: "A dystopian novel depicting a totalitarian society where the government controls every aspect of life, including truth and thought.",
        genre: "Dystopian Fiction",
        rating: 4.8,
    },
    {
        id: 4,
        title: "Neuromancer",
        author: "William Gibson",
        release: "1984",
        pages: 271,
        pdfPath: "/pdfs/neuromancer.pdf",
        coverUrl: "/pdfs/neuromancer.jpg",
        synopsis: "A groundbreaking science fiction novel that explores the world of cyberspace, artificial intelligence, and corporate intrigue.",
        genre: "Science Fiction",
        rating: 4.4,
    },
];
