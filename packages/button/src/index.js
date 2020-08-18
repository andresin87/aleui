import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ children, ...props }) => {
  return (
    <button {...props}>
      <b>{children}</b>
    </button>
  );
};

Button.propTypes = {};
Button.defaultProps = {};

export default Button;
