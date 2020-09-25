import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/index';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionType from '../../store/actions/actionTypes';

class Counter extends Component {
  state = {
    counter: 0
  };

  counterChangedHandler = (action, value) => {
    switch (action) {
      case 'inc':
        this.setState(prevState => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case 'dec':
        this.setState(prevState => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case 'add':
        this.setState(prevState => {
          return { counter: prevState.counter + value };
        });
        break;
      case 'sub':
        this.setState(prevState => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={this.props.onDecrementCounter}
        />
        <CounterControl label="Add 5" clicked={this.props.onAddValueCounter} />
        <CounterControl
          label="Subtract 5"
          clicked={this.props.onSubtractValueCounter}
        />
        <hr />
        <button onClick={() => this.props.onStoreResult(this.props.ctr)}>
          Store current result
        </button>
        <ul>
          {this.props.storedResults.map(result => {
            return (
              <li
                onClick={() => this.props.onDeleteResult(result.id)}
                key={result.id}
              >
                {result.value}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter, //state.whateverYouSetOnIndexjs.counter - combineReducers
    storedResults: state.result.results //state.whateverYouSetOnIndexjs.counter - combineReducers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(actionCreators.increment()),
    onDecrementCounter: () => dispatch(actionCreators.decrement()),
    onAddValueCounter: () => dispatch(actionCreators.addValue(5)),
    onSubtractValueCounter: () => dispatch(actionCreators.subtractValue(5)),
    onStoreResult: result => dispatch(actionCreators.storeResult(result)),
    onDeleteResult: id => dispatch(actionCreators.deleteResult(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
