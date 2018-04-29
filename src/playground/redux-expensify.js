import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

// 3. ACTIONS:
// ADD_EXPENSE
// destruct the 1st argument
// if doesn't exist we desctruct an empty object
const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 }) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description, 
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

// SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'TEXT_FILTER',
  text
});

// SORT_BY_DATE
const sortbyDate = () => ({
  type: 'SORT_BY_DATE',
})

// SORT_BY_AMOUNT
const sortbyAmount = () => ({
  type: 'SORT_BY_AMOUNT',
})

// SET_START_DATE
const setStartDate = startDate => ({
  type: "START_DATE",
  startDate
});

// SET_END_DATE
const setEndDate = endDate => ({
  type: "END_DATE",
  endDate
});


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
        if(expense.id === action.id) {
          // if there is a match return a new object
          return  {
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


// 1a. Filter Reducer
const filterReducerDefaultState = {
  text: '',
  sortBy: 'date', // data or amount
  startDate: undefined,
  endDate: undefined
};
const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "TEXT_FILTER":
      return { ...state, // overwrite text prop
        text: action.text };
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

// Get visible expenses
// expeses is an array to pe filtered
// 2nd arg is filters and we are destructuring this
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    // true for non numbers
    const startDateMatch =
      typeof startDate !== "number" || expense.createdAt >= startDate;
    const endDateMatch =
      typeof endDate !== "number" || expense.createdAt <= endDate;
    const textMatch =  expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  })
  .sort((a, b) => {
    if(sortBy === 'date') {
      // 1 b comes first and -1 a comes first
      return a.createdAt  < b.createdAt ? 1 : -1;
    }
    if(sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// 2. Store
const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filterReducer
}));

// 5. Track, watch for changes for redux store
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})

// 4. Dispatch
const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000 }));
const exepenseTwo = store.dispatch(addExpense({ description: 'Cofee', amount: 300, createdAt: -1000 }));

// store.dispatch(removeExpense({id: expenseOne.expense.id}));

// // 1st arg = get the id
// // 2nd arg = updated object description or note, etc
// store.dispatch(editExpense(exepenseTwo.expense.id, { amount: 500, note: 'Paris price too big :)' }))

// // add rent to text prop from filters obj
// store.dispatch(setTextFilter('rent'));
// // make again text value an empty string
// store.dispatch(setTextFilter());

store.dispatch(sortbyAmount());
// store.dispatch(sortbyAmount());
// store.dispatch(sortbyDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(3001));

// console.log(expenseOne);

const demoState = {
  expenses: [{
    id: 'dasfrssda',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // data or amount
    startDate: undefined,
    endDate: undefined
  }
};

// Learn spread operator
// const user = {
//   name: 'Jenny',
//   age: 24
// };

// console.log({
//   ...user,
//   location: 'Braila',
//   name: 'Danielle',
//   age: 27
// });

// console.log(user);