import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Rent', amount: 1000}))
store.dispatch(addExpense({ description: 'Water Bill', amount: 300, createdAt: 1000}))
store.dispatch(addExpense({ description: 'Gas Bill', amount: 500 }))

// store.dispatch(setTextFilter('water'));

// setTimeout(() => {
//   store.dispatch(setTextFilter('rent'));
// }, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);

console.log('din app.js visibleExpenses', visibleExpenses);

// Provider is gonna to provide the store to all components
// We have to apss a single prop to provider, the store, 
// that we want to share with the rest of application
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
