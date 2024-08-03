import React from "react";

import styled from "styled-components";
import useScreenSizeStatus from "../../hooks/useScreenSizeStatus";

import Row from "./Row";
import Column from "./Column";

import { SECTIONS } from "../../data";
import useTypingEffect from "../../hooks/useTypingEffect";
import TerminalText from "./TerminalText";
import { BlueText } from "./Text";

const TerminalContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TerminalControls = styled.div`
  padding: 9px 0 9px 12px;
  background-color: #999;
  border-radius: 10px 10px 0 0;
  margin-bottom: 10px;
`;

const StyledTerminal = styled.div<{ width?: string }>`
  margin: 50px 12px;
  min-width: 320px;
  width: ${(props) => props.width || "100%"};
  height: 400px;
  border-radius: 10px;
  background-color: rgb(33, 33, 33);
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.6);
`;

const MacButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

type TerminalProps = {
  onAnimationDone: () => void;
  onAnimationDelayDone: () => void;
};

function Terminal({ onAnimationDone, onAnimationDelayDone }: TerminalProps) {
  const { isMobile, isResponsive, isDesktop } = useScreenSizeStatus();
  const terminalWidth = isMobile ? "100%" : isResponsive ? "90%" : "900px";
  const fontSize = !isDesktop ? "24px" : "32px";

  const { command, showNextCommand } = useTypingEffect({
    fullCommand: "ls ",
    onAnimationDone: onAnimationDone,
    onAnimationDelayDone: onAnimationDelayDone,
  });

  return (
    <TerminalContainer>
      <StyledTerminal width={terminalWidth}>
        <TerminalControls>
          <Row gap="8px">
            <MacButton style={{ backgroundColor: "#ff5f56" }} />
            <MacButton style={{ backgroundColor: "#ffbd2e" }} />
            <MacButton style={{ backgroundColor: "#27c93f" }} />
          </Row>
        </TerminalControls>
        <TerminalText command={command} showCursor={!showNextCommand} />
        {showNextCommand && (
          <Column alignItems="flex-start" gap="8px">
            {SECTIONS.map((section) => (
              <BlueText key={section} style={{ fontSize }}>
                {section}
              </BlueText>
            ))}
          </Column>
        )}
        {showNextCommand && <TerminalText showCursor />}
      </StyledTerminal>
    </TerminalContainer>
  );
}

export default Terminal;
