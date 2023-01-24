const ADDBOOK = {
    type: ADD,
  };
  
  const REMOVEBOOK = {
    type: REMOVEBOOK,
  };
  
  const bookReducer = (state = [], action) => {
    switch (action.type) {
      case ADDBOOK:
        return [...state];
      case REMOVEBOOK:
        return state;
      default:
        return state;
    }
  };
  
  export default { bookReducer, ADDBOOK, REMOVEBOOK };