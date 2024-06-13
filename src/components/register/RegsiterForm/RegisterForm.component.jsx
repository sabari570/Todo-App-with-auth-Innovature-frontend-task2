import React, { useState } from "react";
import FormInput from "../../FormInput/FormInput";
import { FaUser } from "react-icons/fa";
import { MdLock } from "react-icons/md";
import { IoMdMail } from "react-icons/io";
import UserProfile from "../../../assets/images/profilePic.png";
import { Link } from "react-router-dom";
import useSignUp from "../../../hooks/useSignUp";

const RegisterForm = () => {
  const INITIAL_USERDATA = {
    name: "",
    email: "",
    password: "",
  };

  const [usernameFocused, setUsernameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);
  const [userData, setUserData] = useState(INITIAL_USERDATA);
  const [isEyeOpen, setIsEyeOpen] = useState(false);
  const [usernameError, setUsernameError] = useState("");
  const [emailError, setEmailError] = useState("");

  const { signUp } = useSignUp();

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });

    if (e.target.name === "name") {
      const usernameRegex = /^[A-Za-z0-9]{3,16}$/;
      const isValidUsername = usernameRegex.test(e.target.value.toLowerCase());
      setUsernameError(isValidUsername ? "" : "Invalid username format");
    }

    if (e.target.name === "email") {
      const emailRegex = /[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$/;
      const isValidEmail = emailRegex.test(e.target.value.toLowerCase());
      setEmailError(isValidEmail ? "" : "Invalid email format");
    }
  };

  const onHandleRegisterSubmit = async (e) => {
    e.preventDefault();
    if (
      !usernameError &&
      userData.name &&
      !emailError &&
      userData.email &&
      userData.password
    ) {
      console.log("Response from register component: ", userData);
      await signUp(userData);
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
      <form onSubmit={onHandleRegisterSubmit}>
        <div className="login-form-heading">
          <img
            className="login-profile-bg"
            src={UserProfile}
            alt="User Profile"
          />
          <h3>Create your Account</h3>
        </div>

        <div className={`input-div one ${usernameError && "show-error"}`}>
          <div className={`input-icons ${usernameError && "show-error"}`}>
            <FaUser />
          </div>
          <div className="input-fields">
            <FormInput
              className="email"
              type="text"
              name="name"
              value={userData.name}
              onFocus={() => setUsernameFocused(true)}
              onBlur={() => setUsernameFocused(false)}
              onChange={changeInputHandler}
              label="Username"
              labelClassnames={`label-name one ${
                usernameError && "show-error"
              }`}
              labelFocused={usernameFocused}
              labelProperty={userData.name}
              isRequired={true}
            />
            <div className="show-error-message">{usernameError}</div>
          </div>
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
            Already have an account? <Link to="/login">Sign in</Link>
          </small>
          <button type="submit" className="login-btn">
            SIGN UP
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
