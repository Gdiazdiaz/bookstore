import React from 'react';
import { useDispatch } from 'react-redux';
import { RemoveBook } from '../redux/books/books';
import './Book.css';

function Book(props) {
  const bookdeta = props;
  const dispatch = useDispatch();
  const removeBook = () => {
    dispatch(RemoveBook(bookdeta.id));
  };
  return (
    <div className="book-container">
      <h4 className="category">Fiction</h4>
      <h2 className="title">{bookdeta.title}</h2>
      <h3 className="author">{bookdeta.author}</h3>
      <div className="button-container">
        <button type="button" className="button">Comments</button>
        <button className="button brd" type="button" onClick={removeBook}>Remove</button>
        <button type="button" className="button brd">Edit</button>
      </div>
    </div>
  );
}

export default Book;
