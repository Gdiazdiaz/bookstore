import { React, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { AddBook } from '../redux/books/books';

function Form() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const id = uuidv4();
  const dispatch = useDispatch();

  const addBook = () => {
    const data = {
      title, author, id,
    };
    dispatch(AddBook(data));
    setTitle('');
    setAuthor('');
  };

  return (
    <div>
      <form>
        <input className="title" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="author" type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        <button className="add-book" type="button" onClick={addBook}>Add Book</button>
      </form>
    </div>
  );
}

export default Form;
