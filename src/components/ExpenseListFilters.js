import React from 'react';
import { connect } from 'react-redux';
import {DateRangePicker} from 'react-dates'
import { setTextFilter, sortbyDate, sortbyAmount, setStartDate, setEndDate } from '../actions/filters';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({startDate, endDate}) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({calendarFocused}));
  };

  render() {
    return (
      <div>
        {/* set the input valuthis.e attr to what we search */}
        <input type="text" value={this.props.filters.text} onChange={(event) => {
          this.props.dispatch(setTextFilter(event.target.value));
        }} />
        <select value={this.props.filters.sortBy} onChange={(event) => {
          if (event.target.value === 'date') {
            this.props.dispatch(sortbyDate());
          } else if (event.target.value === 'amount') {
            this.props.dispatch(sortbyAmount());
          }
        }}>
          <option value="date">Date</option>
          <option value="amount">Amount</option>
        </select>
        <DateRangePicker 
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={this.onDatesChange}
          focusedInput={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          startDateId={this.props.filters.text}
          endDateId={this.props.filters.text}
          numberOfMonths={1}
          isOutsideRange={() => false}
          showClearDates={true}
        />
      </div>
    );
  }
}


// mapStateToProps maps the state store to component props
// 1st arg is the entire state
const mapStateToProps = (state) => {
  return {
    filters: state.filters
  }
}

export default connect(mapStateToProps)(ExpenseListFilters);