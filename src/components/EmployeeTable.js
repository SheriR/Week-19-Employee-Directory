import React from "react";

function EmployeeTable(props) {
  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">Image</th>
          <th scope="col">Name</th>
          <th scope="col">Office Phone</th>
          <th scope="col">Cell</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        {props.employees.map((employee) => (
          <tr key={employee.id.value}>
            <td>
              <img
                alt={employee.name.first}
                src={employee.picture.medium}
              ></img>
            </td>

            <td>
              {employee.name.first} {employee.name.last}
            </td>

            <td>{employee.phone}</td>
            <td>{employee.cell}</td>
            <td>{employee.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
