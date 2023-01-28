import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CheckStatus } from '../redux/categories/categories';

function Categories() {
  const send = useDispatch();
  const status = useSelector((state) => state.catredu);

  const displayStatus = () => send(CheckStatus());
  return (
    <div className="categories-container">
      <h1>{status}</h1>
      <button className="add-button" type="button" onClick={displayStatus}>Check Status</button>
    </div>
  );
}

export default Categories;
