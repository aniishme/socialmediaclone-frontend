import React from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

import { AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CgProfile } from "react-icons/cg";

import "../assets/scss/components/layout.scss";

function Layout({ children, style }) {
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
            <Link to="/profile">
              <div className="siderbar-item">
                <CgProfile size="24px" />
                <span>Profile</span>
              </div>
            </Link>
            <button onClick={logoutHandler}>Logout</button>
          </div>
          <div className="content-wrapper">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
