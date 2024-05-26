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

  const { signUp } = useSignUp();

  const changeInputHandler = (e) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const onHandleRegisterSubmit = async (e) => {
    e.preventDefault();
    console.log("Response from register component: ", userData);
    await signUp(userData);
    setUserData(INITIAL_USERDATA);
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

        <div className="input-div one">
          <div className="input-icons">
            <FaUser />
          </div>
          <div className="input-fields">
            <FormInput
              className="email"
              type="text"
              name="name"
              pattern="^[A-Za-z0-9]{3,16}$"
              value={userData.name}
              onFocus={() => setUsernameFocused(true)}
              onBlur={() => setUsernameFocused(false)}
              onChange={changeInputHandler}
              label="Username"
              labelClassnames="label-name one"
              labelFocused={usernameFocused}
              labelProperty={userData.name}
              isRequired={true}
            />
          </div>
        </div>

        <div className="input-div one">
          <div className="input-icons">
            <IoMdMail />
          </div>
          <div className="input-fields">
            <FormInput
              className="email"
              type="email"
              name="email"
              pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
              value={userData.email}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
              onChange={changeInputHandler}
              label="Email"
              labelClassnames="label-name one"
              labelFocused={emailFocused}
              labelProperty={userData.email}
              isRequired={true}
            />
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
