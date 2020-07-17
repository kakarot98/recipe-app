import React from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const APP_ID = "23a086bd";
  const APP_KEY = "5031e1c29d48a95e28341fcad47fa3c5";

  const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

  return (
    <div className="App">
      <h1>Hello World</h1>
    </div>
  );
};

export default App;
