import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';


const Edit = (props) => {
  // console.log(props);
  return (
    <div>
      {/* Edit with id {props.match.params.id} */}
      <ExpenseForm 
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
          // console.log(expense);
          
        }}
      />
      
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
        // alert(`The ${props.expense.description} was removed!`);
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => {
      // return true = 1st item is considered a match
      // if false = will never find a match
      return expense.id === props.match.params.id;
    })
  }
};

export default connect(mapStateToProps)(Edit);