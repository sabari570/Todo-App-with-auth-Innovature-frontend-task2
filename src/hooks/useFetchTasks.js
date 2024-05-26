import { useDispatch } from "react-redux";
import { setIsLoading } from "../store/loading/loading.reducer";
import handleErrors from "../utils/handleErrors";
import { setTaskList } from "../store/tasks/tasks.reducer";
import { setCurrentUser } from "../store/user/user.reducer";
import axiosInstance from "../services/interceptors";

function useFetchTasks() {
  const dispatch = useDispatch();
  const fetchTasks = async () => {
    dispatch(setIsLoading(true));
    try {
      const response = await axiosInstance.get("/task/fetch-tasks");
      console.log("Response after fetching tasks: ", response.data);
      dispatch(setTaskList(response.data.tasks));
    } catch (error) {
      console.log("Error while fetching notes: ", error.response);
      const errorMessage = handleErrors(error.response.data);
      if (error.response.status === 404) return;

      // If the token is invalid log the users out
      if (error.response.status === 403 || error.response.status === 401) {
        dispatch(setCurrentUser(null));
      }
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return { fetchTasks };
}

export default useFetchTasks;
