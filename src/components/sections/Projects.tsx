import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "styled-components";
import { getProjects } from "../../data";

const Container = styled.div`
  width: 100%;
  max-width: 1450px;
  margin: 24px auto;
  display: flex;
  gap: 24px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 24px 0 96px;

  & h3 {
    font-family: "poppins", sans-serif;
    font-weight: 600;
    color: #2c3e50;
  }
`;

const ProjectContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
`;

const ProjectCard = styled.div<{ clickable: boolean }>`
  width: 300px;
  height: 320px;
  display: flex;
  flex-direction: column;
  background-color: #d4d9da;
  padding: 16px;
  border-radius: 8px;
  cursor: ${(props) => (props.clickable ? "pointer" : "default")};

  &:hover {
    box-shadow: ${(props) =>
      props.clickable ? "0 0 16px 0 rgba(0, 0, 0, 0.2)" : null};
  }

  & img {
    height: 175.5px;
    width: 270px;
    margin: 0 auto;
    object-fit: cover;
    border-radius: 8px;
  }

  & h3 {
    font-family: "poppins", sans-serif;
    font-weight: 600;
    color: #2c3e50;
    margin: 8px 0;
  }

  & p {
    font-family: "poppins", sans-serif;
    font-weight: 400;
    color: #2c3e50;
    margin: 8px 0;
  }
`;

const SkillContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const SkillPill = styled.span`
  font-family: "poppins", sans-serif;
  font-weight: 300;
  font-size: 12px;
  color: #2c3e50;
  background-color: #ffffff;
  padding: 4px 8px;
  border-radius: 999px;
  margin: 4px;
`;

const Projects = () => {
  const projects = getProjects();

  const openInNewTab = (link?: string) => {
    if (!link) return;
    window.open(link, "_blank", "noreferrer");
  };

  return (
    <Container>
      <Typography variant="h3" component="h3" gutterBottom color="inherit">
        Projects
      </Typography>
      <ProjectContainer>
        {projects.map((project) => (
          <ProjectCard
            key={project.name}
            onClick={() => openInNewTab(project.link)}
            clickable={!!project.link}
          >
            <img src={project.img} alt={project.name} />
            <h3>{project.name}</h3>
            <SkillContainer>
              {project.skills.map((skill) => (
                <SkillPill key={skill}>{skill}</SkillPill>
              ))}
            </SkillContainer>
          </ProjectCard>
        ))}
      </ProjectContainer>
    </Container>
  );
};

export default Projects;
