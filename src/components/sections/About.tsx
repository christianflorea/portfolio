import React from "react";

import styled from "styled-components";
import useScreenSizeStatus from "../../hooks/useScreenSizeStatus";
import Column from "../common/Column";
import { getAboutText } from "../../data";
import { Typography } from "@mui/material";
import Row from "../common/Row";

const AboutContainer = styled.div`
  max-width: 1600px;
  display: flex;
  justify-content: center;
  padding: 48px 12px;

  div {
    padding: 12px;
  }

  h1,
  h4 {
    font-family: "poppins", sans-serif;
    font-weight: 600;
    color: #3d52a0;
  }

  h4 {
    color: #7091e6;
  }
`;

const StyledText = styled(Typography)`
  white-space: pre-line;
`;

function About() {
  const { isDesktop, isMobile } = useScreenSizeStatus();
  const aboutText = getAboutText();

  const FlexContainer = isDesktop ? Row : Column;

  return (
    <AboutContainer>
      <FlexContainer gap="36px" alignItems="center">
        <Column>
          <Typography variant="h1" component="h1" fontFamily="inherit">
            Christian Florea
          </Typography>{" "}
          <Typography variant="h4" component="h4" fontFamily="inherit">
            Software Engineer
          </Typography>
        </Column>

        <StyledText variant="body1">{aboutText}</StyledText>
      </FlexContainer>
    </AboutContainer>
  );
}

export default About;
