import React from 'react';

export default function ButtonPannel() {
  return (
    <div className="button-panel">
      <div className="buttons">
        <button className="AC" aria-label="AC" type="button" />
        <button className="+/-" aria-label="+/-" type="button" />
        <button className="%" aria-label="%" type="button" />
        <button className="/" aria-label="/" type="button" />
      </div>
      <div className="buttons">
        <button className="7" aria-label="7" type="button" />
        <button className="8" aria-label="8" type="button" />
        <button className="9" aria-label="9" type="button" />
        <button className="x" aria-label="x" type="button" />
      </div>
      <div className="buttons">
        <button className="4" aria-label="4" type="button" />
        <button className="5" aria-label="5" type="button" />
        <button className="6" aria-label="6" type="button" />
        <button className="-" aria-label="-" type="button" />
      </div>
      <div className="butons">
        <button className="1" aria-label="1" type="button" />
        <button className="2" aria-label="2" type="button" />
        <button className="3" aria-label="3" type="button" />
        <button className="+" aria-label="+" type="button" />
      </div>
      <div className="buttons">
        <button className="0" aria-label="0" type="button" />
        <button className="." aria-label="0" type="button" />
        <button className="=" aria-label="0" type="button" />
      </div>
    </div>
  );
}
