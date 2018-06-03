import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// const demoState = {
//   expenses: [{
//     id: 'dasfrssda',
//     description: 'January Rent',
//     note: 'This was the final payment for that address',
//     amount: 54500,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', // data or amount
//     startDate: undefined,
//     endDate: undefined
//   }
// };

// EXPENSE ACTIONS GENERATORS
// destructing
const addExpense = ({description = "", note = "", amount = 0, createdAt = 0}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})

const removeExpense = ({id} = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
})




// EXPENSES REDUCER
const expensesReducer = (state = [], action) => {
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
        // // true = item kept
        // console.log('expense.id', expense.description, expense.id)
        // console.log('action.id', action.description, action.id)
        return expense.id !== action.id
      });
    default:
      return state;
  }
}



// FILTER ACTIONS GENERATORS
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

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

// FILTER REDUCER
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state=filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      // console.log('action', action)
      return {...state, text: action.text};
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
}


const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  // console.log(expenses);
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;;
    const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    // if return true the item will be kept in array
    return startDateMatch && endDateMatch && textMatch;
  })
  .sort((a, b) => {
    if (sortBy === 'date') {
      // a < b (1) b comes first and
      // a > b (-1) a comes first
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
};

// STORE
const store = createStore(combineReducers({
  expenses: expensesReducer,
  filters: filtersReducer
}));

// SUBSCRIBE
store.subscribe(() => {
  // this is for entire expenses and filters
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})

// DISPATCH
store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt: 1000}))
store.dispatch(addExpense({
  description: 'Car',
  amount: 6100,
  createdAt: - 1000
}))

// store.dispatch(removeExpense({id: expenseOne.expense.id}));
// store.dispatch(editExpense(expenseTwo.expense.id , { amount: 7000 }));

// store.dispatch(setTextFilter({text: 'rent'}));
// store.dispatch(setTextFilter('car'));

store.dispatch(sortbyAmount());
store.dispatch(sortbyDate());

// store.dispatch(setEndDate(500));
