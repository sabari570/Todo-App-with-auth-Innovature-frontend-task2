import React from "react";
import "./layout.styles.css";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="app-layout">
      <Outlet />
    </div>
  );
};

export default Layout;
