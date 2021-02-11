import React, { useState } from 'react';
import '../App.css';
import ButtonPanel from './buttonPanel';
import Display from './display';
import calculate from '../logic/calculate';

const App = () => {

  const calculator = {total: '0', next: '0', operation: ''};
  const [state, setState] = useState(calculator);

  const handleClick = buttonName => {
    console.log(state);
    const data = calculate(state, buttonName);
    setState({ total: data.total, next: data.next, operation: data.operation });
  };

  return (
    <>
     <Display result={state.total} />
     <ButtonPanel clickHandler={handleClick}/>
    </>
  ) 
}

export default App;