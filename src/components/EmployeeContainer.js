import React, { Component } from "react";

import API from "../utils/API.js";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Header from "./Header";
import SearchForm from "./SearchForm";
import EmployeeTable from "./EmployeeTable";

class EmployeeContainer extends Component {
  state = {
    results: [],
    empSort: [],
    search: "",
    sorted: false,
  };

  componentDidMount() {
    API.search()
      .then((res) => this.setState({ results: res.data.results }))
      .catch((err) => console.log(err));
  }
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

  startSort = (event) => {
    this.setState({ search: event.target.value }, () => {
      this.sortEmp();
      this.setState({ sorted: true });
    });
  };

  render() {
    console.log(this.state.results);

    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Header />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <SearchForm />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <EmployeeTable employees={this.state.results} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default EmployeeContainer;
