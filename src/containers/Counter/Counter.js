import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  increment,
  decrement,
  addValue,
  subtractValue,
  storeResult,
  deleteResult
} from './../../store/actions/actions';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionType from '../../store/actions/actions';

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
    ctr: state.ctr.counter, //state.whateverYouSetOnIndexjs.counter
    storedResults: state.result.results //state.whateverYouSetOnIndexjs.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter: () => dispatch(increment()),
    onDecrementCounter: () => dispatch(decrement()),
    onAddValueCounter: () => dispatch(addValue(5)),
    onSubtractValueCounter: () => dispatch(subtractValue(5)),
    onStoreResult: result => dispatch(storeResult(result)),
    onDeleteResult: id => dispatch(deleteResult(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
