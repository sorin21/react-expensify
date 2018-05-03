import React, { Component } from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

// const date = new Date();  
const now = moment();
console.log(now.format('Do MMM, YYYY'));

class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: ''
  };

  onDescriptionChange = (event) => {
    const description = event.target.value;
    this.setState(() => ({
      description: description
    }))
  }

  onNoteChange = (event) => {
    const note = event.target.value;
    this.setState(() => ({
      note: note
    }))
  }

  onAmountChange = (event) => {
    const amount = event.target.value;
    // starts witd decimals
    // then we have a .
    // then we have only 2 decimals in the end
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount: amount
      }))
    }
  }

  render() {
    return (
      <div>
        <form>
          <input 
            type="text" 
            placeholder="Description" 
            autoFocus
            // the value is = to current state value
            value={this.state.description}
            onChange={this.onDescriptionChange} />
          <input
            className="amount"
            type="number"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange} />
          <textarea
            placeholder="Add a note for your expense(optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
            ></textarea>
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;