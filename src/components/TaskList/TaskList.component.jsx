import React from "react";
import "./tasksLists.styles.css";
import Task from "../Task/Task.component";
import { useSelector } from "react-redux";
import { selectTasksList } from "../../store/tasks/tasks.selector";

const TaskList = () => {
  const tasks = useSelector(selectTasksList);
  return (
    <div className="tasks-list">
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return <Task key={task._id} task={task} />;
          })
        ) : (
          <p className="tasks-not-found">Task not created yet</p>
        )}
      </ul>
    </div>
  );
};

export default TaskList;
