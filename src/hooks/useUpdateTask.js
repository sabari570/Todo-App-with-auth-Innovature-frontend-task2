import { useDispatch } from "react-redux";
import { setIsLoading } from "../store/loading/loading.reducer";
import axios from "axios";
import { URL_CONFIG } from "../utils/constants";
import handleErrors from "../utils/handleErrors";
import toast from "react-hot-toast";
import useFetchTasks from "./useFetchTasks";
import { setCurrentUser } from "../store/user/user.reducer";

function useUpdateTask() {
  const dispatch = useDispatch();
  const { fetchTasks } = useFetchTasks();

  const updateTask = async (taskData) => {
    const { _id, title, isCompleted } = taskData;
    const taskBody = { title, isCompleted: isCompleted.toString() };
    dispatch(setIsLoading(true));
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.put(
        `${URL_CONFIG.BACKEND_BASE_URL}/task/update-task/${_id}`,
        taskBody
      );
      console.log("Response after updating the task: ", response.data);
      toast.success(response.data.message);
      await fetchTasks();
    } catch (error) {
      console.log("Error while updating task: ", error.response);
      const errorMessage = handleErrors(error.response.data);
      toast.error(errorMessage);

      if (error.response.status === 404) return;

      // If the token is invalid log the users out
      if (error.response.status === 403 || error.response.status === 401) {
        dispatch(setCurrentUser(null));
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return { updateTask };
}

export default useUpdateTask;
