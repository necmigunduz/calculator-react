import React from 'react';
import Button from './Button';

export default function ButtonPannel() {
  return (
    <div className="button-panel">
      <div className="buttons">
        <Button name="AC" />
        <Button name="+/-" />
        <Button name="%" />
        <Button name="/" />
      </div>
      <div className="buttons">
        <Button name="7" />
        <Button name="8" />
        <Button name="9" />
        <Button name="*" />
      </div>
      <div className="buttons">
        <Button name="4" />
        <Button name="5" />
        <Button name="6" />
        <Button name="-" />
      </div>
      <div className="butons">
        <Button name="1" />
        <Button name="2" />
        <Button name="3" />
        <Button name="+" />
      </div>
      <div className="buttons">
        <Button name="0" />
        <Button name="." />
        <Button name="=" />
      </div>
    </div>
  );
}
