import React, { useEffect, useState } from "react";
//import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const APP_ID = "23a086bd";
  const APP_KEY = "5031e1c29d48a95e28341fcad47fa3c5";

  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="App">
      <form>
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
