import React, { useState } from "react";
import "./loginForm.styles.css";
import { MdLock } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import UserProfile from "../../../assets/images/profilePic.png";
import { Link } from "react-router-dom";
import FormInput from "../../FormInput/FormInput";
import useLogin from "../../../hooks/useLogin";

const LoginForm = () => {
  const INITIAL_USERDATA = {
    email: "",
    password: "",
  };
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [emailError, setEmailError] = useState("");
  const { login } = useLogin();

  const [userData, setUserData] = useState(INITIAL_USERDATA);

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });

    if (e.target.name === "email") {
      const emailRegex = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
      const isValidEmail = emailRegex.test(e.target.value.toLowerCase());
      setEmailError(isValidEmail ? "" : "Invalid email format");
    }
  };

  const onHandleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!emailError && userData.email && userData.password) {
      console.log("Login form submitted:", userData);
      await login(userData);
      setUserData(INITIAL_USERDATA);
    } else {
      console.log("Form has errors. Please correct them.");
    }
  };

  const onPasswordEyeToogle = (e) => {
    setIsEyeOpen(!isEyeOpen);
  };

  return (
    <div className="login-form">
      <form onSubmit={onHandleLoginSubmit}>
        <div className="login-form-heading">
          <img
            className="login-profile-bg"
            src={UserProfile}
            alt="User Profile"
          />
          <h3>Login to your account</h3>
        </div>

        <div className={`input-div one ${emailError && "show-error"}`}>
          <div className={`input-icons ${emailError && "show-error"}`}>
            <IoMdMail />
          </div>
          <div className="input-fields">
            <FormInput
              type="text"
              name="email"
              value={userData.email}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              onChange={changeInputHandler}
              label="Email"
              labelClassnames={`label-name one ${emailError && "show-error"}`}
              labelFocused={emailFocused}
              labelProperty={userData.email}
              isRequired={true}
            />
            <div className="show-error-message">{emailError}</div>
          </div>
        </div>

        <div className="input-div two">
          <div className="input-icons">
            <MdLock />
          </div>
          <div className="input-fields">
            <FormInput
              className="password"
              type={isEyeOpen ? "text" : "password"}
              name="password"
              value={userData.password}
              onFocus={() => setPasswordFocused(true)}
              onBlur={() => setPasswordFocused(false)}
              onChange={changeInputHandler}
              label="Password"
              labelClassnames="label-name two"
              labelFocused={passwordFocused}
              labelProperty={userData.password}
              isRequired={true}
              showPasswordEye={true}
              isEyeOpen={isEyeOpen}
              onPasswordEyeClick={onPasswordEyeToogle}
            />
          </div>
        </div>

        <div className="auth-footer">
          <small>
            Don't have an account? <Link to="/register">Sign up</Link>
          </small>
          <button type="submit" className="login-btn">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
