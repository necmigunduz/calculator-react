import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) { // eslint-disable-next-line
  const { name, clickHandler } = props; 
  const handleClick = (buttonName) => props.clickHandler(buttonName);
  return (
    <div className="button">
      <button
        className="name"
        type="button"
        onClick={handleClick.bind(this, name)}
      >
        {name}
      </button>
    </div>
  );
}

Button.propTypes = {
  name: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: '',
};
