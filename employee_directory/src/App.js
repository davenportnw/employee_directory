import React, {Component} from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import SearchBar from "./components/SerachBar";
import employees from "./employees.json";
import './App.css';

class App extends Component {
  // Setting this.state.employees to the employee json array.
  state = {
    employees,
    searchEmployee = ""
  };
  //Handling Search Bar input
  handleInput = (employees) => {
    this.setState({ searchEmployee: employees.target.value});
  }
  //Filter Search
  render() {
    let filteredSearch = this.state.employees.filter((employee) =>{
      return employee.name.toLowerCase().includes(this.state.searchEmployee)
    })
  
    return (
      <div>
        <SearchBar handleInput={this.handleInput}/>
        <Wrapper>
          {this.state.employees.map(employee => (
            <EmployeeCard
              id={employee.id}
              key={employee.id}
              name={employee.name}
              image={employee.image}
              occupation={employee.occupation}
              email={employee.email}
            />
          ))}
        </Wrapper>
      </div>
    );
  }
}

export default App;
