import React from "react";
import './loader.styles.css';
import Loader from "./Loader.component";

const LoadingModal = () => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <Loader />
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default LoadingModal;
