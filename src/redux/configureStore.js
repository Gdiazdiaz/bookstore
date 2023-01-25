import { Redux } from '@reduxjs/toolkit';
import categoriesReducer from 'books/books';
import bookReducer from 'categories/categories';

const rootReducer = Redux.combineReducers({
  addremo: bookReducer,
  catredu: categoriesReducer,
});

const store = Redux.configureStore(rootReducer);

export default store;
