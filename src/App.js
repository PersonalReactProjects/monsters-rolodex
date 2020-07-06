import React, { Component } from 'react';
import './App.css';
import CardList from "./components/card-list/CardList.component";
import Search from './components/search-box/Search-Box.component'






class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(users => this.setState({ monsters: users }))
  }
  componentDidMount = () => {
    this.fetchUsers();
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    )
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search
          placeholder="search monster"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
