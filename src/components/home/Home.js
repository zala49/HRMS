import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import EmployeeAdd from "../employee/EmployeeAdd";
import NoPage from "../nopage/NoPage";
import Layout from "../../@shared/Layout";
import Login from "../login/Login";

// Home
function Home() {
  return (
    // Routing
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="employee" element={<EmployeeAdd />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<NoPage />}></Route>
        </Routes>
      </Router>
    </>
  );
}
export default Home;
