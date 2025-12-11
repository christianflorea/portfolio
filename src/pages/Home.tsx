import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../theme";
import { ArrowForward } from "@mui/icons-material";

const HomeContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  min-height: calc(100vh - 200px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroContent = styled.div`
  text-align: center;
  max-width: 800px;
`;

const Greeting = styled.h1`
  font-size: 3.5rem;
  font-weight: 800;
  color: ${theme.colors.text};
  margin-bottom: ${theme.spacing.md};
  line-height: 1.2;

  @media (max-width: ${theme.breakpoints.tablet}) {
    font-size: 2.5rem;
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const GradientText = styled.span`
  background: linear-gradient(
    135deg,
    ${theme.colors.primary} 0%,
    ${theme.colors.secondary} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: ${theme.colors.textLight};
  margin-bottom: ${theme.spacing.xl};
  line-height: 1.6;

  @media (max-width: ${theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  gap: ${theme.spacing.md};
  justify-content: center;
  flex-wrap: wrap;
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: ${theme.colors.primary};
  color: ${theme.colors.card};
  text-decoration: none;
  border-radius: ${theme.borderRadius.lg};
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: ${theme.shadows.md};

  &:hover {
    background: ${theme.colors.primaryDark};
    transform: translateY(-3px);
    box-shadow: ${theme.shadows.lg};
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(4px);
  }
`;

const SecondaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.xs};
  padding: ${theme.spacing.md} ${theme.spacing.xl};
  background: transparent;
  color: ${theme.colors.primary};
  text-decoration: none;
  border: 2px solid ${theme.colors.primary};
  border-radius: ${theme.borderRadius.lg};
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.card};
    transform: translateY(-3px);
    box-shadow: ${theme.shadows.md};
  }
`;

// const StatsContainer = styled.div`
//   display: flex;
//   gap: ${theme.spacing.xl};
//   justify-content: center;
//   margin-top: ${theme.spacing.xxl};
//   flex-wrap: wrap;
// `;

// const StatItem = styled.div`
//   text-align: center;
// `;

// const StatNumber = styled.div`
//   font-size: 2.5rem;
//   font-weight: 800;
//   background: linear-gradient(
//     135deg,
//     ${theme.colors.primary} 0%,
//     ${theme.colors.secondary} 100%
//   );
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   background-clip: text;
// `;

// const StatLabel = styled.div`
//   font-size: 1rem;
//   color: ${theme.colors.textLight};
//   margin-top: ${theme.spacing.xs};
// `;

export const Home: React.FC = () => {
  return (
    <HomeContainer>
      <HeroContent>
        <Greeting>
          Hi 👋, I'm <GradientText>Christian Florea</GradientText>
        </Greeting>
        <Subtitle>
          I’m a software engineer who enjoys the process of solving hard
          problems. I love building systems that impact people around the world.
        </Subtitle>
        <CTAButtons>
          <PrimaryButton to="/experience">
            View Experience <ArrowForward />
          </PrimaryButton>
          <SecondaryButton to="/projects">See Projects</SecondaryButton>
        </CTAButtons>
        {/* <StatsContainer>
          <StatItem>
            <StatNumber>5</StatNumber>
            <StatLabel>Internships</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>8</StatNumber>
            <StatLabel>Projects</StatLabel>
          </StatItem>
          <StatItem>
            <StatNumber>2+</StatNumber>
            <StatLabel>Years Experience</StatLabel>
          </StatItem>
        </StatsContainer> */}
      </HeroContent>
    </HomeContainer>
  );
};
