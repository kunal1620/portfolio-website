import React from "react";
import styled from "styled-components";
import PersonalInfo from "./PersonalInfo";
import Container from "./reusable/Container";

import Colors from "../constants/Colors";

const SideBar = (props) => (
  <SideBarContainer>
    <PersonalInfo />
  </SideBarContainer>
);

const SideBarContainer = styled(Container)`
  display: flex;
  max-width: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.primaryDark};
  color: ${Colors.highlight};
`;

export default SideBar;
