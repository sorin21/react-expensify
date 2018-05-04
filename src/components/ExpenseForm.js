import React, { Component } from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize';

// const date = new Date();  
const now = moment();
console.log(now.format('Do MMM, YYYY'));

class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: '',
    // createdAt now, this moment
    createdAt: moment(),
    calendarFocused: false,
    error: ''
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
    // at least one number(to infinity) and not with .
    // then we have a .
    // then we have only 2 decimals in the end
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount: amount
      }))
    }
  }

  onDateChange = (createdAt) => {
    if(createdAt) {
      this.setState(() => ({createdAt: createdAt}));
    }
  }

  onFocusChange = ({focused}) => {
    this.setState(() => ({calendarFocused: focused}));
  }

  onSubmit = (event) => {
    event.preventDefault();
    if(!this.state.description || !this.state.amount) {
      // set error state
      this.setState(() => ({ error: 'Please provide description and amount' }));
    } else {
      // clear the error
      this.setState(() => ({error: ''}))
      this.props.onSubmit({
        description: this.state.description,
        // we work in base 10 and *100 to transfor from cents
        amount: parseFloat(this.state.amount, 10),
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
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
          <SingleDatePicker 
            date={this.state.createdAt}
            onDateChange={this.onDateChange}
            focused={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            // make every single day available
            isOutsideRange={() => false}
          />
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