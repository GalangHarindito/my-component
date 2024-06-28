import React from "react";
import PropTypes from "prop-types";
import "./input.scss";

/**
 * Primary UI component for user interaction
 */

export const Input = ({
  label,
  name,
  size,
  placeholder,
  style,
  onChange,
  error,
  mandatory,
  className,
  ...props
}) => {
  return (
    <>
      <div className="wrapper-input">
        {label && (
          <label className="label-input" htmlFor="input">
            {label}
            {mandatory && <span className="asterix">*</span>}
          </label>
        )}
        <input
          type="text"
          id="input"
          placeholder={placeholder}
          name={name}
          className={[
            className,
            "storybook-input",
            `storybook-size-${size}`,
            `${error && `storybook-error-boundary`}`,
          ].join(" ")}
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
  mandatory: PropTypes.bool,
};

Input.defaultProps = {
  onChange: undefined,
  placeholder: "Type Name",
  label: "Name",
  size: "medium",
  error: "",
  mandatory: false,
};
