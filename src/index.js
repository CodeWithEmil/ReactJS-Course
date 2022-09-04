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
            <Book img = {firstBook.img} title = {firstBook.title} author = {firstBook.author}>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed in impedit voluptates pariatur ratione totam dolore ipsa numquam repellendus accusamus?</p>
            </Book>
            <Book img = {secondBook.img} title = {secondBook.title} author = {secondBook.author} />
        </section>
    )
}

const Book = ({img, title, author, children}) => {
    // const {img, title, author} = props;
    return (
        <article className = "book">
            <img
                src={img}
                alt=""
                />
            <h1>{title}</h1>
            <h4>{author}</h4>
                {children}
        </article>
    )
}

ReactDOM.render(<BookList />, document.getElementById("root"));
