import axios from 'axios';

// Action Type
const GOT_DEBTS = 'GOT_DEBTS';

// Action Creator
const gotDebts = (debts) => ({
  type: GOT_DEBTS,
  debts,
});

// Thunk Creator
export const fetchDebts = () => async (dispatch) => {
  try {
    const { data: debts } = await axios.get(
      'https://raw.githubusercontent.com/StrategicFS/Recruitment/master/data.json'
    );
    console.log(debts);
    dispatch(gotDebts(debts));
  } catch (error) {
    console.error(error);
  }
};

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case GOT_DEBTS:
      return action.debts;
    default:
      return state;
  }
};

export default reducer;
