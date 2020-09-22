const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
  word: 'dog',
  counter: 0
};

//Reducer
const rootReducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT_COUNTER') {
    return {
      ...state, // if not spreaded, all other properties won't be in state
      counter: state.counter + 1
    };
  } else if (action.type === 'ADD_COUNTER') {
    return {
      ...state, // if not spreaded, all other properties won't be in state
      counter: state.counter + action.value
    };
  } else {
    return state;
  }
};
// Store
const store = createStore(rootReducer);
console.log(store.getState());

//Dispatching Action
store.dispatch({ type: 'INCREMENT_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());

//Subscription
