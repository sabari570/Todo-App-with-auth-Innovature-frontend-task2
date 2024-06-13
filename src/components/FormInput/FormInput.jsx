import React from "react";
import "./forminput.styles.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

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
    isRequired,
    showPasswordEye,
    onPasswordEyeClick,
    isEyeOpen,
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
      />
      <div className="password-eye-icon" onClick={onPasswordEyeClick}>
        {showPasswordEye &&
          (isEyeOpen ? (
            <FaEye className="eye-icon" />
          ) : (
            <FaEyeSlash className="eye-icon" />
          ))}
      </div>
    </>
  );
};

export default FormInput;
