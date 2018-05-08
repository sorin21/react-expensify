import moment from 'moment';
// Get visible expenses
// expeses is an array to pe filtered
// 2nd arg is filters and we are destructuring this
export default  (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter(expense => {
    // true for non numbers
    // const startDateMatch = typeof startDate !== "number" || expense.createdAt >= startDate;
    const createdAtMoment = moment(expense.createdAt);
    // if no starDate we not filter
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day') : true;
    // const endDateMatch = typeof endDate !== "number" || expense.createdAt <= endDate;
    const endDateMatch = endDate ? endDate.isSameOrAfter(createdAtMoment, 'day'): true;
    const textMatch = expense.description.toString().toLowerCase().includes(text.toString().toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  })
    .sort((a, b) => {
      if (sortBy === 'date') {
        // 1 b comes first and -1 a comes first
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      if (sortBy === 'amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

