import styled from "styled-components";

export default styled.div`
  display: flex;
  flex: 1;
  flex-direction: "row";
  justify-content: center;
  align-items: center;
  height: ${(props) => props.height || ""};
`;
