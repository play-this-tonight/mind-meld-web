import React from "react";
import "./App.css";
import { Pane, Text } from "evergreen-ui";

const App = () => {
  return (
    <div className="App">
      <Pane height={120} alignItems="center" justifyContent="center">
        <Text>Header</Text>
      </Pane>
      <div>Prompt</div>
      <div>Clue</div>
      <div>Submit</div>
    </div>
  );
};

export default App;
