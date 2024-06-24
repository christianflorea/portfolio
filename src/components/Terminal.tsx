import React from 'react';

import styled from 'styled-components'
import useScreenSizeStatus from '../hooks/useScreenSizeStatus';
import TerminalIntroText from './TerminalIntroText';
import Row from './Row';

const TerminalContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const TerminalControls = styled.div`
  padding: 9px 0 9px 12px;
  background-color: #999;
  border-radius: 10px 10px 0 0;
  margin-bottom: 10px;
`;

const StyledTerminal = styled.div<{width?: string}>`
  margin: 50px 12px;
  min-width: 320px;
  width: ${(props) => props.width || '100%'};
  height: 480px;
  border-radius: 10px;
  background-color: rgb(33, 33, 33);
  box-shadow: 0 0 15px 0 rgba(0,0,0,0.6);
`;

const MacButton = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

function Terminal() {
  const { isMobile, isResponsive } = useScreenSizeStatus();
  const terminalWidth = isMobile ? '100%' : isResponsive ? '90%' : '900px';

  return (
    <TerminalContainer>
      <StyledTerminal width={terminalWidth}>
        <TerminalControls>
          <Row gap='8px'>
            <MacButton style={{backgroundColor: '#ff5f56'}}/>
            <MacButton style={{backgroundColor: '#ffbd2e'}}/>
            <MacButton style={{backgroundColor: '#27c93f'}}/>
          </Row>
        </TerminalControls>
        <TerminalIntroText />
      </StyledTerminal>
    </TerminalContainer>
  );
}

export default Terminal;
