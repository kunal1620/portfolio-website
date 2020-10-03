import React from "react";
import styled from "styled-components";

import PageContainer from "../components/reusable/PageContainer";

const HomePage = (props) => {
  return (
    <PageContainer
      flexDirection="column"
      alignItems="flexStart"
      justifyContent="flexStart"
    >
      <Greeting>Hello!</Greeting>

      <Introduction>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu
      </Introduction>
    </PageContainer>
  );
};

const Greeting = styled.span`
  margin-left: 90px;
  font-weight: 500;
  font-size: 46px;
  margin-bottom: 15px;
  margin-top: 100px;
`;

const Introduction = styled.p`
  width: 80%;
  margin-left: 90px;
  margin-right: 20px;
  font-size: 20px;
  font-weight: 500;
  text-align: justify;
`;

export default HomePage;
