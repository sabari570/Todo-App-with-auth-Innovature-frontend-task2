import { useDispatch } from "react-redux";
import { setIsLoading } from "../store/loading/loading.reducer";
import axios from "axios";
import { URL_CONFIG } from "../utils/constants";
import { setCurrentUser } from "../store/user/user.reducer";

function useLogout() {
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(setIsLoading(true));
    try {
      axios.defaults.withCredentials = true;
      const response = await axios.get(
        `${URL_CONFIG.BACKEND_BASE_URL}/auth/logout`
      );
      console.log("Response after logout: ", response.data);
      dispatch(setCurrentUser(null));
    } catch (error) {
      console.log("Error while logging out: ", error.response);
      dispatch(setCurrentUser(null));
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return { logout };
}

export default useLogout;
