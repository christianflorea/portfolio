import React, { useEffect, useState } from 'react';

import styled, { keyframes } from 'styled-components'
import useScreenSizeStatus from '../hooks/useScreenSizeStatus';
import Row from './Row';

const Title = styled.span`
  padding-left: 10px;
  font-family: 'Courier New', Courier, monospace;
  font-weight: 600;
  text-align: center;
  color: #00ffff;
`;

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

function TerminalIntroText() {
  const [command, setCommand] = useState<string>('');
  const { isDesktop } = useScreenSizeStatus();
  const fontSize = !isDesktop ? '24px' : '32px';

  useEffect(() => {
    const fullCommand = 'ls';
    let index = 0;

    const startTyping = () => {
      const interval = setInterval(() => {
        setCommand(fullCommand.slice(0, index + 1));
        index++;

        if (index === fullCommand.length) {
          clearInterval(interval);
        }
      }, 300);
    };

    const timeout = setTimeout(() => {
      startTyping();
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Row gap='8px'>
      <Title style={{ fontSize }}>
        ~/Christian_Florea{isDesktop && '/Portfolio'}
      </Title>
      <TerminalCommand style={{ fontSize }}>
        {command}
      </TerminalCommand>
      <BlinkingCursor height={fontSize}/>
    </Row>
  );
}

export default TerminalIntroText;
