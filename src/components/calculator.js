import React, { useState } from 'react';
import '../App.css';
import ButtonPanel from './buttonPanel';
import Display from './display';
import calculate from '../logic/calculate';

const Calculator = () => {

  const calculator = {total: '0', next: '0', operation: ''};
  const [state, setState] = useState(calculator);

  const handleClick = buttonName => {
    console.log(state);
    const data = calculate(state, buttonName);
    setState({ total: data.total, next: data.next, operation: data.operation });
  };

  return (
    <>
      <div style = {{display: 'flex', justifyContent: 'space-evenly'}}>
        <h3 style={{marginTop: '5%'}}>Let's do some math!</h3>
        <div  data-testid = "calculator">
          <Display result={state.total} />
          <ButtonPanel clickHandler={handleClick}/>
        </div>
      </div>
    </>
  ) 
}

export default Calculator;