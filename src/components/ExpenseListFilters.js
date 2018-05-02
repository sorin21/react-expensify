import React from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortbyDate, sortbyAmount} from '../actions/filters';

const ExpenseListFilters = (props) => {
  // set the input value attr to what we search
  return (
    <div>
      <input type="text" value={props.filters.text} onChange={(event) => {
        props.dispatch(setTextFilter(event.target.value));
      }} />
      <select value={props.filters.sortBy} onChange={(event) => {
        if (event.target.value === 'date') {
          props.dispatch(sortbyDate());
        } else if (event.target.value === 'amount') {
          props.dispatch(sortbyAmount());
        }
      }}>
        <option value="date">Date</option>
        <option value="amount">Amount</option>
      </select>
    </div>
  );
};

// mapStateToProps maps the state store to component props
// 1st arg is the entire state
const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);