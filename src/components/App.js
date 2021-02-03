import React from 'react';
import '../App.css';
import ButtonPanel from './buttonPanel';
import Display from './display';

const App = () => {
  return (
    <>
      <Display result="0" />
      <ButtonPanel />
    </>
  );
}

export default App;
