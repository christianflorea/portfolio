import React from "react";
import styled from "styled-components";
import { theme } from "../theme";
import { getProjects } from "../data";
import { OpenInNew } from "@mui/icons-material";

const ProjectsContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled.a<{ $hasLink: boolean }>`
  background: ${theme.colors.card};
  border-radius: ${theme.borderRadius.xl};
  overflow: hidden;
  box-shadow: ${theme.shadows.md};
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  cursor: ${(props) => (props.$hasLink ? "pointer" : "default")};
  opacity: ${(props) => (props.$hasLink ? "1" : "0.7")};
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.$hasLink &&
    `
    &:hover {
      transform: translateY(-8px);
      box-shadow: ${theme.shadows.lg};
    }
  `}
`;

const ProjectImageWrapper = styled.div`
  width: 100%;
  height: 250px;
  overflow: hidden;
  background: ${theme.colors.background};
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  padding: ${theme.spacing.lg};
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: ${theme.spacing.md};
`;

const ProjectName = styled.h3`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${theme.colors.text};
  margin: 0;
  flex: 1;
`;

const ExternalIcon = styled(OpenInNew)<{ $visible: boolean }>`
  color: ${theme.colors.primary};
  font-size: 1.2rem;
  opacity: ${(props) => (props.$visible ? "1" : "0")};
  transition: opacity 0.3s ease;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.md};
  flex: 1;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.xs};
  margin-top: auto;
`;

const SkillTag = styled.span`
  background: linear-gradient(
    135deg,
    ${theme.colors.primary}20 0%,
    ${theme.colors.secondary}20 100%
  );
  color: ${theme.colors.primary};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid ${theme.colors.primary}40;
`;

const InProgressBadge = styled.div`
  background: ${theme.colors.textLight};
  color: ${theme.colors.card};
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.sm};
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const Projects: React.FC = () => {
  const projects = getProjects();

  return (
    <ProjectsContainer>
      <PageTitle>Projects</PageTitle>

      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            href={project.link || "#"}
            target={project.link ? "_blank" : undefined}
            rel={project.link ? "noopener noreferrer" : undefined}
            $hasLink={!!project.link}
            onClick={(e) => {
              if (!project.link) {
                e.preventDefault();
              }
            }}
          >
            <ProjectImageWrapper>
              <ProjectImage src={project.img} alt={project.name} />
            </ProjectImageWrapper>
            <ProjectContent>
              <ProjectHeader>
                <ProjectName>{project.name}</ProjectName>
                {project.link ? (
                  <ExternalIcon $visible={true} />
                ) : (
                  <InProgressBadge>In Progress</InProgressBadge>
                )}
              </ProjectHeader>
              <ProjectDescription>{project.description}</ProjectDescription>
              <SkillsContainer>
                {project.skills.map((skill, skillIndex) => (
                  <SkillTag key={skillIndex}>{skill}</SkillTag>
                ))}
              </SkillsContainer>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};
