// SET_TEXT_FILTER
export const setTextFilter = (text = '') => ({
  type: 'TEXT_FILTER',
  text
});

// SORT_BY_DATE
export const sortbyDate = () => ({
  type: 'SORT_BY_DATE',
})

// SORT_BY_AMOUNT
export const sortbyAmount = () => ({
  type: 'SORT_BY_AMOUNT',
})

// SET_START_DATE
export const setStartDate = startDate => ({
  type: "START_DATE",
  startDate
});

// SET_END_DATE
export const setEndDate = endDate => ({
  type: "END_DATE",
  endDate
});