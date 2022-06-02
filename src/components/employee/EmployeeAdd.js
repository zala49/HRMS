import React, { useState } from "react";
import "../employee/employee.css";

let id = 1;
function EmployeeAdd() {
  const [employee, setEmployee] = useState([]);
  const [page, setPage] = useState(1);

  // Add Employee Data
  const onSubmit = (e) => {
    let data = {};
    e.preventDefault();
    data["id"] = id++;
    let a = e.target.elements.length - 1;
    for (let i = 0; i < a; i++) {
      data[e.target[i].name] = e.target[i].value;
    }
    setEmployee((old) => [...old, data]);
    console.log("Employee Added");
  };

  // Delete Data
  const SomeDeleteRowFunction = (e, data) => {
    console.log("Delete Button Clicked");
    setEmployee((old) => old.filter((emp) => emp.id !== data.id));
    console.log("Deleted");
  };

  // Previous Page Button
  const handlePreviousClick = () => {
    console.log("Previous button clicked");
    const filtered = employee.filter(
      function (data) {
        if (this.count < 10 && data > 0) {
          this.count++;
          return true;
        }
        return false;
      },
      { count: 0 }
    );
    console.log(filtered);
    setPage(page - 1);
  };

  // Next Page Button
  const handleNextClick = () => {
    console.log("Next button clicked");
    const filtered = employee.filter(
      function (data) {
        if (this.count > 10 && data < 0) {
          this.count--;
          return true;
        }
        return false;
      },
      { count: 0 }
    );
    console.log(filtered);
    setPage(page + 1);
  };

  // First 10 Data show in First Page (pagination)
  let result = employee.filter(
    (data) => data.id > (page - 1) * 10 && data.id <= page * 10
  );
  console.log(result);
  return (
    // Employee Add Form
    <div className="employee-maindiv">
      <form onSubmit={onSubmit} className="employee-form">
        <div className=" mx-auto p-5">
          <h4 className="header-center h4">Employee Add</h4>
          <div className="col-auto">
            Name
            <input type="text" name="name" className="form-control" required />
          </div>
          <div className="col-auto">
            Email
            <input
              type="email"
              name="email"
              className="form-control"
              required
            />
          </div>
          <div className="col-auto">
            Position
            <input
              type="text"
              name="position"
              className="form-control"
              required
            />
          </div>
          <div className="col-auto">
            Mobile
            <input
              type="number"
              name="mobile"
              className="form-control"
              required
            />
          </div>
          <div className="col-auto">
            Address
            <textarea
              type="text"
              name="address"
              className="form-control"
              required
            />
          </div>
          <button className="btn btn-warning  my-3">Add Employee</button>
        </div>
      </form>

      {/* Employee Details Show */}
      <div>
        <div className="my-5 padding-table-maindiv">
          <div className="mx-auto p-5">
            <h4 className="header-center h4 ">Employee Details</h4>
            {page}
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Mobile</th>
                  <th scope="col">Position</th>
                  <th scope="col">Address</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {result.map((data) => (
                  <tr>
                    <th scope="row">{data.id}</th>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.mobile}</td>
                    <td>{data.position}</td>
                    <td>{data.address}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => SomeDeleteRowFunction(e, data)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="container d-flex justify-content-between">
        {/* // Buttons Next - Previous */}
        <button
          disabled={page <= 1}
          type="button"
          onClick={handlePreviousClick}
          className="btn btn-dark mx-2"
        >
          &larr; Pervious
        </button>
        <button
          disabled={page >= employee.length / 10}
          type="button"
          onClick={handleNextClick}
          className="btn btn-dark mx-1"
        >
          Next &rarr;
        </button>
      </div>
    </div>
  );
}
export default EmployeeAdd;
