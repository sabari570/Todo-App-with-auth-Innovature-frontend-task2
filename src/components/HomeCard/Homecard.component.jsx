import React from "react";
import "./homecard.styles.css";
import TaskAppLogo from "../../assets/images/notesLogo.jpg";
import TaskFormInput from "../TaskFormInput/TaskFormInput.component";

const Homecard = () => {
  return (
    <div className="home-card">
      <div className="task-app-logo">
        <h3>Todo-List</h3>
        <img src={TaskAppLogo} />
      </div>

      <TaskFormInput />
    </div>
  );
};

export default Homecard;
