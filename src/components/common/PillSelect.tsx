import React from "react";
import Row from "./Row";
import { styled } from "styled-components";
import useScreenSizeStatus from "../../hooks/useScreenSizeStatus";

const StyledPillButton = styled.button<{
  selected: boolean;
  color: string;
  mobile: boolean;
  desktop: boolean;
}>`
  flex: 1;
  background: ${(props) =>
    props.selected ? props.color : "transparent"};
  border: none;
  color: white;
  height: ${(props) => (props.mobile ? "55px" : "70px")};
  width: ${(props) => (props.desktop ? "200px" : "100%")};
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 9999px;

  img {
    transform: ${(props) => (props.mobile ? "scale(0.65)" : null)};
  }
`;

const StyledPillContainer = styled.div<{ mobile: boolean; desktop: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: #d4d9da;
  padding: 2px;
  border-radius: 9999px;
  gap: ${(props) => (props.desktop ? "4px" : 0)};
  width: ${(props) => (props.mobile ? "95%" : props.desktop ? "unset" : "70%")};
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
    <StyledPillContainer desktop={isDesktop} mobile={isMobile}>
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
