import moment from 'moment';
import { setStartDate, setEndDate, sortbyDate, sortbyAmount, setTextFilter } from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'START_DATE',
    startDate: moment(0)
  });
});

test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'END_DATE',
    endDate: moment(0)
  });
});

test('should generate sort by date action object', () => {
  const action = sortbyDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE',
  });
})

test('should generate sort by amount action object', () => {
  const action = sortbyAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT',
  });
})

test('should generate set text filter action object provided value', () => {
  const action = setTextFilter('Random text');
  expect(action).toEqual({
    type: 'TEXT_FILTER',
    text: 'Random text'
  });
})

test('should generate set text filter action object default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'TEXT_FILTER',
    text: ''
  });
})