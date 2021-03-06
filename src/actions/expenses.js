import uuid from 'uuid';

// 3. ACTIONS:
// ADD_EXPENSE
// destruct the 1st argument
// if doesn't exist we desctruct an empty object
export const addExpense = ({ description = '', note = '', amount = 0, createdAt = 0 } = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE_EXPENSE
export const removeExpense = ({ id, message } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id,
  message
})

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
})