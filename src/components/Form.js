import React from 'react';

function Form() {
  return (
    <div>
      <form>
        <input className="title" type="text" placeholder="Title" />
        <input className="author" type="text" placeholder="Author" />
        <button className="add-book" type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default Form;
