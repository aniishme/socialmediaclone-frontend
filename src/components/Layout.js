import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import {
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineLogout,
} from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import "../assets/scss/components/layout.scss";
import { useSelector } from "react-redux";
function Layout({ children, style }) {
  const { user } = useSelector((state) => state.authReducer);
  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("state");
    window.location.reload();
  };

  return (
    <div>
      <Navbar />
      <div className="layout-wrapper" style={style}>
        <div className="layout-inner">
          <div className="sidebar-wrapper">
            <Link to="/">
              <div className="siderbar-item">
                {" "}
                <AiOutlineHome size="24px" />
                <span>Home</span>
              </div>
            </Link>
            <Link to="/notifications">
              <div className="siderbar-item">
                {" "}
                <IoMdNotificationsOutline size="24px" />
                <span>Notifications</span>
              </div>
            </Link>
            <Link to="/messages">
              <div className="siderbar-item">
                <AiOutlineMessage size="24px" />
                <span>Messages</span>
              </div>
            </Link>
            <Link to={"/" + user.id}>
              <div className="siderbar-item">
                <CgProfile size="24px" />
                <span>Profile</span>
              </div>
            </Link>
            <div className="siderbar-item" onClick={logoutHandler}>
              <AiOutlineLogout size="24px" />
              <span>Logout</span>
            </div>
          </div>
          <div className="content-wrapper">{children}</div>
          <div className="rightbar-wrapper">
            <h3>People You May Know</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
