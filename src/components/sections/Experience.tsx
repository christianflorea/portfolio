import React, { useMemo, useState } from "react";

import Typography from "@mui/material/Typography";
import { getExperience } from "../../data";
import Column from "../common/Column";
import { styled } from "styled-components";
import Row from "../common/Row";
import LaunchIcon from "@mui/icons-material/Launch";
import PillSelect from "../common/PillSelect";
import ExperienceCard from "../common/ExperienceCard";
import { StyledButton } from "../common/Button";

const ExperienceContainer = styled.div<{ background?: string }>`
  display: flex;
  flex-direction: column;
  padding: 16px 12px 40px;
  gap: 24px;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 12px auto;
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
  &&& {
    font-family: "poppins", sans-serif;
    font-size: 48px;
    font-weight: 600;
    color: #2c3e50;
  }
`;

const LinkedButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Experience = () => {
  const [pillIndex, setPillIndex] = useState<number>(0);
  const experience = getExperience();

  const openInNewTab = (link: string) => {
    window.open(link, "_blank", "noreferrer");
  };

  const pillItems = experience.map((item, idx) => ({
    name: item.company,
    color: item.icon.color,
    logo: (
      <img
        src={item.icon.src}
        alt={item.icon.alt}
        width={item.icon.width}
        height={item.icon.height}
      />
    ),
    onClick: () => setPillIndex(idx),
  }));

  const currentExperience = useMemo(
    () => experience[pillIndex],
    [experience, pillIndex]
  );

  return (
    <Column alignItems="center" justifyContent="center" width="100%" gap="12px">
      <StyledTitle variant="h3">My Experience</StyledTitle>

      <PillSelect items={pillItems} currentSelection={pillIndex} />

      <ExperienceContainer background={currentExperience.icon.color}>
        <Column alignItems="center">
          <Typography variant="h4" color="inherit">
            {currentExperience.company}
          </Typography>
          <Typography variant="h5" color="inherit">
            {currentExperience.role}
          </Typography>
          <Typography variant="subtitle1" color="inherit">
            {currentExperience.date}
          </Typography>
        </Column>
        {currentExperience.extraLinks && (
          <LinkedButtonsContainer>
            {currentExperience.extraLinks.map((link) => (
              <StyledButton
                key={link.name}
                onClick={() => openInNewTab(link.link)}
              >
                <Row
                  justifyContent="space-between"
                  gap="16px"
                  alignItems="center"
                >
                  <a href={link.link} target="_blank" rel="noreferrer">
                    {link.name}
                  </a>
                  <LaunchIcon fontSize="small" />
                </Row>
              </StyledButton>
            ))}
          </LinkedButtonsContainer>
        )}
        <Column width="100%" alignItems="center">
          {currentExperience.description.map((desc) => (
            <ExperienceCard {...desc} />
          ))}
        </Column>
      </ExperienceContainer>
    </Column>
  );
};

export default Experience;
