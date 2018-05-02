import React from 'react';
import ExpenseForm from './ExpenseForm';

const AddExpense = (props) => {
  // console.log(props);
  return (
    <div>
      <h1>Add Expense</h1>
      <ExpenseForm />
    </div>
  );
};

export default AddExpense;