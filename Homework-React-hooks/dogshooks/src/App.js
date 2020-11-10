import React, { useEffect, useState } from "react";
//import Breeds from './Breeds'
import DogList from "./DogList";
//import { list } from "./List";
import Search from "./Search";

function App() {
  const [list, setList] = useState([]);
  const [searchfield, setSearchfield] = useState("");

  const onSearchChange = (event) => {
    console.log(event);
    setSearchfield(event.target.value);
  };

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list")
      .then((response) => response.json())
      .then((list) => {
        console.log(list.message)
        setList(list.message);
      });
  }, []);

  const filteredList = list.filter((list) => {
    return list.toLowerCase().includes(searchfield.toLowerCase());
  });

  return (
    <div className=" app">
      <h1>Dog Breeds</h1>
      <Search searchChange={onSearchChange} />
      <DogList filteredList={filteredList} />
    </div>
  );
}

export default App;
