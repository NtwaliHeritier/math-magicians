import React from 'react';
import '../App.css';
import ButtonPanel from './buttonPanel';
import Display from './display';
import calculate from '../logic/calculate';

const App = () => {
  return (
    <>
      <Display result="0" />
      <ButtonPanel />
    </>
  );
}

export default App;
