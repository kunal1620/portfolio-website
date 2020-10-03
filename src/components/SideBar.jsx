import React from "react";
import styled from "styled-components";
import Logo from "./Logo.svg";
import PersonalInfo from "./PersonalInfo";
import Container from "./reusable/Container";

import Colors from "../constants/Colors";

const SideBar = (props) => {
  const handleDownload = () => {};

  return (
    <SideBarContainer>
      {/* <LogoContainer src={Logo} width={100} /> */}
      <PersonalInfo />
    </SideBarContainer>
  );
};

const LogoContainer = styled.img``;

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
