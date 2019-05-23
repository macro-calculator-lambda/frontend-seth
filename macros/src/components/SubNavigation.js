import React from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { NavLink, withRouter } from "react-router-dom";

import { logOut } from "../actions";
import { Button } from "../styles";

const SubNavContainer = styled.div`
  background: #8a42a9;
  padding: 1.5rem 0;
  display: flex;
  justify-content: center;
`;

const SubNav = styled.ul`
  margin: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 590px;
  max-width: 100%;
`;

const SubNavItem = styled.li`
  display: inline-block;
  margin: 0 1.5rem;
  text-align: center;
`;

const activeClassName = "nav-item-active";

const SubNavElement = styled(NavLink).attrs({
  activeClassName
})`
  text-decoration: none;
  color: #fff;
  font-weight: bold;

  &.${activeClassName} {
    border-bottom: 2px solid #fff;
  }

  @media (max-width: 450px) {
    font-size: 1.3rem;
  }
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
          <SubNavElement to="/meal-page">Macros per Meal</SubNavElement>
        </SubNavItem>
        <SubNavItem>
          <SubNavElement to="/update-user">Update Goals</SubNavElement>
        </SubNavItem>
        <SubNavItem>
          <Button white onClick={event => handleClick(event, props)}>
            Logout
          </Button>
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
