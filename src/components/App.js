import React from 'react';
import '../App.css';
import ButtonPanel from './buttonPanel';
import Display from './display';

function App() {
  return (
    <>
      <Display result="0" />
      <ButtonPanel />
    </>
  );
}

export default App;
