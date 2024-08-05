import React from "react";

import styled from "styled-components";
import useScreenSizeStatus from "../../hooks/useScreenSizeStatus";
import Column from "../common/Column";
import { getAboutLinks, getAboutText } from "../../data";
import { Button, Typography } from "@mui/material";
import Row from "../common/Row";

const AboutContainer = styled.div`
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 12px;

  div {
    padding: 12px;
  }

  h1,
  h3,
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

const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 24px;
`;

function About() {
  const { isDesktop, isMobile } = useScreenSizeStatus();
  const aboutText = getAboutText();
  const aboutLinks = getAboutLinks();

  const FlexContainer = isDesktop ? Row : Column;
  const titleVariant = isMobile ? "h3" : "h1";

  const openInNewTab = (link: string) => {
    window.open(link, "_blank", "noreferrer");
  };

  return (
    <AboutContainer>
      <FlexContainer gap="36px" alignItems="center">
        <Column>
          <Typography
            variant={titleVariant}
            component={titleVariant}
            fontFamily="inherit"
          >
            Christian Florea
          </Typography>{" "}
          <Typography variant="h4" component="h4" fontFamily="inherit">
            Software Engineer
          </Typography>
        </Column>

        <StyledText variant="body1">{aboutText}</StyledText>
      </FlexContainer>
      <StyledButtons>
        {aboutLinks.map((link) => (
          <Button
            key={link.name}
            variant="contained"
            color="info"
            startIcon={link.logo}
            onClick={() => openInNewTab(link.link)}
          >
            {link.name}
          </Button>
        ))}
      </StyledButtons>
    </AboutContainer>
  );
}

export default About;
