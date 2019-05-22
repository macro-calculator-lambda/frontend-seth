import React from "react";
import { NavLink } from "react-router-dom";

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

const Navigation = () => {
  return (
    <NavBar>
      <NavContainer>
        <NavItem>
          <NavElement to="/">Home</NavElement>
        </NavItem>
        <NavItem>
          <NavElement to="/login">Login</NavElement>
        </NavItem>
        <NavItem>
          <NavElement to="/sign-up">Sign Up</NavElement>
        </NavItem>
        <NavItem>
          <NavElement to="/meal-page">Meal Breakdown</NavElement>
        </NavItem>
        <NavItem>
          <NavElement to="/update-user">Update Weight/Macro</NavElement>
        </NavItem>
      </NavContainer>
    </NavBar>
  );
};

export default Navigation;
