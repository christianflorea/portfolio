import React from "react";
import Row from "./Row";
import { Typography } from "@mui/material";
import { styled } from "styled-components";
import useScreenSizeStatus from "../../hooks/useScreenSizeStatus";

const StyledPillButton = styled.button<{
  selected: boolean;
  color: string;
  mobile: boolean;
  desktop: boolean;
}>`
  flex: 1;
  background-color: ${(props) =>
    props.selected ? props.color : "transparent"};
  border: none;
  color: white;
  height: ${(props) => (props.mobile ? "60px" : "70px")};
  width: ${(props) => (props.desktop ? "200px" : "100%")};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 9999px;

  img {
    transform: ${(props) => (props.mobile ? "scale(0.7)" : null)};
  }
`;

const StyledPillContainer = styled.div<{ desktop: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #9a97a0;
  padding: 2px;
  border-radius: 9999px;
  gap: 4px;
  width: ${(props) => (!props.desktop ? "100%" : "unset")};
`;

type PillSelectProps = {
  items: {
    name: string;
    logo: JSX.Element;
    color: string;
    onClick: () => void;
  }[];
  currentSelection: number;
};

const PillSelect = ({ items, currentSelection }: PillSelectProps) => {
  const { isMobile, isDesktop } = useScreenSizeStatus();

  return (
    <StyledPillContainer desktop={isDesktop}>
      {items.map((item, i) => (
        <StyledPillButton
          key={item.name}
          onClick={item.onClick}
          selected={currentSelection === i}
          color={item.color}
          mobile={isMobile}
          desktop={isDesktop}
        >
          <Row key={item.name} alignItems="center" justifyContent="center">
            {item.logo}
          </Row>
        </StyledPillButton>
      ))}
    </StyledPillContainer>
  );
};

export default PillSelect;
