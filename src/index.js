import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css"

//Setup Vars
const firstBook = {
    img: "https://m.media-amazon.com/images/I/61XTlRi7+2L._AC_UY218_.jpg",
    title: "Blue Crab Finds a Home: A Book of Affirmations for Kids",
    author: "Maurine Frank"
};

const secondBook = {
    img: "https://images-na.ssl-images-amazon.com/images/I/41g9RfNVZBL._SX320_BO1,204,203,200_.jpg",
    title: "Ugly Love: A Novel",
    author: "Colleen Hoover",
};


//Code
function BookList() {
    return (
        <section className="booklist">
            <Book img = {firstBook.img} title = {firstBook.title} author = {firstBook.author} />
            <Book img = {secondBook.img} title = {secondBook.title} author = {secondBook.author} />
        </section>
    )
}

const Book = (props) => {
    return (
        <article className = "book">
            <img
                src={props.img}
                alt=""
            />
            <h1>{props.title}</h1>
            <h4>{props.author}</h4>
        </article>
    )
}

ReactDOM.render(<BookList />, document.getElementById("root"));
