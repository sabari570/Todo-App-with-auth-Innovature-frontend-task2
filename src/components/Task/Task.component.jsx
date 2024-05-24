import React from "react";
import "./task.styles.css";
import { ImCheckboxUnchecked } from "react-icons/im";
import { ImCheckboxChecked } from "react-icons/im";
import { MdEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import useUpdateTask from "../../hooks/useUpdateTask";
import { useDispatch } from "react-redux";
import { setSelectedTask } from "../../store/tasks/tasks.reducer";
import useDeleteTask from "../../hooks/useDeleteTask";

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const { updateTask } = useUpdateTask();
  const { deleteTask } = useDeleteTask();

  const handleTaskIsCompleted = async (e) => {
    const taskData = {
      ...task,
      isCompleted: !task.isCompleted,
    };
    await updateTask(taskData);
  };

  const handleEditTask = () => {
    dispatch(setSelectedTask(task));
  };

  const handleDeleteTask = async (e) => {
    await deleteTask(task._id);
  };

  return (
    <div className="individual-task">
      <div className="task-header">
        <div className="task-completed-status" onClick={handleTaskIsCompleted}>
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
        <MdEdit className="task-edit-option" onClick={handleEditTask} />
        <MdDeleteForever
          className="task-delete-option"
          onClick={handleDeleteTask}
        />
      </div>
    </div>
  );
};

export default Task;
