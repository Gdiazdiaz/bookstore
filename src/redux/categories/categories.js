const CHECK_STATUS = 'bookstore/src/redux/categories/CHECKSTATUS';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'UNDER CONSTRUCTIONS';
    default:
      return state;
  }
};

export const CheckStatus = () => ({
  type: CHECK_STATUS,
  payload: 'UNDER CONSTRUCTION',
});

export default categoriesReducer;
