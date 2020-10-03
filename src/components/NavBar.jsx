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
      <ButtonContainer>
        <ResumeButton href={""} target={"_blank"}>
          RESUME
        </ResumeButton>
      </ButtonContainer>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  position: sticky;
  top: 0;
  padding: 10px 20px;
  display: flex;
  flex: 1
  justify-content: flex-start;
  align-items: center;
  background-color: ${Colors.primaryLight};
  font-family: Poppins;
  font-size: 1em;
  font-weight: 500;
`;

// Resume download button container on the Navbar
const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  padding-right: 80px;
`;

const ResumeButton = styled.a`
  text-align: center;
  text-decoration: none;
  padding: 10px 40px;
  border-radius: 4px;
  background-color: ${Colors.primaryDark};
  color: ${Colors.primaryLight};
`;

const PageLink = styled(NavLink)`
  padding: 10px;
  margin-left: 70px;
  text-decoration: none;
  text-align: center;
  color: ${Colors.primaryDark};
  border-bottom: 2px solid transparent;
  outline: none;
  transition: border 300ms;

  &.active {
    border-bottom: 2px solid ${Colors.primaryDark};
  }
`;

export default NavBar;
