import React, { useEffect, useState } from "react";
import "./sidebar.styles.css";
import UserProfileBgImage from "../../assets/images/userProfileBgImage.png";
import LogoutBtn from "../LogoutComponent/Logout.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { selectTasksList } from "../../store/tasks/tasks.selector";

const SideBar = () => {
  const currentUser = useSelector(selectCurrentUser);
  const tasks = useSelector(selectTasksList);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);

  //   useEffect For closing the Sidebar when clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const sidebarWrapper = document.querySelector(".sidebar-wrapper");
      const sidebarBtn = document.getElementById("sidebar-btn");

      if (
        sidebarWrapper &&
        !sidebarWrapper.contains(event.target) &&
        sidebarBtn
      ) {
        sidebarBtn.checked = false;
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //   useEffect for monitoring the completedTaskCount
  useEffect(() => {
    const count = tasks.filter((task) => task.isCompleted).length;
    setCompletedTaskCount(count);
  }, [tasks]);

  return (
    <div className="sidebar-wrapper">
      <input type="checkbox" id="sidebar-btn" />
      <label htmlFor="sidebar-btn" className="sidebar-menu-btn">
        <i class="fa-solid fa-bars"></i>
      </label>

      <nav id="sidebar">
        <div className="sidebar-user-info-section">
          <div className="user-profile-bg">
            <div className="sidebar-title">User Profile</div>
            <div className="user-profile-bg-image">
              <img src={UserProfileBgImage} alt="user profile bg image" />
            </div>
          </div>
          <ul className="profile-items">
            <li className="profile-list-items">
              <label className="list-label">Name</label>
              <p>{currentUser?.name}</p>
            </li>
            <li className="profile-list-items">
              <label className="list-label">Email</label>
              <p>{currentUser?.email}</p>
            </li>
            <li className="profile-list-items">
              <label className="list-label">Total No. of todos</label>
              <p>{tasks.length}</p>
            </li>
            <li className="profile-list-items">
              <label className="list-label">No. of todos completed</label>
              <p>{completedTaskCount}</p>
            </li>
          </ul>
        </div>

        <div className="logout-btn">
          <LogoutBtn />
        </div>
      </nav>
    </div>
  );
};

export default SideBar;
