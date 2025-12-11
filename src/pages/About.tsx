import React from "react";
import styled from "styled-components";
import { theme } from "../theme";
import { getAboutText } from "../data";
import { LinkedIn, GitHub, Email, Description } from "@mui/icons-material";

const HIGHLIGHT_TEXT = "";

const AboutContainer = styled.div`
  max-width: 900px;
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

const ContentSection = styled.div`
  background: ${theme.colors.card};
  padding: ${theme.spacing.xl};
  border-radius: ${theme.borderRadius.xl};
  box-shadow: ${theme.shadows.md};
  margin-bottom: ${theme.spacing.xl};

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg};
  }
`;

const BioText = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.lg};
  white-space: pre-line;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
  display: flex;
  align-items: center;
  gap: ${theme.spacing.sm};
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: ${theme.spacing.md};
  margin-top: ${theme.spacing.lg};
`;

const ContactCard = styled.a`
  display: flex;
  align-items: center;
  gap: ${theme.spacing.md};
  padding: ${theme.spacing.md};
  background: ${theme.colors.background};
  border: 2px solid ${theme.colors.border};
  border-radius: ${theme.borderRadius.lg};
  text-decoration: none;
  color: ${theme.colors.text};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${theme.colors.primary};
    transform: translateY(-3px);
    box-shadow: ${theme.shadows.md};
    background: ${theme.colors.cardHover};
  }
`;

const IconWrapper = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.secondary} 100%
  );
  border-radius: ${theme.borderRadius.md};
  color: ${theme.colors.card};

  svg {
    font-size: 1.5rem;
  }
`;

const ContactInfo = styled.div`
  flex: 1;
`;

const ContactLabel = styled.div`
  font-size: 0.9rem;
  color: ${theme.colors.textLight};
  margin-bottom: 2px;
`;

const ContactValue = styled.div`
  font-size: 1rem;
  font-weight: 600;
  color: ${theme.colors.text};
`;

const HighlightBox = styled.div`
  background: linear-gradient(
    135deg,
    ${theme.colors.primary}15 0%,
    ${theme.colors.secondary}15 100%
  );
  border-left: 4px solid ${theme.colors.primary};
  padding: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.md};
  margin-top: ${theme.spacing.lg};
`;

const HighlightText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${theme.colors.text};
  margin: 0;
`;

export const About: React.FC = () => {
  const aboutText = getAboutText();

  return (
    <AboutContainer>
      <PageTitle>About Me</PageTitle>

      <ContentSection>
        <BioText>{aboutText}</BioText>
        {HIGHLIGHT_TEXT ? (
          <HighlightBox>
            <HighlightText>{HIGHLIGHT_TEXT}</HighlightText>
          </HighlightBox>
        ) : null}
      </ContentSection>

      <ContentSection>
        <SectionTitle>Get in Touch</SectionTitle>
        <ContactGrid>
          <ContactCard
            href={process.env.PUBLIC_URL + "/documents/resume.pdf"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper>
              <Description />
            </IconWrapper>
            <ContactInfo>
              <ContactLabel>Resume</ContactLabel>
              <ContactValue>View PDF</ContactValue>
            </ContactInfo>
          </ContactCard>

          <ContactCard
            href="https://www.linkedin.com/in/christian-florea/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper>
              <LinkedIn />
            </IconWrapper>
            <ContactInfo>
              <ContactLabel>LinkedIn</ContactLabel>
              <ContactValue>Connect</ContactValue>
            </ContactInfo>
          </ContactCard>

          <ContactCard
            href="https://github.com/christianflorea"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconWrapper>
              <GitHub />
            </IconWrapper>
            <ContactInfo>
              <ContactLabel>GitHub</ContactLabel>
              <ContactValue>Follow</ContactValue>
            </ContactInfo>
          </ContactCard>

          <ContactCard href="mailto:cflorea@uwaterloo.ca">
            <IconWrapper>
              <Email />
            </IconWrapper>
            <ContactInfo>
              <ContactLabel>Email</ContactLabel>
              <ContactValue>Send</ContactValue>
            </ContactInfo>
          </ContactCard>
        </ContactGrid>
      </ContentSection>
    </AboutContainer>
  );
};
