import React, { useState } from "react";
import "./taskFormInput.styles.css";
import TaskList from "../TaskList/TaskList.component";
import useCreateTask from "../../hooks/useCreateTask";

const TaskFormInput = () => {
  const INITIAL_TASK_DATA = { title: "" };
  const { createTask } = useCreateTask();
  const [task, setTask] = useState(INITIAL_TASK_DATA);
  const onCreateTaskSubmit = async (e) => {
    e.preventDefault();
    await createTask(task);
    setTask(INITIAL_TASK_DATA);
  };

  const onChangeHandle = (e) => {
    setTask((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };
  return (
    <div className="task-form">
      <form onSubmit={onCreateTaskSubmit}>
        <div className="task-input-fields">
          <input
            className="task-input"
            type="text"
            name="title"
            value={task.title}
            onChange={onChangeHandle}
            placeholder="Add your task"
          />
          <button className="add-task-btn" type="submit">
            Add
          </button>
        </div>
      </form>

      <TaskList />
    </div>
  );
};

export default TaskFormInput;
