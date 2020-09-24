import * as actionTypes from './actionTypes';

/*Asynchronous - redux-thunk*/
export const saveResult = result => {
  return {
    type: actionTypes.STORE_RESULT,
    result
  };
};
/*Asynchronous - redux-thunk*/
export const storeResult = result => {
  return dispatch => {
    setTimeout(() => {
      dispatch(saveResult(result));
    }, 2000);
  };
};
export const deleteResult = result => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultElId: result
  };
};
