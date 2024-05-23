import React, { useEffect } from "react";
import "./task.styles.css";
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { selectTasksList } from "../../store/tasks/tasks.selector";
import { setTaskList } from "../../store/tasks/tasks.reducer";

const Task = ({ task }) => {
  const tasks = useSelector(selectTasksList);
  const dispatch = useDispatch();

  const handleTaskIsCompleted = (taskId) => {
    // Create a custom hook for updating the task isCompleted(data) and use it in here
    const updatedTasks = tasks.map((task) =>
      task._id === taskId ? { ...task, isCompleted: !task.isCompleted } : task
    );
    dispatch(setTaskList(updatedTasks));
  };

  return (
    <div className="individual-task">
      <div className="task-header">
        <div
          className="task-completed-status"
          onClick={(e) => handleTaskIsCompleted(task._id)}
        >
          {task.isCompleted ? (
            <ImCheckboxChecked className="checked-icon" />
          ) : (
            <ImCheckboxUnchecked className="unchecked-icon" />
          )}
        </div>
        <div
          className={`task-title ${task.isCompleted ? "task-completed" : ""}`}
        >
          {task.title}
        </div>
      </div>

      <div className="task-options">
        <MdEdit className="task-edit-option" />
        <MdDeleteForever className="task-delete-option" />
      </div>
    </div>
  );
};

export default Task;
