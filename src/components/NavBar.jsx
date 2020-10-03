import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

import Colors from "../constants/Colors";

const NavBar = (props) => {
  return (
    <NavBarContainer>
      <PageLink to="/" exact={true}>
        ABOUT ME
      </PageLink>
      <PageLink to="/portfolio">PORTFOLIO</PageLink>
      <PageLink to="/work-experience">WORK EXPERIENCE</PageLink>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  position: sticky;
  top: 0;
  padding: 10px 20px;
  display: flex;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  background-color: ${Colors.primaryLight};
  color: ${Colors.primaryDark};
`;

const PageLink = styled(NavLink)`
  padding: 10px;
  margin-left: 70px;
  text-decoration: none;
  text-align: center;
  color: ${Colors.primaryDark};
  border-bottom: 2px solid transparent;
  outline: none;
  font-family: Poppins;
  font-size: 1em;
  font-weight: 500;

  &.active {
    border-bottom: 2px solid ${Colors.primaryDark};
  }
`;

export default NavBar;
