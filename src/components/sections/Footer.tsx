import React from "react";
import Typography from "@mui/material/Typography";
import { styled } from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 48px 0 96px;
  background-color: #d4d9da;
`;

const Footer = () => {
  return (
    <Container>
      <Typography variant="h6">Thank you for visiting</Typography>
      <Typography variant="h6">More coming soon 🚀</Typography>
    </Container>
  );
};

export default Footer;
