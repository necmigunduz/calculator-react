import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel'; // eslint-disable-next-line
import calculate from '../logic/calculate';
import './App.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: '0',
      next: '0',
      operation: '',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const data = calculate(this.state, buttonName);
    const { total, next, operation } = data;
    this.setState({
      total,
      next,
      operation,
    });
  }

  render() {
    const { total } = this.state;
    return (
      <>
        <div className="App">
          <Display result={total} />
          <ButtonPanel clickHandler={this.handleClick} />
        </div>
      </>
    );
  }
}
