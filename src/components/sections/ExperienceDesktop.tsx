import React from "react";

import Typography from "@mui/material/Typography";
import { getExperience } from "../../data";
import Column from "../common/Column";
import { styled } from "styled-components";
import Row from "../common/Row";
import { StyledButton } from "../common/Button";
import useDivWidth from "../../hooks/useDivWidth";
import useScreenSizeStatus from "../../hooks/useScreenSizeStatus";

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 10px;
  color: #000;
  z-index: 1;

  & h4 {
    font-family: "Titillium Web", sans-serif;
    font-weight: 600;
    color: #000000;
  }

  li {
    line-height: 2;
  }
`;

const StyledTitle = styled(Typography)`
  && {
    font-family: "poppins", sans-serif;
    font-size: 48px;
    font-weight: 600;
    color: #3d52a0;
    margin-bottom: 16px;
  }
`;

const ExperienceBanner = styled.div<{ background: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 200px;
  background: ${(props) => props.background};
  padding: 24px;
  gap: 16px;
`;

const Logo = styled.img`
  width: 150px;
`;

const Experience = styled.div<{ isResponsive: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.isResponsive ? "column" : "row")};
  gap: ${(props) => (props.isResponsive ? "24px" : null)};
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 16px 48px;
`;

const StyledImg = styled.img`
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.03);
  }
`;

const LinkButton = styled(StyledButton)`
  margin-top: 16px;
`;

const Clickable = styled.div`
  cursor: pointer;
`;

const ExperienceDesktop = () => {
  const experience = getExperience();
  const { isResponsive } = useScreenSizeStatus();
  const [ref, width] = useDivWidth();
  const imgWidth = width ? width / 2 - 46 : 400;

  const openInNewTab = (link: string) => {
    window.open(link, "_blank", "noreferrer");
  };

  return (
    <Column alignItems="center" justifyContent="center" width="100%" gap="12px">
      <StyledTitle variant="h3">My Experience</StyledTitle>

      <ExperienceContainer>
        {experience.map((exp) => (
          <>
            <ExperienceBanner background={exp.color}>
              <Clickable onClick={() => openInNewTab(exp.companyLink)}>
                <Logo src={exp.icon.src} alt={exp.icon.alt} />
              </Clickable>
              <Column gap="4px" alignItems="center">
                <Typography variant="h6">{exp.role}</Typography>
                <Typography variant="body1">{exp.date}</Typography>
              </Column>
            </ExperienceBanner>
            {exp.description.map((desc, i) => (
              <Experience ref={ref} isResponsive={isResponsive}>
                {i % 2 === 0 && !isResponsive && (
                  <StyledImg src={desc.img} alt={desc.title} width={imgWidth} />
                )}
                <Column alignItems="center" justifyContent="center">
                  <Typography variant="h4" textAlign="center" gutterBottom>
                    {desc.title}
                  </Typography>
                  {isResponsive && (
                    <StyledImg
                      src={desc.img}
                      alt={desc.title}
                      width={imgWidth}
                    />
                  )}
                  {desc.link && (
                    <Row justifyContent="center" width="100%">
                      <LinkButton>
                        <a
                          href={desc.link.link}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {desc.link.text}
                        </a>
                      </LinkButton>
                    </Row>
                  )}
                  <ul>
                    {desc.text.map((text) => (
                      <li>{text}</li>
                    ))}
                  </ul>
                </Column>
                {i % 2 === 1 && !isResponsive && (
                  <StyledImg src={desc.img} alt={desc.title} width={imgWidth} />
                )}
              </Experience>
            ))}
          </>
        ))}
      </ExperienceContainer>
    </Column>
  );
};

export default ExperienceDesktop;
