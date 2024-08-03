import React from 'react';

import styled from 'styled-components'
import useScreenSizeStatus from '../../hooks/useScreenSizeStatus';
import Column from '../common/Column';
import { ABOUT_TEXT } from '../../data';
import { HeadignText } from '../common/Text';

const AboutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    padding: 12px;
`;

const StyledText = styled.p`
  font-size: 24px;
  color: white;
  white-space: pre-line;

`;

function About() {
  const { isDesktop } = useScreenSizeStatus();
  return (
    <AboutContainer>
      <Column width={isDesktop ? '50%' : '100%'}>
        <HeadignText style={{fontSize: '32px'}}>About Me</HeadignText>
        <StyledText>
          {ABOUT_TEXT}
        </StyledText>
      </Column>
    </AboutContainer>
  );
}

export default About;
