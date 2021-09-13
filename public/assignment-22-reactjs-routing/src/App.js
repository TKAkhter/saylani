import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Blogs from "./components/Blogs";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/About">About</Link>
                </li>
                <li>
                  <Link to="/ContactUs">ContactUs</Link>
                </li>
                <li>
                  <Link to="/Blogs">Blogs</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/About">
                <About />
              </Route>
              <Route path="/ContactUs">
                <ContactUs />
              </Route>
              <Route path="/Blogs">
                <Blogs />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </header>
    </div>
  );
}

export default App;
