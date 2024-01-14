
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

export interface I_booksDB_User extends I_booksDB {
    pagesRead?: number;
}


// 
export interface I_BookGetOrRead {
    bookId?: number;
    text?: string;
    title?: string;
    author?: string;
    pages?: number;
    pdfPath?: string;
}

export interface I_UserBookReading extends I_BookGetOrRead {
    id: number;
    pagesRead: number;
}
