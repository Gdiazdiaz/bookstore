const CHECKSTATUS = {
  type: 'CHECKSTATUS',
};

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CHECKSTATUS:
      return 'Under Constructions';
    default:
      return state;
  }
};

export default { CHECKSTATUS, categoriesReducer };
