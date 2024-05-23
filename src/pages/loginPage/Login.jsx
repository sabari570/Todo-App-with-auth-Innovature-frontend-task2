import React, { useEffect } from "react";
import "./login.styles.css";
import LoginBgImage from "../../components/login/LoginBgImage/LoginBgImage.component";
import LoginForm from "../../components/login/LoginForm/LoginForm.component";
import NotesListBgImage from "../../assets/images/notesListWithoutBg.png";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) navigate("/");
  }, [currentUser]);

  return (
    <div className="app-bg">
      <div className="auth-card">
        <div className="auth-bg-side">
          <LoginBgImage imageSrc={NotesListBgImage} />
        </div>
        <div className="auth-form-side">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
