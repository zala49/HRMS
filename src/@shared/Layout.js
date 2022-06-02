import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/sidebar/Sidebar";
import "./layout.css";

// Layout
function Layout() {
  return (
    <div className="layout">
      <Sidebar />
      <Outlet />
    </div>
  );
}

export default Layout;
