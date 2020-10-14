import React from "react";
import styled from "styled-components";

import Container from "./reusable/Container";
import Colors from "../constants/Colors";

const CustomToast = ({ appearance, children }) => {
  return <ToastBody>{children}</ToastBody>;
};

const ToastBody = styled(Container)`
  background-color: ${Colors.primaryDark};
  color: ${Colors.secondaryLight};
  white-space: nowrap;
  margin-left: 250px; // To get the toast in the center of the PageSection
  padding: 15px 30px;
  font-weight: 500;
  font-size: 18px;
  border-radius: 4px;
  box-shadow: 2px 2px 5px #9b9ea3;
`;

export default CustomToast;
