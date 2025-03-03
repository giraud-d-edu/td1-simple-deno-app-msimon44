import { Book } from "../models/book.ts";

let books: Book[] = [];

export const getBooks = ({ response }: { response: any }) => {
    response.body = books;
};

export const getBookById = ({ params, response }: { params: { bookId: string }, response: any }) => {
    const book = books.find(book => book.id === Number(params.bookId));
    if (book) {
        response.status = 200;
        response.body = book;
    } else {
        response.status = 404;
        response.body = { message: "Book not found" };
    }
};

export const createBook = async ({ request, response }: { request: any, response: any }) => {
    const body = await request.body();
    const newBook: Book = body.value;
    books.push(newBook);
    response.status = 201;
    response.body = newBook;
};

export const updateBook = async ({ params, request, response }: { params: { bookId: string }, request: any, response: any }) => {
    const bookIndex = books.findIndex(book => book.id === Number(params.bookId));
    if (bookIndex !== -1) {
        const body = await request.body();
        const updatedBook: Book = body.value;
        books[bookIndex] = { ...books[bookIndex], ...updatedBook };
        response.status = 200;
        response.body = books[bookIndex];
    } else {
        response.status = 404;
        response.body = { message: "Book not found" };
    }
};

export const deleteBook = ({ params, response }: { params: { bookId: string }, response: any }) => {
    const bookIndex = books.findIndex(book => book.id === Number(params.bookId));
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        response.status = 200;
        response.body = { message: "Book deleted" };
    } else {
        response.status = 404;
        response.body = { message: "Book not found" };
    }
};
