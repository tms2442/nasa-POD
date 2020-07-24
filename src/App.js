import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/ui/Header";
import PictureGrid from "./components/images/PictureGrid";
import "./App.css";
import Search from "./components/ui/Search";

function App() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://api.nasa.gov/planetary/apod?api_key=${process.env.REACT_APP_API_KEY}&date=${query}`
      );

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };

    fetchItems();
  }, [query]);
  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <PictureGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
