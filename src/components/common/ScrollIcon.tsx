import React from "react";
import styled, { keyframes } from "styled-components";
import Row from "./Row";

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const FadeInImage = styled.img`
  height: 80px;
  animation: ${fadeIn} 2s ease-in;
`;

const ScrollIcon = () => {
  return (
    <Row width="100%" justifyContent="center">
      <FadeInImage src={process.env.PUBLIC_URL + "/scroll.png"} alt="scroll" />
    </Row>
  );
};

export default ScrollIcon;
