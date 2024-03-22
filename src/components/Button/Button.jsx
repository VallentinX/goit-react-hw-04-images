import React from "react";

import PropTypes from "prop-types";

import "./Button.module.css";

const Button = function ({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default Button;
