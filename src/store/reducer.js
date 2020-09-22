import * as actionTypes from './../store/actions';

const initialState = {
  counter: 0,
  results: []
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADD_VALUE:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.SUBTRACT_VALUE:
      return {
        ...state,
        counter: state.counter + action.value
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        results: [...state.results, { id: new Date(), value: state.counter }]
      };

    case actionTypes.DELETE_RESULT:
      const auxArray = state.results.filter(val => {
        return val.id !== action.resultElId;
      });
      return {
        ...state,
        results: auxArray
      };
  }
  return state;
};

export default reducer;
