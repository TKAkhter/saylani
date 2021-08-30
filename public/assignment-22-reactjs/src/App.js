import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div>
        Hello <strong>Talha!</strong>
      </div>
      <ul>
        <li>
          <h1>heading</h1>
        </li>
        <li>
          <p>paragraph</p>
        </li>
        <ol>
          <li> 5 + 10 = {5 + 10}</li>
        </ol>
      </ul>
    </div>
  );
};

export default App;
