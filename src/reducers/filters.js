import moment from 'moment';
// 1a. Filter Reducer
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date', // data or amount
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "TEXT_FILTER":
      return {
        ...state, // overwrite text prop
        text: action.text
      };  
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORT_BY_DATE":
      return { ...state, sortBy: "date" };
    case "START_DATE":
      return { ...state, startDate: action.startDate };
    case "END_DATE":
      return { ...state, endDate: action.endDate };
    default:
      return state;
  }
};

export default filterReducer;