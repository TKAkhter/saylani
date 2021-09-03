import "./App.css";
import '@fontsource/roboto';

import Cards from "../Cards/Cards";
import SignIn from '../SignIn/SignIn'

const App = () => {
  return (
    <div className="App">
      <Cards />
      <SignIn />
    </div>
  );
};

export default App;
