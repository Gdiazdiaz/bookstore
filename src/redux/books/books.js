const ADDBOOK = 'bookstore/src/redux/books/books/ADDBOOK';
const REMOVEBOOK = 'bookstore/src/redux/books/books/REMOVEBOOK';
const BOOK_LIST = 'bookstore/src/redux/books/books/BOOK_LIST';
const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ijzsDqUwhoKDKlLBvPHa/books';

const bookReducer = (state = [], action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.payload];
    case REMOVEBOOK:
      return state.filter((book) => book.id !== action.id);
    case BOOK_LIST:
      return action.bookList;
    default:
      return state;
  }
};

const setData = async ({
  id, title, author, category,
}) => {
  await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: id,
      title,
      author,
      category,
    }),
  });
};

const getData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();

  const list = Object.entries(data).map(([id, book]) => {
    const { title, author, category } = book[0];
    return {
      id, title, author, category,
    };
  })
    .sort((a, b) => a.title.localeCompare(b.title));

  return list;
};

const deleteData = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    header: {
      'Content-Type': 'application/json',
    },
  });
};

export const AddBook = (payload) => (dispatch) => {
  setData(payload);
  dispatch({
    type: ADDBOOK,
    payload,
  });
};

export const RemoveBook = (id) => async (dispatch) => {
  deleteData(id);
  dispatch({
    type: REMOVEBOOK,
    id,
  });
};

export const listBooks = () => async (dispatch) => {
  const bookList = await getData();
  dispatch({
    type: BOOK_LIST,
    bookList,
  });
};

export default bookReducer;
