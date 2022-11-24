import React from "react";

const Book = ({ img, title, author }) => {
    const clickHandler = (e) => {
        console.log(e.target);
        alert("Hello world!");
    };

    const complexExample = (author) => {
        alert(author);
    };

    return (
        <article
            className="book"
            onMouseOver={() => {
                console.log(title);
            }}
        >
            <img src={img} alt="" />
            <h1
                onClick={() => {
                    alert("hello world from h1!");
                }}
            >
                {title}
            </h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>
                Reference Example
            </button>
            <button onClick={() => complexExample(author)}>
                more complex example
            </button>
        </article>
    );
};

export default Book;