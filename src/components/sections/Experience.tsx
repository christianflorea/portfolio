import React, { useMemo, useState } from "react";

import Typography from "@mui/material/Typography";
import { getExperience } from "../../data";
import Column from "../common/Column";
import { styled } from "styled-components";
import Row from "../common/Row";
import LaunchIcon from "@mui/icons-material/Launch";
import PillSelect from "../common/PillSelect";

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 12px 40px;
  background-color: #ddd9e5;
  gap: 24px;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 12px auto;
  border-radius: 10px;
  color: #000;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);

  & h3 {
    font-family: "poppins", sans-serif;
    font-weight: 600;
    color: #3d52a0;
  }

  li {
    line-height: 2;
  }
`;

const LinkedButtonsContainer = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StyledLinkedButtons = styled.button`
  background-color: #3d52a0;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 8px 16px;
  cursor: pointer;
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
    <ExperienceContainer>
      <Typography variant="h3" component="h3" gutterBottom color="inherit">
        Experience
      </Typography>
      <PillSelect items={pillItems} currentSelection={pillIndex} />
      <Column
        gap="8px"
        width="100%"
        justifyContent="center"
        alignItems="center"
      >
        <Column alignItems="center">
          <Typography variant="h4" color="inherit">
            {currentExperience.company}
          </Typography>
          <Typography variant="h6" color="inherit">
            {currentExperience.role}
          </Typography>
          <Typography variant="subtitle1" color="inherit">
            {currentExperience.date}
          </Typography>
        </Column>
        <Column>
          <ul>
            {currentExperience.description.map((desc, idx) => (
              <li>
                <Typography
                  key={idx}
                  variant="body1"
                  component="span"
                  gutterBottom
                  whiteSpace="break-spaces"
                >
                  {desc}
                </Typography>
              </li>
            ))}
          </ul>
        </Column>
        {currentExperience.projectLinks && (
          <LinkedButtonsContainer>
            {currentExperience.projectLinks.map((project) => (
              <StyledLinkedButtons
                key={project.name}
                onClick={() => openInNewTab(project.link)}
              >
                <Row justifyContent="space-between" gap="16px">
                  <Typography variant="body2" component="span">
                    {project.name}
                  </Typography>
                  <LaunchIcon fontSize="small" />
                </Row>
              </StyledLinkedButtons>
            ))}
          </LinkedButtonsContainer>
        )}
      </Column>
    </ExperienceContainer>
  );
};

export default Experience;
