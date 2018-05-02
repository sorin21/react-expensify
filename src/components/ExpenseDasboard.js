import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDasboard = () => {
  return (
    <div>
      Dashboard
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
};

export default ExpenseDasboard;