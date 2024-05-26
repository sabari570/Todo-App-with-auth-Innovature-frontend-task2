import { useDispatch } from "react-redux";
import { setIsLoading } from "../store/loading/loading.reducer";
import handleErrors from "../utils/handleErrors";
import toast from "react-hot-toast";
import useFetchTasks from "./useFetchTasks";
import { setCurrentUser } from "../store/user/user.reducer";
import axiosInstance from "../services/interceptors";

function useCreateTask() {
  const dispatch = useDispatch();
  const { fetchTasks } = useFetchTasks();
  const createTask = async (taskData) => {
    dispatch(setIsLoading(true));
    try {
      if (!taskData.title) {
        toast.error("Please enter the task title");
        return;
      }
      const response = await axiosInstance.post(`/task/create-task`, taskData);
      console.log("Response after creating a task: ", response.data);
      toast.success(response.data.message);
      await fetchTasks();
    } catch (error) {
      console.log("Error while creating a task: ", error.response);
      const errorMessage = handleErrors(error.response.data);
      toast.error(errorMessage);

      // If the token is invalid log the users out
      if (error.response.status === 403 || error.response.status === 401) {
        dispatch(setCurrentUser(null));
        return;
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return { createTask };
}

export default useCreateTask;
