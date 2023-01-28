import React from 'react';
import BookList from './BookList';
import Form from './Form';
import './Books.css';

function Books() {
  return (
    <div className="books-store">
      <div className="book-list">
        <BookList />
      </div>
      <div className="add-book">
        <Form />
      </div>
    </div>
  );
}

export default Books;
