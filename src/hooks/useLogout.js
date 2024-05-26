import { useDispatch } from "react-redux";
import { setIsLoading } from "../store/loading/loading.reducer";
import { setCurrentUser } from "../store/user/user.reducer";
import axiosInstance from "../services/interceptors";
import { setSelectedTask } from "../store/tasks/tasks.reducer";

function useLogout() {
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(setIsLoading(true));
    try {
      const response = await axiosInstance.get(`/auth/logout`);
      console.log("Response after logout: ", response.data);
      dispatch(setCurrentUser(null));
    } catch (error) {
      console.log("Error while logging out: ", error.response);
      dispatch(setCurrentUser(null));
    } finally {
      dispatch(setSelectedTask(null));
      dispatch(setIsLoading(false));
    }
  };

  return { logout };
}

export default useLogout;
