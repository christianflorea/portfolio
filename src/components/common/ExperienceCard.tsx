import React from "react";
import { styled } from "styled-components";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 16px 0;
`;

const StyledCardContainer = styled.div<{ isExpanded: boolean }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 900px;
  padding: 16px;
  border-radius: ${(props) => (props.isExpanded ? "10px 10px 0 0" : "10px")};
  background-color: #d4d8d8;
  cursor: pointer;
  transition: background-color 0.3s ease, border-radius 0.3s ease;
  gap: 16px;

  &:hover {
    background-color: #bec2c2;
  }
`;

const ImgContainer = styled.img`
  border-radius: 4px;
  height: 160px;
  width: 280px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  object-fit: fill;
`;

const CardContent = styled.div`
  padding-right: 16px;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledExtraContent = styled.div<{ isExpanded: boolean }>`
  width: 100%;
  background-color: #ffffff;
  border-radius: 0 0 10px 10px;
  max-width: 900px;
  padding: ${(props) => (props.isExpanded ? "8px 16px" : "0 16px")};
  max-height: ${(props) => (props.isExpanded ? "500px" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
`;

type ExperienceCardProps = {
  img: string;
  title: string;
  text?: string[];
  link?: {
    link: string;
    text: string;
  };
};

const ExperienceCard = ({ img, title, text, link }: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <Container>
      <StyledCardContainer
        onClick={() => setIsExpanded((p) => !p)}
        isExpanded={isExpanded}
      >
        <ImgContainer src={img} alt="project image" />
        <CardContent>
          <Typography variant="h5">{title}</Typography>
          {isExpanded ? (
            <KeyboardArrowUpIcon fontSize="large" />
          ) : (
            <KeyboardArrowDownIcon fontSize="large" />
          )}
        </CardContent>
      </StyledCardContainer>
      <StyledExtraContent isExpanded={isExpanded}>
        {text && (
          <ul>
            {text.map((desc, idx) => (
              <li key={idx}>{desc}</li>
            ))}
          </ul>
        )}
        {link && (
          <a href={link.link} target="_blank" rel="noreferrer">
            {link.text}
          </a>
        )}
      </StyledExtraContent>
    </Container>
  );
};

export default ExperienceCard;
