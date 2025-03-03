import { Book } from "../models/book.ts";
import { Router } from "https://deno.land/x/oak/mod.ts";
import { getBooks, getBookById, createBook, updateBook, deleteBook } from "../services/book_services.ts";

const router = new Router();

router
    .get("/books", getBooks)
    .get("/books/:bookId", getBookById)
    .post("/books", createBook)
    .put("/books/:bookId", updateBook)
    .delete("/books/:bookId", deleteBook);

export default router;