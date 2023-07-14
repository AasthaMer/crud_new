import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Emps = ({ getEmp, emps }) => {


  useEffect(() => {
    getEmp();
  }, []);

  const handleDelete = (id) => {
    console.log("handleDelete", id);
    axios
      .delete(`http://localhost:8080/employee/deleteEmp/${id}`)
      .then((res) => {
        console.log(res);
        getEmp();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='container'>
      <div className="tableContainer">
        <Link to="/emp/create" className="btn btn-add">
          Add +
        </Link>
        <table className="tableContainer">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {emps.map((emp) => {
              return (
                <tr>
                  <td>{emp.name}</td>
                  <td>{emp.email}</td>
                  <td>{emp.age}</td>
                  <td>
                    <Link
                      to={`/emp/update/${emp._id}`}
                      className="btn btn-edit"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-delete"
                      onClick={(e) => handleDelete(emp._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Emps;
