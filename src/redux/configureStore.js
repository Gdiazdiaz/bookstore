import { configureStore, combineReducers } from '@reduxjs/toolkit';
import categoriesReducer from './categories/categories';
import bookReducer from './books/books';

const rootReducer = combineReducers({
  addremo: bookReducer,
  catredu: categoriesReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
