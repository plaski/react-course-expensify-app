import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default expenses value', () => {
  const state = expensesReducer(undefined, '@@INIT');
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense when id is not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add expense', () => {
  const expense = {
    id: '123',
    description: '123abc',
    note: 'abc123',
    amount: 123456,
    createdAt: 1000
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test('should edit expense', () => {
  const amount = 123456;
  const note = 'abc123';
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates: {
      amount,
      note
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([{...expenses[0], amount, note}, expenses[1],expenses[2]]);
});

test('should not edit expense', () => {
  const amount = 123456;
  const note = 'abc123';
  const action = {
    type: 'EDIT_EXPENSE',
    id: '123456',
    updates: {
      amount,
      note
    }
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const action = {
    type: 'SET_EXPENSES',
    expenses: expenses[1]
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses[1]);
});