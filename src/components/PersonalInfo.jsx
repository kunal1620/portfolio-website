import React from "react";
import styled from "styled-components";
import { useToasts } from "react-toast-notifications";

import Container from "./reusable/Container";
import Colors from "../constants/Colors";
import { MdMailOutline } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const PersonalInfo = (props) => {
  const { addToast } = useToasts();
  const iconSize = "28px";

  /*** NOT USED
  
  const handleCopyToClipboard = (event) => {
    const element = event.target;
    const range = document.createRange();

    range.selectNode(element);
    window.getSelection().addRange(range);
    let message;

    try {
      const result = document.execCommand("copy");
      window.getSelection().removeRange(range);
      message = result ? "Copied to clipboard" : "Couldn't copy to clipboard";
    } catch (err) {
      message = "Error occured while copying the phone number to clipboard";
      console.log(err);
    }

    addToast(message, {});
  };

  ***/

  return (
    <PersonalInfoContainer>
      <LinkContainer href={"mailto:kunal1620@gmail.com"} target={"_blank"}>
        <MdMailOutline size={iconSize} />
        <span>Email</span>
      </LinkContainer>

      <LinkContainer
        href={"https://linkedin.com/in/kunal-pawar"}
        target={"_blank"}
      >
        <FaLinkedin size={iconSize} />
        <span>Linkedin</span>
      </LinkContainer>

      <LinkContainer href={"https://github.com/kunal1620"} target={"_blank"}>
        <FaGithub size={iconSize} />
        <span>Github</span>
      </LinkContainer>
    </PersonalInfoContainer>
  );
};

const PersonalInfoContainer = styled(Container)`
  flex-direction: column;
  align-items: center;
`;

const LinkContainer = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-family: Poppins;
  text-decoration: none;
  outline: none;
  color: ${Colors.highlight};

  span {
    font-size: 14px;
    font-weight: 500;
    margin: 5px auto;
    visibility: hidden;
    opacity: 0;
    transition: opacity 500ms;
  }

  &:hover span {
    opacity: 1;
    visibility: visible;
  }
`;

export default PersonalInfo;
