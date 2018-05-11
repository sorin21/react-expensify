import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should setup default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    // moment for current point in time
    // with start if the month and end of the month
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  })
});