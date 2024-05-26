import React from "react";
import "./errorPage.styles.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const goToHomepage = () => {
    // Replace the error page route
    navigate("/", { replace: true });
  };

  return (
    <div className="error-page">
      <div className="error-container">
        <h1 className="error-title">404</h1>
        <h4>Opps! Page Not Found</h4>
        <p className="error-message">
          Sorry, the page you are looking for does not exist.
        </p>
        <button className="homepage-button" onClick={goToHomepage}>
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
