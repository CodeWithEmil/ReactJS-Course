//!!! Video Time: 2:45:24



import React from "react";
import ReactDOM from "react-dom";

//CSS
import "./index.css"

//Setup Vars
const books = [

    
    {
        img: "https://m.media-amazon.com/images/I/61XTlRi7+2L._AC_UY218_.jpg",
        title: "Blue Crab Finds a Home: A Book of Affirmations for Kids",
        author: "Maurine Frank"
    },
    {
        img: "https://images-na.ssl-images-amazon.com/images/I/41g9RfNVZBL._SX320_BO1,204,203,200_.jpg",
        title: "Ugly Love: A Novel",
        author: "Colleen Hoover",
    },
]

const names = ["john", "peter", "susan"];
const newNames = names.map((name) => {
    return <h1>{name}</h1>
});
console.log(newNames)

//Code
function BookList() {
    return (
        <section className="booklist">
            {newNames}
        </section>
    )
}

const Book = (props) => {
    const {img, title, author} = props;
    return (
        <article className = "book">
            <img
                src={img}
                alt=""
                />
            <h1>{title}</h1>
            <h4>{author}</h4>
        </article>
    )
}

ReactDOM.render(<BookList />, document.getElementById("root"));



            // <Book img = {firstBook.img} title = {firstBook.title} author = {firstBook.author} />
            // <Book img = {secondBook.img} title = {secondBook.title} author = {secondBook.author} />