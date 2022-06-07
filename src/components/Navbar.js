import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "../assets/scss/components/navbar.scss";
function Navbar() {
  return (
    <div className="nav-wrapper">
      <div className="nav-inner">
        <div className="nav-logo">
          <h2>RAG</h2>
        </div>
        <div className="nav-menu">
          <div className="nav-search-wrapper">
            <span>
              <AiOutlineSearch className="nav-search-icon" size="20px" />
            </span>
            <input type="text" placeholder="Search RAG"></input>
          </div>

          <div className="nav-profile-wrapper"></div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
