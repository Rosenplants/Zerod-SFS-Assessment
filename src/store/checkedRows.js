import { REMOVE_DEBTS } from './debts';

// Action Types
const CHECK = 'CHECK';
const UNCHECK = 'UNCHECK';
const MAINSWITCH = 'MAINSWITCH';

// Action Creators
export const check = () => ({
  type: CHECK,
});

export const uncheck = () => ({
  type: UNCHECK,
});

export const mainSwitch = (num) => ({
  type: MAINSWITCH,
  numRows: num,
});

// Reducer
const reducer = (state = 0, action) => {
  switch (action.type) {
    case CHECK:
      return state + 1;
    case UNCHECK:
      return state - 1;
    case MAINSWITCH:
      return action.numRows;
    case REMOVE_DEBTS:
      return 0;
    default:
      return state;
  }
};

export default reducer;
