import React, { Component } from 'react';
import '../App.css';
import ButtonPanel from './buttonPanel';
import Display from './display';
import calculate from '../logic/calculate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: '0',
      next: '',
      operation: '',
    };
  }

  handleClick = buttonName => {
    const data = calculate(this.state, buttonName);
    this.setState({ total: data.total, next: data.next, operation: data.operation });
  };

  render() {
    return (
      <>
        <Display result={this.state.total} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
