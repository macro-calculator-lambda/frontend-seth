import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import styled, { createGlobalStyle } from "styled-components";

import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import MealPage from "./components/MealPage";
import UpdateUser from "./components/UpdateUser";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    font-size: 62.5%;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navigation />
      <PrivateRoute exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/sign-up" component={Register} />
      <PrivateRoute exact path="/meal-page" component={MealPage} />
      <PrivateRoute exact path="/update-user" component={UpdateUser} />
    </Router>
  );
}

export default App;
