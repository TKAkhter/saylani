import React, { useState } from "react";
import About from "./About";
import ContactUs from "./ContactUs";
import Blogs from "./Blogs";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Form, Container, Navbar, Nav } from "react-bootstrap";

import MuiAppBar from "@mui/material/AppBar";
import MuiBox from "@mui/material/Box";
import MuiToolbar from "@mui/material/Toolbar";
import MuiTypography from "@mui/material/Typography";
import MuiButton from "@mui/material/Button";
import MuiIconButton from "@mui/material/IconButton";
import MuiMenuIcon from "@mui/icons-material/Menu";
import MuiSwitch from "@mui/material/Switch";
import { blueGrey } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";

const colorPrimary = blueGrey[900]; // #263238

const useStyles = makeStyles({
  root: {
    background: colorPrimary,
  },
});

const TopNavbar = () => {
  const classes = useStyles();

  const [currentUI, setCurrentUI] = useState("Bootstrap");

  const toggleUI = () => {
    currentUI === "Bootstrap"
      ? setCurrentUI("Material")
      : setCurrentUI("Bootstrap");
  };

  return (
    <header className="App-header">
      <Router>
        {currentUI === "Bootstrap" ? (
          <Navbar bg="dark" variant="dark">
            <Container>
              <Link className="navbar-brand" to="/">
                Navbar
              </Link>
              <Nav className="me-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/About">
                  About
                </Link>

                <Link className="nav-link" to="/ContactUs">
                  ContactUs
                </Link>
                <Link className="nav-link" to="/Blogs">
                  Blogs
                </Link>
              </Nav>
              <div className="d-flex justify-content-between align-items-center">
                <span className="text-white p-3">Apply Bootstrap UI</span>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  onClick={toggleUI}
                />
                <span className="text-white p-3">Apply Material UI</span>
              </div>
            </Container>
          </Navbar>
        ) : (
          <MuiBox sx={{ flexGrow: 1 }}>
            <MuiAppBar position="static">
              <MuiToolbar className={classes.root}>
                <MuiIconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                  <MuiMenuIcon />
                </MuiIconButton>
                <MuiTypography
                  variant="h6"
                  component="div"
                  sx={{ flexGrow: 1 }}
                >
                  Navbar
                </MuiTypography>
                <div className="d-flex justify-content-between align-items-center">
                  <span className="text-white p-3">Apply Bootstrap UI</span>
                  <MuiSwitch defaultChecked onClick={toggleUI} />
                  <span className="text-white p-3">Apply Material UI</span>
                </div>
                <MuiButton color="inherit" component={Link} to={"/"}>
                  Home
                </MuiButton>
                <MuiButton color="inherit" component={Link} to={"/About"}>
                  About
                </MuiButton>
                <MuiButton color="inherit" component={Link} to={"/ContactUs"}>
                  ContactUs
                </MuiButton>
                <MuiButton color="inherit" component={Link} to={"/Blogs"}>
                  Blogs
                </MuiButton>
              </MuiToolbar>
            </MuiAppBar>
          </MuiBox>
        )}
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
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </header>
  );
};

export default TopNavbar;
