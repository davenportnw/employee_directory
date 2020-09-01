import React, {Component} from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import SearchBar from "./components/SerachBar";
import employees from "./components/employees";
import './App.css';

class App extends Component {
  // Setting this.state.employees to the employee json array.
  state = {
    employees,
    search: null
  };
  // constructor() {
  //   super();

  //   this.state = {
  //     search:null
  //   };
  // }

  //Handling Search Bar input
  handleInput = (event) => {
    let keyword = event.target.value;
    this.setState({ search: keyword});
  }

  render() {
    //Filter Results
    const filterSearch = employees.filter((data) => {
      if(this.state.search === null)
        return data
      else if(data.name.toLowerCase().includes(this.state.search.toLowerCase())){
        return data
      }
    })

  return (
    <div>
    <Wrapper>
    <SearchBar handleInput={this.handleInput}/>
    {filterSearch.map((data) => (
        <EmployeeCard
          id={data.id}
          key={data.id}
          name={data.name}
          occupation={data.occupation}
          email={data.email}
        />
      ))}
    </Wrapper>
  </div>
  )
}
}


export default App;
