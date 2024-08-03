import React from 'react';

import styled, { keyframes } from 'styled-components'
import { BlueText } from './Text';
import useScreenSizeStatus from '../../hooks/useScreenSizeStatus';
import Row from './Row';

const TerminalCommand = styled.span`
  padding-left: 10px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 400;
  text-align: center;
  color: #ffffff;
`;

const BlinkingEffect = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const BlinkingCursor = styled.div<{ height: string }>`
  width: 16px;
  height: ${(props) => props.height};
  background-color: white; 
  animation: ${BlinkingEffect} 1s infinite;
`;

type TerminalTextProps = {
  command?: string;
  showCursor?: boolean
};

function TerminalText({ command, showCursor }: TerminalTextProps) {
  const { isDesktop } = useScreenSizeStatus();
  const fontSize = !isDesktop ? '24px' : '28px';

  return (
    <div style={{padding: '16px 0'}}>
      <Row gap='8px'>
        <BlueText style={{ fontSize }}>
          ~/Christian_Florea{isDesktop && '/Portfolio'}
        </BlueText>
        <TerminalCommand style={{ fontSize }}>
          {command}
        </TerminalCommand>
        {showCursor && <BlinkingCursor height={fontSize}/>}
      </Row>
    </div>
  );
}

export default TerminalText;
