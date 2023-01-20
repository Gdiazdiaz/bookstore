import React from "react";

function Book(props){
    return(
        <div className="book-container">
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
        </div>
    )
    
}

export default Book;