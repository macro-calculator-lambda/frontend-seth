import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import { log } from "util";
import { connect } from "react-redux";
import { logOut } from "../actions";

import styled from "styled-components";

const NavBar = styled.nav`
  background: #333;
`;

const NavContainer = styled.ul`
  margin: 0;
  list-style: none;
  padding: 1.4rem 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const NavItem = styled.li`
  display: inline-block;
  margin: 0 1.3rem;
`;

const NavElement = styled(NavLink)`
  font-size: 1.5rem;
  color: #f9f9f9;
  font-weight: bold;
  text-decoration: none;
`;

const handleClick = (event, props) => {
  event.preventDefault();
  localStorage.clear();
  props.history.push("/sign-up");
};

const Navigation = props => {
  return (
    <NavBar>
      <NavContainer>
        <NavItem>
          <NavElement to="/">Home</NavElement>
        </NavItem>
        <NavItem>
          <NavElement to="/meal-page">Meal Breakdown</NavElement>
        </NavItem>
        <NavItem>
          <NavElement to="/update-user">Update Weight/Macro</NavElement>
        </NavItem>
        <NavItem>
          <NavElement to="/login">Login</NavElement>
        </NavItem>
        <NavItem>
          <NavElement to="/sign-up">Sign Up</NavElement>
        </NavItem>
        <NavItem>
          <button onClick={event => handleClick(event, props)}>Logout</button>
        </NavItem>
      </NavContainer>
    </NavBar>
  );
};

const mapStateToProps = state => {
  return {
    loggedIn: state.loggedIn
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    { logOut }
  )(Navigation)
);
