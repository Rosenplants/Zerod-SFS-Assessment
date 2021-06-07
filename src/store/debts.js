import axios from 'axios';

// Action Type
const GOT_DEBTS = 'GOT_DEBTS';
const ADD_DEBT = 'ADD_DEBT';
export const REMOVE_DEBTS = 'REMOVE_DEBTS';

// Action Creator
const gotDebts = (debts) => ({
  type: GOT_DEBTS,
  debts,
});

export const addDebt = (debt) => ({
  type: ADD_DEBT,
  debt,
});

export const removeDebts = (idArr) => ({
  type: REMOVE_DEBTS,
  debts: idArr,
});

// Thunk Creator
export const fetchDebts = () => async (dispatch) => {
  try {
    const { data: debts } = await axios.get(
      'https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json'
    );
    dispatch(gotDebts(debts));
  } catch (error) {
    console.error(error);
  }
};

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case REMOVE_DEBTS:
      return state.filter((debt) => !action.debts.includes(debt.id));
    case ADD_DEBT:
      return [...state, action.debt];
    case GOT_DEBTS:
      return action.debts;
    default:
      return state;
  }
};

export default reducer;
