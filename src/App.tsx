import React from "react";
import "./App.css";
import Header from "./Header";
import Prompt from "./Prompt";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Prompt />
      <div>Clue</div>
      <div>Submit</div>
    </div>
  );
};

export default App;
