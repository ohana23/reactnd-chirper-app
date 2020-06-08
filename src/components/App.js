import React, { Component } from 'react';
import { connect } from 'react-redux';
import { handleInitialData } from '../actions/shared';

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        Starter Code
      </div>
    )
  }
}

// we don't need anything from the state so we leave the first parentheses invocation blank
export default connect()(App);