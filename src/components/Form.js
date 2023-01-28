import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { AddBook } from '../redux/books/books';
import './Form.css';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const id = uuidv4();
  const category = 'Fiction';
  const dispatch = useDispatch();

  const addBook = () => {
    const data = {
      id, title, author, category,
    };
    dispatch(AddBook(data));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form-container">
      <h1 className="add-title">ADD NEW BOOK</h1>
      <form>
        <input className="title-input" type="text" placeholder="Book title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="author-input" type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button className="add-button" type="button" onClick={addBook}>Add Book</button>
      </form>
    </div>
  );
}

export default Form;
