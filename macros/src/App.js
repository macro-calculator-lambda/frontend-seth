import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { createGlobalStyle } from "styled-components";

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
    font-size: 62.5%;
  }

  body {
    background: #F6EBF4;
    font-family: 'Muli', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  p {
    font-size: 1.6rem;
  }

  li {
    font-size: 1.5rem;
  }
`;

const App = () => {
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
};
export default App;
