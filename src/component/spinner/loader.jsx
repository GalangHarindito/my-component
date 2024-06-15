import React from "react";
import PropTypes from "prop-types";
import './loader.scss'

export const Loader  = ({size}) => {
    return (
        <div className={['loader', `loader-${size}`].join(" ")} />
    )
}

Loader.propTypes = {
    size: PropTypes.oneOf(["large", "medium", "small"]),
  };
  
  Loader.defaultProps = {
    size: "medium",
  };