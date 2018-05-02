import React from 'react';
import {connect} from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = (props) => {
  return (
    <div>
      <h1>Expense List</h1>
        {props.expenses.map((expense) => {
          // here we have access to each expense: description, amount, createdAt
          // so in this way we can destruct the props on ExpenseListItem
        return <ExpenseListItem {...expense} key={expense.id} />
        })}
        
    </div>
  );
};

// mapStateToProps maps the state store to component props
// 1st arg is the entire state
const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters) 
  }
}

// the callback function determine what infomation from the store
// we want our component to be able to access.
// 1st arg is store state
// in return obj usually we have keys from the state
const ConnectedExpenseList = connect(mapStateToProps)(ExpenseList);

export default ConnectedExpenseList;