import { useDispatch } from "react-redux";
import { setIsLoading } from "../store/loading/loading.reducer";
import axios from "axios";
import { URL_CONFIG } from "../utils/constants";
import handleErrors from "../utils/handleErrors";
import toast from "react-hot-toast";
import useFetchTasks from "./useFetchTasks";
import { setCurrentUser } from "../store/user/user.reducer";

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
      axios.defaults.withCredentials = true;
      const response = await axios.post(
        `${URL_CONFIG.BACKEND_BASE_URL}/task/create-task`,
        taskData
      );
      console.log("Response after creating a task: ", response.data);
      if (response.status === 201) {
        toast.success(response.data.message);
        await fetchTasks();
      }
    } catch (error) {
      console.log("Error while creating a task: ", error.response);

      // If the token is invalid log the users out
      if (error.response.status === 403) {
        dispatch(setCurrentUser(null));
        return;
      }

      const errorMessage = handleErrors(error.response.data);
      toast.error(errorMessage);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return { createTask };
}

export default useCreateTask;
