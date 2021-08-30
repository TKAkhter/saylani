import React from "react";
import "./App.css";

const App = (props) => {
  return (
    <div className="App">
      <div>
        Hello <strong>{props.name}!</strong>
      </div>
      <ul>
        <li>
          <h1>heading</h1>
        </li>
        <li>
          <p>paragraph</p>
        </li>
      </ul>
      <ol>
        <li> 5 + 10 = {5 + 10}</li>
      </ol>
      <hr />
    </div>
  );
};

export default App;
