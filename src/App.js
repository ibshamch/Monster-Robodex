
import { Component } from "react";
import Search from "./Components/SearchComponent/Search.component";
import CardList from "./Components/CardList/cardList.component";
import "./App.css"
export default class App extends Component {
  constructor() {
    console.log("Constructor");
    super();
    this.state = { monsters: [], SearchField: "" }; // object
  }
  onSearch = (e) => {
    this.setState(() => {
      return { SearchField: e.target.value };
    });
  };

  componentDidMount = () => {
    console.log("Component");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((users) => {
        this.setState(() => {
          return { monsters: users };
        });
      });
  };

  render() {
    console.log("Render");
   const { monsters, SearchField } = this.state;
    const { onSearch } = this;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(SearchField.toLowerCase())
    );

    return (
      <div className="App">
        <Search onSearch={onSearch} inputPlaceholder="Search Monsters"  className="monster-search-box" />
        <CardList monsterArray={filteredMonsters} />
      </div>
    );
  }
}
