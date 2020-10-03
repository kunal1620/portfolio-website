import styled from "styled-components";

import Colors from "../../constants/Colors";

export default styled.div`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  flex: 9;
  flex-wrap: ${(props) => props.flexWrap || "wrap"};
  padding: ${(props) => props.padding || "auto"};
  justify-content: ${(props) => props.justifyContent || "center"};
  align-items: ${(props) => props.alignItems || "center"};
  overflow: ${(props) => props.overflow || "auto"};
  background-color: ${Colors.primaryLight};
  color: ${Colors.primaryDark};
  scrollbar-width: none;
`;
