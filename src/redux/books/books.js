import Book from 'components/Book';

const ADDBOOK = 'bookstore/src/redux/books/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/src/redux/books/books/REMOVEBOOK';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.payload];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

const AddBook = () => ({
  type: ADDBOOK,
  payload: Book,
});

const RemoveBook = () => ({
  type: REMOVEBOOK,
  payload: Book,
});

export default { bookReducer, AddBook, RemoveBook };
