import React from "react";
import './forminput.styles.css';

const FormInput = (props) => {
  const {
    label,
    onChange,
    labelClassnames,
    labelFocused,
    labelProperty,
    onFocus,
    onBlur,
    inputClassname,
    type,
    name,
    pattern,
    value,
    isRequired
  } = props;
  return (
    <>
      <label
        className={`${labelClassnames} ${
          labelFocused || labelProperty ? "focused" : ""
        }`}
      >
        {label}
      </label>
      <input
        className={inputClassname}
        type={type}
        name={name}
        value={value}
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
        required={isRequired}
        pattern={pattern}
      />
    </>
  );
};

export default FormInput;
