import React from "react";
import { NavLink } from "react-router-dom";
import "../sidebar/sidebar.css";

// Sidebar
function Sidebar() {
  const EmployeePage = () => {
    console.log("Employee Page");
  };
  return (
    <div className="d-flex justify-content-between ">
      <ul className="ul-margin-padding">
        <a href="/" className="nav-link h3 text-black my-2">
          Fluxbyte Technologies
        </a>
        <NavLink to="/employee" className="nav-link">
          <span onClick={EmployeePage}>Employee</span>
        </NavLink>
        <li href="/" className="nav-link">
          <span>About</span>
        </li>
        <li href="/" className="nav-link">
          <span>Contact</span>
        </li>
        <a href="/" className="nav-link">
          <span>Logout</span>
        </a>
      </ul>
    </div>
  );
}

export default Sidebar;
