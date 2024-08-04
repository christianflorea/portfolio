import React from "react";

import styled from "styled-components";
import useScreenSizeStatus from "../../hooks/useScreenSizeStatus";
import Column from "../common/Column";
import { getAboutText } from "../../data";
import { Typography } from "@mui/material";

const AboutContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  display: flex;
  justify-content: center;
  padding: 48px 12px;

  div {
    padding: 12px;
`;

const StyledText = styled(Typography)`
  white-space: pre-line;
`;

function About() {
  const { isDesktop, isMobile } = useScreenSizeStatus();
  const aboutText = getAboutText();

  return (
    <AboutContainer>
      <Column
        width={isDesktop ? "700px" : "90%"}
        alignItems={!isMobile ? "center" : "flex-start"}
      >
        <Typography variant="h4" component="h2">
          About Me
        </Typography>
        <StyledText variant="body2">{aboutText}</StyledText>
      </Column>
    </AboutContainer>
  );
}

export default About;
