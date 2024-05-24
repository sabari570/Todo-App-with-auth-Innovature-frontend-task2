import React, { useEffect, useState } from "react";
import "./taskFormInput.styles.css";
import TaskList from "../TaskList/TaskList.component";
import useCreateTask from "../../hooks/useCreateTask";
import { useSelector } from "react-redux";
import { selectSelectedTask } from "../../store/tasks/tasks.selector";
import useUpdateTask from "../../hooks/useUpdateTask";

const TaskFormInput = () => {
  const INITIAL_TASK_DATA = { title: "" };
  const { createTask } = useCreateTask();
  const { updateTask } = useUpdateTask();
  const [task, setTask] = useState(INITIAL_TASK_DATA);

  const selectedTask = useSelector(selectSelectedTask);

  useEffect(() => {
    if (selectedTask) setTask(selectedTask);
    else setTask(INITIAL_TASK_DATA);
  }, [selectedTask]);

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

  const onEditTaskHandle = async (e) => {
    e.preventDefault();
    console.log("Update the task: ", task);
    await updateTask({ ...task, isCompleted: false });
    setTask(INITIAL_TASK_DATA);
  };

  return (
    <div className="task-form">
      <form onSubmit={selectedTask ? onEditTaskHandle : onCreateTaskSubmit}>
        <div className="task-input-fields">
          <input
            className="task-input"
            type="text"
            name="title"
            value={task.title}
            onChange={onChangeHandle}
            placeholder="Add your task"
          />
          {selectedTask ? (
            <button className="add-task-btn" type="submit">
              Update
            </button>
          ) : (
            <button className="add-task-btn" type="submit">
              Add
            </button>
          )}
        </div>
      </form>

      <TaskList />
    </div>
  );
};

export default TaskFormInput;
