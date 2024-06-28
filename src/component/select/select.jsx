import React from "react";
import PropTypes from "prop-types";
import "./select.scss";

export const SelectInput = ({
  label,
  name,
  defaultValue,
  options,
  size,
  style,
  onChange,
  error,
  required,
  ...props
}) => {
  return (
    <>
      <div className="wrapper-select">
        {label && (
          <label className="label-input" htmlFor="input">
            {label}
            {required && <span className="asterix">*</span>}
          </label>
        )}
        <select
          className={[
            "storybook-select",
            `storybook-size-${size}`,
            `${error && `storybook-error-boundary`}`,
          ].join(" ")}
          name={name}
          onChange={onChange}
          {...props}
        >
          <option className="storybook-option-default" value="">
            {defaultValue}
          </option>
          {options &&
            options.map((option) => {
              return (
                <option className="storybook-option" value={option.value}>
                  {option.icon && option.icon} <span>{option.name}</span>
                </option>
              );
            })}
        </select>
        {error && (
          <div className="wrapper-error-message">
            <p className="error-input">{error}</p>
          </div>
        )}
      </div>
    </>
  );
};

SelectInput.prototype = {
  label: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.string,
  error: PropTypes.string,
  required: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.object),
};

SelectInput.defaultProps = {
  onChange: undefined,
  label: "Select Input",
  defaultValue: "Select Input",
  size: "large",
  error: "",
  required: false,
  options: [
    { icon: "🤣", value: "test1", name: "test1" },
    { icon: "😆", value: "test2", name: "test2" },
    { icon: "🥰", value: "test3", name: "test3" },
  ],
};
