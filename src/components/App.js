import React, { useState } from 'react';
import styled from 'styled-components';
import Display from './Display';
import ButtonPanel from './ButtonPanel'; // eslint-disable-next-line
import calculate from '../logic/calculate';

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

  const S = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  `;
  
  const { total, next, operation } = state;

  return (
    <>
      <S>
        <Display result={total} next={next} operation={operation} />
        <ButtonPanel clickHandler={handleClick} />
      </S>
    </>
  );
};

export default App;
