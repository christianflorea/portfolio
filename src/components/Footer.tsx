import React from "react";
import styled from "styled-components";
import { theme } from "../theme";
import { LinkedIn, GitHub, Email } from "@mui/icons-material";

const FooterContainer = styled.footer`
  background: ${theme.colors.card};
  border-top: 1px solid ${theme.colors.border};
  padding: ${theme.spacing.lg};
  margin-top: auto;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing.md};

  @media (max-width: ${theme.breakpoints.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`;

const Copyright = styled.p`
  color: ${theme.colors.textLight};
  font-size: 0.9rem;
  margin: 0;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  align-items: center;
`;

const SocialLink = styled.a`
  color: ${theme.colors.text};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: all 0.3s ease;
  background: ${theme.colors.cardHover};

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.card};
    transform: translateY(-3px);
  }

  svg {
    font-size: 1.3rem;
  }
`;

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <Copyright>© {currentYear} Christian Florea.</Copyright>
        <SocialLinks>
          <SocialLink
            href="https://www.linkedin.com/in/christianflorea/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedIn />
          </SocialLink>
          <SocialLink
            href="https://github.com/ChristianFlorea"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHub />
          </SocialLink>
          <SocialLink href="mailto:cflorea@uwaterloo.ca" aria-label="Email">
            <Email />
          </SocialLink>
        </SocialLinks>
      </FooterContent>
    </FooterContainer>
  );
};
