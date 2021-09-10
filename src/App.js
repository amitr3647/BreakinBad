import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Component/Header/Header";
import CharacterGrid from "./Component/CharacterGrid/CharacterGrid";
import Search from "./Search/Search";
import Spinner from "./Spinner";
function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");
  const getQuery = (q) => {
    setQuery(q);
  };
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={getQuery} />
      {isLoading && <Spinner />}
      <CharacterGrid items={items} setItems={setItems} />
    </div>
  );
}

export default App;
