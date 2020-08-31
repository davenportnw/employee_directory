import React, {Component} from "react";
import Wrapper from "../Wrapper";
import EmployeeCard from "../EmployeeCard";
import { MDBCol, MDBIcon } from "mdbreact";

import employees from "employee_directory/src/employees.json";

const SearchBar = (props) => {
    return (
      <MDBCol md="6">
        <form className="form-inline mt-4 mb-4">
          <MDBIcon icon="search" />
          <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search" aria-label="Search" onChange={props.handleInput}/>
        </form>
      </MDBCol>
    );
  }
  

export default SearchBar;