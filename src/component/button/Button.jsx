import React from "react";
import PropTypes from "prop-types";
import "./button.scss";
import { Loader } from "../spinner/loader";

export const Button = ({ mode, backgroundColor, size, label, loading, disabled, icon, onClick, ...props }) => {

  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, `${mode && `storybook-button--${mode}`}`, `${disabled && `disabled`}`].join(
        " "
      )}
      onClick={onClick}
      style={backgroundColor && { backgroundColor }}
      disabled = {disabled}
      {...props}
    >
      <div className={loading || icon ? 'button-aside' : ''}>
      {loading ? <Loader size='small' />  : '' }
      {icon}
      <span>{loading? 'Loading': label }</span>
      </div>
    </button>
  );
};

Button.propTypes = {
  mode: PropTypes.oneOf(["primary","secondary", "info", "warning", "danger"]),
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  mode: "primary",
  backgroundColor: null,
  size: "large",
  onClick: undefined,
  loading: false,
  disabled: false,
  label:"Button"
};
