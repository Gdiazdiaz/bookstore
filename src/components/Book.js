import React from 'react';
import { useDispatch } from 'react-redux';
import { RemoveBook } from '../redux/books/books';

function Book(props) {
  const bookdeta = props;
  const dispatch = useDispatch();
  const removeBook = (id) => {
    dispatch(RemoveBook(id));
  };
  return (
    <div className="book-container">
      <h2>{bookdeta.title}</h2>
      <h3>{bookdeta.author}</h3>
      <button type="button" onClick={() => removeBook(bookdeta.id)}>Remove</button>
    </div>
  );
}

export default Book;
