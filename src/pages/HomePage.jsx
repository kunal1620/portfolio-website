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
      <Greeting>Hello, I am Kunal Pawar</Greeting>

      <Introduction>
        I am a software developer based in Melbourne. I love developing awesome
        web applications. I love programming and experimenting with new things.
        This are some of the technologies that I have mainly worked with: <br />
        <b>Java, Javascript (ES6), React, jQuery, Node.js</b>
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
  width: 65%;
  margin-left: 90px;
  margin-right: 20px;
  font-size: 20px;
  font-weight: 500;
  text-align: justify;
`;

export default HomePage;
