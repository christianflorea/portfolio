import React from "react";

import styled from "styled-components";
import useScreenSizeStatus from "../../hooks/useScreenSizeStatus";
import Column from "../common/Column";
import { getAboutLinks, getAboutText } from "../../data";
import { Button, Typography } from "@mui/material";
import Row from "../common/Row";

const AboutContainer = styled.div`
  max-width: 1600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 12px;
  text-align: center;

  div {
    padding: 12px;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: "poppins", sans-serif;
    font-weight: 600;
    color: #3d52a0;
  }

  h2,
  h4 {
    font-weight: 400;
  }
`;

const GradientText = styled(Typography)`
  background: linear-gradient(90deg, #E5A57E, #DE6262);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
`;

const StyledText = styled(Typography)`
  white-space: pre-line;
  font-size: 1.2rem;
  max-width: 1000px;
`;

const StyledButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 24px;
`;

const LinkButton = styled(Button)`
  width: 140px;
`;

function About() {
  const { isDesktop, isMobile } = useScreenSizeStatus();
  const aboutText = getAboutText();
  const aboutLinks = getAboutLinks();

  const FlexContainer = Column;
  const titleVariant = isMobile ? "h3" : "h1";
  const subTitleVariant = isMobile ? "h4" : "h2";

  const openInNewTab = (link: string) => {
    window.open(link, "_blank", "noreferrer");
  };

  return (
    <AboutContainer>
      <Column gap="24px" alignItems="center" justifyContent="center">
        <Column gap="24px" alignItems="center" justifyContent="center">
          <Typography
            variant={subTitleVariant}
            component={subTitleVariant}
            fontFamily="inherit"
          >
            Hey 👋
          </Typography>
          <GradientText
            variant={titleVariant}
            fontFamily="inherit"
          >
            I'm Christian Florea.
          </GradientText>
          <Typography
            variant={subTitleVariant}
            component={subTitleVariant}
            fontFamily="inherit"
          >
            A Software Engineer.
          </Typography>
        </Column>

        <StyledText variant="body1">{aboutText}</StyledText>
      </Column>
      <StyledButtons>
        {aboutLinks.map((link) => (
          <LinkButton
            key={link.name}
            variant="contained"
            color="info"
            startIcon={link.logo}
            onClick={() => openInNewTab(link.link)}
          >
            {link.name}
          </LinkButton>
        ))}
      </StyledButtons>
    </AboutContainer>
  );
}

export default About;
