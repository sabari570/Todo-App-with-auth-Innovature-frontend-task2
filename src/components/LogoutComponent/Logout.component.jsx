import React from "react";
import "./logout.styles.css";
import { TbLogout } from "react-icons/tb";
import useLogout from "../../hooks/useLogout";

const LogoutBtn = () => {
  const { logout } = useLogout();
  const onLogoutHandler = async () => {
    console.log("logout user...");
    await logout();
  };
  return (
    <div className="logout-container" onClick={onLogoutHandler}>
      <button>
        <p className="logout-label">Logout</p>
        <TbLogout className="logout-icon" />
      </button>
    </div>
  );
};

export default LogoutBtn;
