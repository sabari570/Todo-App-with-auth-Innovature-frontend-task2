import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsLoading } from "../store/loading/loading.reducer";
import handleErrors from "../utils/handleErrors";
import axiosInstance from "../services/interceptors";

function useSignUp() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const signUp = async (userData) => {
    dispatch(setIsLoading(true));
    try {
      const response = await axiosInstance.post(`/auth/register`, userData);
      const newUser = await response.data;

      if (!newUser) {
        toast.error("Couldn't register user. Please try again later");
      }
      toast.success("User registered successfully");
      navigate("/login");
    } catch (error) {
      console.log("Error while signing up: ", error.response.data);
      const errorMessage = handleErrors(error.response.data.errors);
      toast.error(errorMessage);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  return { signUp };
}

export default useSignUp;
