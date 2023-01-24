import { Redux } from '@reduxjs/toolkit';
import categoriesReducer from 'books/books.js';
import bookReducer from 'categories/categories.js';

const rootReducer = Redux.combineReducers({
  addremo: bookReducer,
  catredu: categoriesReducer,
});

const store = Redux.configureStore(rootReducer);

export default store;