import React from "react";
import styled from "styled-components";

import Container from "./reusable/Container";

import Colors from "../constants/Colors";
import Photo from "../res/images/Profile Pic 1.jpg";

const ProfilePic = (props) => {
  return (
    <ProfilePicContainer>
      {/* <Img src={Photo} width={200} /> */}
      {/* <NameTag>KUNAL PAWAR</NameTag> */}
    </ProfilePicContainer>
  );
};

const ProfilePicContainer = styled(Container)`
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const Img = styled.img`
  border: solid 5px #495f69;
  border-radius: 50%;
`;

const NameTag = styled.h1`
  font-weight: 500;
  font-size: 2em;
  color: ${Colors.secondaryLight};
`;

export default ProfilePic;
