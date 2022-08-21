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

function BookList() {
    return (
        <section className="booklist">
            <Book job = "programmer" />
            <Book title = "random title" number = {22} />
        </section>
    )
}

const Book = (props) => {
    return (
        <article className = "book">
            <img
                src={img}
                alt=""
            />
            <h1>{title}</h1>
            <h4>{author}</h4>
            <p>{props.job}</p>
            <p>{props.title}</p>
            <p>{props.number}</p>
        </article>
    )
}

ReactDOM.render(<BookList />, document.getElementById("root"));
