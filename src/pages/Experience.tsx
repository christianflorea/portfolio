import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../theme";
import { getExperience } from "../data";
import { OpenInNew, LocationOn, CalendarToday } from "@mui/icons-material";

const ExperienceContainer = styled.div`
  max-width: 1000px;
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

const ExperienceList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.xl};
`;

const ExperienceCard = styled.div`
  background: ${theme.colors.card};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.md};
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${theme.shadows.lg};
    transform: translateY(-5px);
  }
`;

const CardHeader = styled.div<{ $color: string }>`
  background: ${(props) => props.$color};
  padding: ${theme.spacing.xl};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    padding: ${theme.spacing.lg};
  }
`;

const CompanyLogo = styled.img`
  max-height: 60px;
  max-width: 200px;
  object-fit: contain;

  @media (max-width: ${theme.breakpoints.mobile}) {
    max-height: 50px;
  }
`;

const HeaderInfo = styled.div`
  flex: 1;
`;

const Role = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.xs};

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.2rem;
  }
`;

const Company = styled.a`
  font-size: 1.1rem;
  font-weight: 600;
  color: ${theme.colors.primary};
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  margin-bottom: ${theme.spacing.sm};
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.primaryDark};
  }

  svg {
    font-size: 1rem;
  }
`;

const MetaInfo = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  color: ${theme.colors.textLight};
  font-size: 0.95rem;

  svg {
    font-size: 1rem;
  }
`;

const CardContent = styled.div`
  padding: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg};
  }
`;

const ProjectsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${theme.spacing.lg};
`;

const Project = styled.div`
  display: flex;
  gap: ${theme.spacing.lg};
  padding-bottom: ${theme.spacing.lg};
  border-bottom: 1px solid ${theme.colors.border};

  &:last-child {
    border-bottom: none;
    padding-bottom: 0;
  }

  @media (max-width: ${theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: ${theme.spacing.md};
  }
`;

const ProjectImageWrapper = styled.div`
  flex-shrink: 0;
  width: 200px;
  cursor: pointer;

  @media (max-width: ${theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: ${theme.borderRadius.md};
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectContent = styled.div`
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.sm};
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.sm};
`;

const ProjectLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  color: ${theme.colors.primary};
  text-decoration: none;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.primaryDark};
  }

  svg {
    font-size: 1rem;
  }
`;

const ImageModal = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  z-index: 2000;
  padding: ${theme.spacing.lg};
  cursor: pointer;
`;

const ModalImage = styled.img`
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: ${theme.borderRadius.md};
`;

export const Experience: React.FC = () => {
  const experiences = getExperience();
  const [modalImage, setModalImage] = useState<string | null>(null);

  return (
    <ExperienceContainer>
      <PageTitle>Experience</PageTitle>

      <ExperienceList>
        {experiences.map((exp, index) => (
          <ExperienceCard key={index}>
            <CardHeader $color={exp.color}>
              <CompanyLogo
                src={exp.icon.src}
                alt={exp.icon.alt}
                style={{
                  filter:
                    exp.icon.color === "#fff"
                      ? "brightness(0) invert(1)"
                      : "none",
                }}
              />
              <HeaderInfo>
                <Role>{exp.role}</Role>
                <Company
                  href={exp.companyLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {exp.company} <OpenInNew />
                </Company>
                <MetaInfo>
                  <MetaItem>
                    <LocationOn />
                    {exp.location}
                  </MetaItem>
                  <MetaItem>
                    <CalendarToday />
                    {exp.date}
                  </MetaItem>
                </MetaInfo>
              </HeaderInfo>
            </CardHeader>

            {exp.description.length > 0 && (
              <CardContent>
                <ProjectsList>
                  {exp.description.map((project, pIndex) => (
                    <Project key={pIndex}>
                      <ProjectImageWrapper
                        onClick={() => setModalImage(project.img)}
                      >
                        <ProjectImage src={project.img} alt={project.title} />
                      </ProjectImageWrapper>
                      <ProjectContent>
                        <ProjectTitle>{project.title}</ProjectTitle>
                        <ProjectDescription>{project.text}</ProjectDescription>
                        {project.link && (
                          <ProjectLink
                            href={project.link.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {project.link.text} <OpenInNew />
                          </ProjectLink>
                        )}
                      </ProjectContent>
                    </Project>
                  ))}
                </ProjectsList>
              </CardContent>
            )}
          </ExperienceCard>
        ))}
      </ExperienceList>

      <ImageModal
        $isOpen={modalImage !== null}
        onClick={() => setModalImage(null)}
      >
        {modalImage && <ModalImage src={modalImage} alt="Project preview" />}
      </ImageModal>
    </ExperienceContainer>
  );
};
