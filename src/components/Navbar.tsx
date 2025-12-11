import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { theme } from "../theme";

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background: ${theme.colors.card};
  border-bottom: 1px solid ${theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${theme.spacing.lg};
  z-index: 1000;
  box-shadow: ${theme.shadows.sm};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: 0 ${theme.spacing.md};
  }
`;

const Logo = styled(NavLink)`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${theme.colors.text};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
  }
`;

const NavLinks = styled.div<{ $isOpen: boolean }>`
  display: flex;
  gap: ${theme.spacing.lg};
  align-items: center;

  @media (max-width: ${theme.breakpoints.tablet}) {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: ${theme.colors.card};
    flex-direction: column;
    padding: ${theme.spacing.lg};
    gap: ${theme.spacing.md};
    border-bottom: 1px solid ${theme.colors.border};
    box-shadow: ${theme.shadows.md};
    transform: translateY(${(props) => (props.$isOpen ? "0" : "-100%")});
    opacity: ${(props) => (props.$isOpen ? "1" : "0")};
    transition: transform 0.3s ease, opacity 0.3s ease;
    pointer-events: ${(props) => (props.$isOpen ? "auto" : "none")};
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${theme.colors.text};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 500;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.md};
  transition: all 0.3s ease;

  &:hover {
    color: ${theme.colors.primary};
    background: ${theme.colors.cardHover};
  }

  &.active {
    color: ${theme.colors.primary};
    background: ${theme.colors.cardHover};
  }
`;

const ResumeLink = styled.a`
  color: ${theme.colors.card};
  background: ${theme.colors.primary};
  text-decoration: none;
  font-size: 1rem;
  font-weight: 600;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.md};
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.primaryDark};
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.md};
  }
`;

const Hamburger = styled.button<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  @media (max-width: ${theme.breakpoints.tablet}) {
    display: flex;
  }

  span {
    width: 2rem;
    height: 0.2rem;
    background: ${theme.colors.text};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${(props) => (props.$isOpen ? "rotate(45deg)" : "rotate(0)")};
    }

    &:nth-child(2) {
      opacity: ${(props) => (props.$isOpen ? "0" : "1")};
      transform: ${(props) =>
        props.$isOpen ? "translateX(20px)" : "translateX(0)"};
    }

    &:nth-child(3) {
      transform: ${(props) => (props.$isOpen ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <NavbarContainer>
      <Logo to="/" onClick={closeMenu}>
        CF
      </Logo>

      <NavLinks $isOpen={isOpen}>
        <StyledNavLink to="/" onClick={closeMenu}>
          Home
        </StyledNavLink>
        <StyledNavLink to="/about" onClick={closeMenu}>
          About
        </StyledNavLink>
        <StyledNavLink to="/experience" onClick={closeMenu}>
          Experience
        </StyledNavLink>
        <StyledNavLink to="/projects" onClick={closeMenu}>
          Projects
        </StyledNavLink>
        <ResumeLink
          href={process.env.PUBLIC_URL + "/documents/resume.pdf"}
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Resume
        </ResumeLink>
      </NavLinks>

      <Hamburger $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Hamburger>
    </NavbarContainer>
  );
};
