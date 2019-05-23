import React from "react";
import { NavLink } from "react-router-dom";

import styled from "styled-components";

const NavBar = styled.nav`
  background: #333;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const NavContainer = styled.ul`
  margin: 0;
  list-style: none;
  padding: 1.4rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 350px;
  max-width: 100%;
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
          <NavElement to="/">Profile</NavElement>
        </NavItem>
        <NavItem>
          <NavElement to="/login">Login</NavElement>
        </NavItem>
        <NavItem>
          <NavElement to="/sign-up">Sign Up</NavElement>
        </NavItem>
      </NavContainer>
    </NavBar>
  );
};

export default Navigation;
