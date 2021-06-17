import React from 'react';
import Button from './Button';

export default function ButtonPannel() {
  return (
    <div className="button-panel">
      <div className="buttons">
        <Button className="AC" />
        <Button className="+/-" />
        <Button className="%" />
        <Button className="/" />
      </div>
      <div className="Buttons">
        <Button className="7" />
        <Button className="8" />
        <Button className="9" />
        <Button className="x" />
      </div>
      <div className="buttons">
        <Button className="4" />
        <Button className="5" />
        <Button className="6" />
        <Button className="-" />
      </div>
      <div className="butons">
        <Button className="1" />
        <Button className="2" />
        <Button className="3" />
        <Button className="+" />
      </div>
      <div className="buttons">
        <Button className="0" />
        <Button className="." />
        <Button className="=" />
      </div>
    </div>
  );
}
