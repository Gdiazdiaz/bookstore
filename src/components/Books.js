import React from 'react';
import BookList from './BookList';
import Form from './Form';

function Books() {
  return (
    <div className="books-store">
      <h1>Book List</h1>
      <BookList />
      <Form />
    </div>
  );
}

export default Books;
