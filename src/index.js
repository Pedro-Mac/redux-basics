import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const rootReducer = combineReducers({
  ctr: counterReducer,
  result: resultReducer
});

//Middleware
const logger = store => {
  return next => {
    return action => {
      console.log('[Middleware] Dispacthing', action);
      const result = next(action);
      console.log('[Middleware] Next state', store.getState());
      return result;
    };
  };
};

const store = createStore(rootReducer, applyMiddleware(logger) /*enhancer*/);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
