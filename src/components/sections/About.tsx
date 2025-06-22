import React from "react";

import styled from "styled-components";
import useScreenSizeStatus from "../../hooks/useScreenSizeStatus";
import Column from "../common/Column";
import { getAboutLinks, getAboutText } from "../../data";
import { Typography } from "@mui/material";
import { StyledFilledButton } from "../common/Button";
import Row from "../common/Row";

const AboutContainer = styled.div`
  margin: 48px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 48px 0;
  text-align: center;
  width: 100%;
  background-color: #d4d9da;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  div {
    padding: 12px;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: "poppins", sans-serif;
    font-weight: 600;
    color: #2c3e50;
  }

  h2,
  h4 {
    font-weight: 400;
  }

  p {
    color: #2c3e50;
  }
`;

const GradientText = styled(Typography)`
  background: linear-gradient(319deg, #663dff 0%, #aa00ff 37%, #cc4499 100%);
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
  flex-wrap: wrap;
  margin-top: 24px;
`;

const LinkButton = styled(StyledFilledButton)`
  width: 140px;
  background-color: #2c3e50;

  div {
    padding: 4px;
    jsutify-content: space-evenly;
  }
`;

function About() {
  const { isMobile } = useScreenSizeStatus();
  const aboutLinks = getAboutLinks();

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
          <GradientText variant={titleVariant} fontFamily="inherit">
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
      </Column>
      <StyledButtons>
        {aboutLinks.map((link) => (
          <LinkButton
            key={link.name}
            onClick={() => openInNewTab(link.link)}
          >
            <Row justifyContent="space-between" gap="16px" alignItems="center">
              <a href={link.link} target="_blank" rel="noreferrer">
                {link.name}
              </a>
              {link.logo}
            </Row>
          </LinkButton>
        ))}
      </StyledButtons>
    </AboutContainer>
  );
}

export default About;
