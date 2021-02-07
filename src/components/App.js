import React from 'react';
import '../App.css';
import ButtonPanel from './buttonPanel';
import Display from './display';
import calculate from '../logic/calculate';

class App extends Component {
  constructor() {
    super();
    state = { 
      total: null,
      next: null,
      operation: null
     };
  }
  render() { 
    return ( 
      <>
      <Display result="0" />
      <ButtonPanel />
    </>
     );
  }
}
 
export default App;