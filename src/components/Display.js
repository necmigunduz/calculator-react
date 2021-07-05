import React from 'react';
import PropTypes from 'prop-types';

export default function Display(props) {
  const { result, next, operation } = props;
  return (
    <div className="display">
      {`${result} ${operation} ${next}`}
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
  next: PropTypes.string.isRequired,
  operation: PropTypes.string.isRequired,
};

Display.defaultProps = {
  result: '0',
};
