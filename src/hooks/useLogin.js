import { useDispatch } from "react-redux";
import { setCurrentUser } from "../store/user/user.reducer.js";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import handleErrors from "../utils/handleErrors.js";
import { setIsLoading } from "../store/loading/loading.reducer.js";
import axiosInstance from "../services/interceptors.js";

function useLogin() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const login = async (userData) => {
    dispatch(setIsLoading(true));
    try {
      const response = await axiosInstance.post(`/auth/login`, userData);
      const user = await response.data;

      if (!user) {
        toast.error("Couldn't login user. Please try again later");
        return;
      }

      dispatch(setCurrentUser(user));
      toast.success("User logged in successfully");
      navigate("/");
    } catch (error) {
      console.log("Error while signing up: ", error.response.data);
      const errorMessage = handleErrors(error.response.data.errors);
      toast.error(errorMessage);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return { login };
}

export default useLogin;
