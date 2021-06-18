import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel'; // eslint-disable-next-line
import calculate from '../logic/calculate';
import './App.css';

function App() {
  return (
    <>
      <div className="App">
        <Display />
        <ButtonPanel />
      </div>
    </>
  );
}

export default App;
