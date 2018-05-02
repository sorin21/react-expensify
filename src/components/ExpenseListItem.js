import React from 'react';
import { connect } from 'react-redux';
import {removeExpense} from '../actions/expenses';

// destruct the props
const ExpenseListItem = ({dispatch, id, description, amount, createdAt}) => {
  return (
    <div>
      <h3>{description}</h3>
      <p>{amount} - {createdAt}</p>
      <button onClick={() => {
        dispatch(removeExpense({id: id}));
      }}>Remove</button>
    </div>
  );
};


export default connect()(ExpenseListItem);
