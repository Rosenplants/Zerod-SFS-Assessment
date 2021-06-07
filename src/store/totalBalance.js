import { REMOVE_DEBTS } from './debts';

// Action Types
const ADD_TO_TOTAL = 'ADD_TO_TOTAL';
const SUBTRACT_FROM_TOTAL = 'SUBTRACT_FROM_TOTAL';
const UPDATE_TOTAL = 'UPDATE_TOTAL';

// Action Creators
export const updateTotal = (newTotal) => ({
  type: UPDATE_TOTAL,
  newTotal,
});

export const addToTotal = (num) => ({
  type: ADD_TO_TOTAL,
  balance: num,
});

export const subtractFromTotal = (num) => ({
  type: SUBTRACT_FROM_TOTAL,
  balance: num,
});

// Reducer
const reducer = (state = 0, action) => {
  switch (action.type) {
    case ADD_TO_TOTAL:
      return state + action.balance;
    case SUBTRACT_FROM_TOTAL:
      return state - action.balance;
    case REMOVE_DEBTS:
      return 0;
    case UPDATE_TOTAL:
      return action.newTotal;
    default:
      return state;
  }
};

export default reducer;
