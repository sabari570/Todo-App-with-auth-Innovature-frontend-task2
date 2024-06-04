import React, { useEffect, useRef } from "react";
import Homecard from "../../components/HomeCard/Homecard.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { useNavigate } from "react-router-dom";
import useFetchTasks from "../../hooks/useFetchTasks";
import SideBar from "../../components/Sidebar/SideBar.component";

const Home = () => {
  const currentUser = useSelector(selectCurrentUser);
  const navigate = useNavigate();
  const { fetchTasks } = useFetchTasks();
  // A technique to avoid re-rendering of components more than once
  const hasFetchedTasks = useRef(false);

  // useEffect to check whether the user is logged in or not
  useEffect(() => {
    if (currentUser) navigate("/");
    else navigate("/login");
  }, [currentUser]);

  // useEffect to load the tasks from the backend
  useEffect(() => {
    // Inorder to prevent the fetchTasks api called twice due to ReactStrictMode
    if (!hasFetchedTasks.current) {
      fetchTasks();
      hasFetchedTasks.current = true;
    }
  }, []);

  return (
    <div className="app-bg">
      <SideBar />
      <Homecard />
    </div>
  );
};

export default Home;
