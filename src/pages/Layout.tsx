import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { theme } from "../theme";

const LayoutContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: ${theme.colors.background};
`;

const Main = styled.main`
  flex: 1;
  margin-top: 70px;
  padding: ${theme.spacing.xxl} ${theme.spacing.lg};

  @media (max-width: ${theme.breakpoints.tablet}) {
    padding: ${theme.spacing.xl} ${theme.spacing.md};
  }

  @media (max-width: ${theme.breakpoints.mobile}) {
    padding: ${theme.spacing.lg} ${theme.spacing.sm};
  }
`;

export const Layout: React.FC = () => {
  return (
    <LayoutContainer>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </LayoutContainer>
  );
};
