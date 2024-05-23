import React, { useEffect } from "react";
import "./register.styles.css";
import LoginBgImage from "../../components/login/LoginBgImage/LoginBgImage.component";
import RegisterPageBgImage from "../../assets/images/signupBgImage.png";
import RegisterForm from "../../components/register/RegsiterForm/RegisterForm.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) navigate("/");
  }, [currentUser]);

  return (
    <div className="app-bg">
      <div className="auth-card register-card">
        <div className="auth-bg-side">
          <LoginBgImage imageSrc={RegisterPageBgImage} />
        </div>
        <div className="auth-form-side register-auth-form-side">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
