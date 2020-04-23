import React, { Component } from "react";
import EmployeeDetails from "./EmployeeDetails.js";
import Search from "./Search.js";

class EmployeeContainer extends Component {
  state = {
    employees: [],
    empSort: [],
    search: "",
    sorted: false,
  };

  // check that the component rendered at least once, and pull in our data
  // wait for the information to come back
  componentDidMount = () => {
    fetch(
      `https://randomuser.me/api/?results=25&nat=us&inc=name,email,phone,cell,id,picture,`
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({ employees: json.results });
      });
  };

  // sort through employees based on search term
  // check if there is a match and set that to empSort for rendering
  sortEmp = () => {
    let { employees, search } = this.state;
    let empSort = employees.filter((sorted) => {
      return (
        sorted.name.first.toLowerCase().includes(search.toLowerCase()) ||
        sorted.name.last.toLowerCase().includes(search.toLowerCase()) ||
        sorted.email.toLowerCase().includes(search.toLowerCase())
      );
    });
    this.setState({ empSort });
  };

  // grab search term, activate sorted
  startSort = (event) => {
    this.setState({ search: event.target.value }, () => {
      this.sortEmp();
      this.setState({ sorted: true });
    });
  };

  render = () => {
    return (
      <div>
        <div className="jumbotron">
          <h2 className="display-4">Employee Directory</h2>
          <p>
            {" "}
            Search below by name or email to pull up who you are looking for. Or
            you can click on the header to sort.
          </p>
          <Search name="search" startSort={this.startSort} label="Search" />
        </div>

        <div className="container">
          <table className="table">
            <thead className="thead">
              <tr>
                <th>Image </th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Cell </th>
              </tr>
            </thead>
            <tbody>
              {/* if it's not sorted, map accordingly */}
              {!this.state.sorted
                ? this.state.employees.map((employee) => (
                    <EmployeeDetails
                      key={employee.id.value}
                      firstName={employee.name.first}
                      lastName={employee.name.last}
                      phone={employee.phone}
                      cell={employee.cell}
                      email={employee.email}
                      icon={employee.picture.medium}
                    />
                  ))
                : // otherwise map the sorted employees
                  this.state.empSort.map((employee) => (
                    <EmployeeDetails
                      key={employee.id.value}
                      firstName={employee.name.first}
                      lastName={employee.name.last}
                      phone={employee.phone}
                      email={employee.email}
                      icon={employee.picture.medium}
                    />
                  ))}
              ;
            </tbody>
          </table>
        </div>
      </div>
    );
  };
}

export default EmployeeContainer;
