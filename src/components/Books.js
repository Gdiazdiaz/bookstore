import React from "react";
import BookList from "./BookList";
import Form from "./Form";

function Books(){
    return(
        <div className="books-store">
            <BookList/>
            <Form/>
        </div>
    )
}

export default Books;