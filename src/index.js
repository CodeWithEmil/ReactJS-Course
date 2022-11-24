//!!! Video Time: 3:23:27



import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css"


//Data
import {books} from "./books";
import Book from "./Book";
import {greeting} from "./test/testing";


//Code
function BookList() {
    console.log(greeting);
    return (
        <section className="booklist">
            {books.map((book, index) => {
                return (
                    <Book key={book.id} {...book} />
                );
            })}
        </section>
    )
}

ReactDOM.render(<BookList />, document.getElementById("root"));



            // <Book img = {firstBook.img} title = {firstBook.title} author = {firstBook.author} />
            // <Book img = {secondBook.img} title = {secondBook.title} author = {secondBook.author} />