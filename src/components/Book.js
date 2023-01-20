import React from 'react';

function Book(props) {
  const bookdeta = props;
  return (
    <div className="book-container">
      <h2>{bookdeta.title}</h2>
      <h3>{bookdeta.author}</h3>
      <button type="button">Remove</button>
    </div>
  );
}

export default Book;
