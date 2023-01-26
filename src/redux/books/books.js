const ADDBOOK = 'bookstore/src/redux/books/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/src/redux/books/books/REMOVEBOOK';
const BOOK_LIST = 'bookstore/src/redux/books/books/BOOK_LIST';

const bookReducer = (state = [{ title: 'The Scarlet Letter', author: 'Nathaniel Hawthorne', id: '1' }], action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.payload];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.payload);
    case BOOK_LIST:
      return state;
    default:
      return state;
  }
};

export const AddBook = (payload) => ({
  type: ADDBOOK,
  payload,
});

export const RemoveBook = (id) => ({
  type: REMOVEBOOK,
  payload: id,
});

export const listBooks = () => async (dispatch) => {
  dispatch({
    type: BOOK_LIST,
  });
};

export default bookReducer;
