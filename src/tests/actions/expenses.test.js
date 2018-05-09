import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({id: 'random123'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: 'random123'
  })
});

test('should setup edit action object ', () => {
  const action = editExpense('random', {note: 'Random text'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: 'random',
    updates: {
      note: 'Random text'
    }
  })
});

test('should setup add expense action object provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 650,
    createdAt: 1000,
    note: 'This was last month rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  })
})