import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

import { logOut } from "../actions";

const SubNavContainer = styled.div`
  background: #c3c3c3;
  padding: 1.5rem 0;
  display: flex;
  justify-content: center;
`;

const SubNav = styled.ul`
  margin: 0;
  list-style: none;
`;

const SubNavItem = styled.li`
  display: inline-block;
  margin: 0 1.5rem;
`;

const SubNavElement = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  font-weight: bold;
`;

const handleClick = (event, props) => {
  event.preventDefault();
  localStorage.clear();
  props.history.push("/login");
};

const SubNavigation = props => {
  return (
    <SubNavContainer>
      <SubNav>
        <SubNavItem>
          <SubNavElement to="/">Profile</SubNavElement>
        </SubNavItem>
        <SubNavItem>
          <SubNavElement to="/meal-page">Macros per Meal</SubNavElement>
        </SubNavItem>
        <SubNavItem>
          <SubNavElement to="/update-user">Update Goals</SubNavElement>
        </SubNavItem>
        <SubNavItem>
          <button onClick={event => handleClick(event, props)}>Logout</button>
        </SubNavItem>
      </SubNav>
    </SubNavContainer>
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
  )(SubNavigation)
);
