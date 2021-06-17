import React from 'react';
import PropTypes from 'prop-types';

export default function Button(props) {
  const { name, clickHandle } = props;
  const handleClick = (button) => clickHandle(button);
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
  clickHandle: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: '',
};
