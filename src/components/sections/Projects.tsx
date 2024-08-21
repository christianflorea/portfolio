import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "styled-components";

const ExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px 0 96px;

  & h3 {
    font-family: "poppins", sans-serif;
    font-weight: 600;
    color: #3d52a0;
  }
`;

const Projects = () => {
  return (
    <ExperienceContainer>
      <Typography variant="h3" component="h3" gutterBottom color="inherit">
        Projects
      </Typography>
      <Typography variant="h6" gutterBottom>
        Work In Progress 🚧
      </Typography>
    </ExperienceContainer>
  );
};

export default Projects;
