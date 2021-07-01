import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel'; // eslint-disable-next-line
import calculate from '../logic/calculate';
import './App.css';

const App = () => {
  const [state, setState] = useState({
    total: '0',
    next: '',
    operation: '',
  });

  const handleClick = (buttonName) => {
    const data = calculate(state, buttonName);
    const { total, next, operation } = data;
    setState({
      total,
      next,
      operation,
    });
  };

  const { total, next, operation } = state;
  return (
    <>
      <div className="App">
        <h1>React Calculator</h1>
        <Display result={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={handleClick} />
      </div>
    </>
  );
};

export default App;
