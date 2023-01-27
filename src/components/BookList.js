import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Book from './Book';
import { listBooks } from '../redux/books/books';

function BookList() {
  const booksList = useSelector((state) => state.addremo);
  // console.log(booksList);
  const send = useDispatch();

  useEffect(() => {
    send(listBooks());
  }, [send]);
  return (
    <div className="books-container">
      {
        booksList.map((item) => (
          <Book
            id={item.id}
            key={item.id}
            title={item.title}
            author={item.author}
          />
        ))
      }
    </div>
  );
}

export default BookList;
