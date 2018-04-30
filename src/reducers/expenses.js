// 1. Expensed Reducer
const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          // if there is a match return a new object
          return {
            // grab all expense properties: amount, note, etc
            ...expense,
            // and overwrite the match one
            ...action.updates
          }
        } else {
          return expense;
        }
      })
    case 'REMOVE_EXPENSE':
      return state.filter((expense) => {
        return expense.id !== action.id;
      });
    default:
      return state;
  }
};

export default expensesReducer;