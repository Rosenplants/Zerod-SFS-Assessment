// Action Types
const SET_ERROR = 'SET_ERROR';

// Action Creators
export const setError = () => ({
  type: SET_ERROR,
});

// Reducer
const reducer = (state = false, action) => {
  switch (action.type) {
    case SET_ERROR:
      return true;
    default:
      return false;
  }
};

export default reducer;
