import React from "react";
import PropTypes from "prop-types";
import "./input.scss";

/**
 * Primary UI component for user interaction
 */

export const Input = ({
  label,
  size,
  placeholder,
  style,
  onChange,
  error,
  ...props
}) => {
  return (
    <>
      <div className="wrapper-input">
        {label && (
          <label className="label-input" htmlFor="input">
            {label}
          </label>
        )}
        <input
          type="text"
          id="input"
          placeholder={placeholder}
          className={["storybook-input", `storybook-size-${size}`, `${error && `storybook-error-boundary`}`].join(" ")}
          style={style}
          onChange={onChange}
          {...props}
        />
        {error && (
          <div className="wrapper-error-message">
            <p className="error-input">{error}</p>
          </div>
        )}
      </div>
    </>
  );
};

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOf(["large", "medium"]),
  error: PropTypes.string,
};

Input.defaultProps = {
  onChange: undefined,
  placeholder: "Type Name",
  label: "Name",
  size: "medium",
  error: "",
};
