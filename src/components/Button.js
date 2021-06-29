import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { name } = props;
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
  clickHandler: PropTypes.isRequired,
};

Button.defaultProps = {
  name: '',
};
