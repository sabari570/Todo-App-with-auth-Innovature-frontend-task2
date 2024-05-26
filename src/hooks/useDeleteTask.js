import { useDispatch } from "react-redux";
import { setIsLoading } from "../store/loading/loading.reducer";
import useFetchTasks from "./useFetchTasks";
import toast from "react-hot-toast";
import { setCurrentUser } from "../store/user/user.reducer";
import handleErrors from "../utils/handleErrors";
import { setSelectedTask } from "../store/tasks/tasks.reducer";
import axiosInstance from "../services/interceptors";

function useDeleteTask() {
  const dispatch = useDispatch();
  const { fetchTasks } = useFetchTasks();

  const deleteTask = async (taskId) => {
    dispatch(setIsLoading(true));
    try {
      const response = await axiosInstance.delete(
        `/task/delete-task/${taskId}`
      );
      console.log("Response after deleting task: ", response.data);
      toast.success(response.data.message);
      await fetchTasks();
    } catch (error) {
      console.log("Error while deleting the task: ", error.response);
      const errorMessage = handleErrors(error.response.data);
      toast.error(errorMessage);

      if (error.response.status === 404) return;

      // If the token is invalid log the users out
      if (error.response.status === 403 || error.response.status === 401) {
        dispatch(setCurrentUser(null));
      }
    } finally {
      dispatch(setSelectedTask(null));
      dispatch(setIsLoading(false));
    }
  };

  return { deleteTask };
}

export default useDeleteTask;
