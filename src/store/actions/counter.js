import * as actionTypes from './actionTypes';

//Action creator - function that creates an action
export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};
export const addValue = val => {
  return {
    type: actionTypes.ADD_VALUE,
    value: val
  };
};
export const subtractValue = val => {
  return {
    type: actionTypes.SUBTRACT_VALUE,
    value: val
  };
};
