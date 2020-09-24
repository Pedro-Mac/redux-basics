export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD_VALUE = 'ADD_VALUE';
export const SUBTRACT_VALUE = 'SUBTRACT_VALUE';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

//Action creator - function that creates an action
export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};
export const addValue = val => {
  return {
    type: ADD_VALUE,
    value: val
  };
};
export const subtractValue = val => {
  return {
    type: SUBTRACT_VALUE,
    value: val
  };
};

export const storeResult = result => {
  return {
    type: STORE_RESULT,
    result
  };
};
export const deleteResult = result => {
  return {
    type: DELETE_RESULT,
    resultElId: result
  };
};
