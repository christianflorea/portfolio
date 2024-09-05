import React, { useState } from "react";
import { styled } from "styled-components";
import { Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Row from "./Row";
import useScreenSizeStatus from "../../hooks/useScreenSizeStatus";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: 16px 0;
`;

const StyledCardContainer = styled.div<{
  isExpanded: boolean;
  isMobile: boolean;
}>`
  display: flex;
  flex-direction: ${(props) => (props.isMobile ? "column" : "row")};
  align-items: center;
  width: 100%;
  height: 100%;
  max-width: 900px;
  padding: 16px;
  border-radius: ${(props) => (props.isExpanded ? "8px 8px 0 0" : "8px")};
  background-color: #d4d9da;
  cursor: pointer;
  transition: background-color 0.3s ease, border-radius 0.3s ease;
  gap: 16px;

  &:hover {
    background-color: #bec2c2;
  }
`;

const ImgContainer = styled.img`
  border-radius: 8px;
  height: 162.5px;
  width: 250px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Overlay = styled.div<{ isVisible: boolean }>`
  display: ${(props) => (props.isVisible ? "flex" : "none")};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const FullscreenImg = styled.img`
  max-width: 90%;
  max-height: 90%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
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
  border-radius: 0 0 8px 8px;
  max-width: 900px;
  padding: ${(props) => (props.isExpanded ? "8px 16px" : "0 16px")};
  max-height: ${(props) => (props.isExpanded ? "unset" : "0")};
  overflow: hidden;
  transition: max-height 0.3s ease, padding 0.3s ease;
`;

const StyledButton = styled.button`
  margin: 8px 0;
  padding: 8px 16px;
  border: 2px solid #007bff;
  background-color: transparent;
  border-radius: 9999px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

type ExperienceCardProps = {
  img: string;
  title: string;
  text?: string;
  link?: {
    link: string;
    text: string;
  };
};

const ExperienceCard = ({ img, title, text, link }: ExperienceCardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isMobile } = useScreenSizeStatus();

  const onImgClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
  };

  return (
    <Container>
      <StyledCardContainer
        onClick={() => setIsExpanded((p) => !p)}
        isExpanded={isExpanded}
        isMobile={isMobile}
      >
        <ImgContainer src={img} alt="project image" onClick={onImgClick} />
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
          <Typography variant="body1" textAlign="center">
            {text}
          </Typography>
        )}
        {link && (
          <Row justifyContent="center" width="100%">
            <StyledButton>
              <a href={link.link} target="_blank" rel="noreferrer">
                {link.text}
              </a>
            </StyledButton>
          </Row>
        )}
      </StyledExtraContent>

      <Overlay isVisible={isModalOpen} onClick={() => setIsModalOpen(false)}>
        <FullscreenImg src={img} alt="fullscreen project image" />
      </Overlay>
    </Container>
  );
};

export default ExperienceCard;
