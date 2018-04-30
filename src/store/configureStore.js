import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducer from '../reducers/filters';

export default () => {
  // 2. Store
  const store = createStore(combineReducers({
    expenses: expensesReducer,
    filters: filterReducer
  }));
  return store;
}

