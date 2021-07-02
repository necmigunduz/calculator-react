import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Button(props) {
  const { // eslint-disable-next-line
    name, color, wide, clickHandler,
  } = props;
  const handleClick = (buttonName) => props.clickHandler(buttonName);
  return (
    <div className="button">
      <button
        className={`button ${color} ${wide}`}
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
  color: PropTypes.string,
  wide: PropTypes.string,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  name: '',
  color: 'orange',
  wide: '',
};
