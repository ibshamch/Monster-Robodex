import { useEffect, useState } from "react";
import Search from "./Components/SearchComponent/Search.component";
import CardList from "./Components/CardList/cardList.component";
import "./App.css";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [SearchField, setSearchField] = useState("");
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const onSearch = (e) => {
    setSearchField(e.target.value);
  };
  console.log("Render");

  // sideeffect ..
  useEffect(() => {
    console.log("Useeffect");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((data) => data.json())
      .then((users) => {
        setMonsters(users);
      });
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(SearchField.toLowerCase())
    );
    setFilteredMonsters(newFilteredMonsters);
    console.log("effect is firing");
  }, [monsters, SearchField]);

  return (
    <div className="App">
      <Search
        onSearch={onSearch}
        inputPlaceholder="Search Monsters"
        className="monster-search-box"
      />
      <CardList monsterArray={filteredMonsters} />
    </div>
  );
};

export default App;
