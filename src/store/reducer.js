const initialState = {
  counter: 0
};
const reducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      counter: state.counter + 1
    };
  } else if (action.type === 'DECREMENT') {
    return {
      ...state,
      counter: state.counter - 1
    };
  } else if (action.type === 'ADD_VALUE') {
    return {
      ...state,
      counter: state.counter + action.value
    };
  } else if (action.type === 'SUBTRACT_VALUE') {
    return {
      ...state,
      counter: state.counter + action.value
    };
  }
  return state;
};

export default reducer;
