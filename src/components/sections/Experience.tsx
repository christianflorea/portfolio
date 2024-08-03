import React from 'react';

import styled from 'styled-components'
import useScreenSizeStatus from '../../hooks/useScreenSizeStatus';
import Column from '../common/Column';
import { HeadignText } from '../common/Text';

const ExperienceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    padding: 12px;
`;

const StyledText = styled.p`
  font-size: 24px;
  color: white;
`;

function Experience() {
  const { isDesktop } = useScreenSizeStatus();
  return (
    <ExperienceContainer>
      <Column width={isDesktop ? '50%' : '100%'}>
        <HeadignText style={{fontSize: '32px'}}>About Me</HeadignText>
        <StyledText>
          {''}
        </StyledText>
      </Column>
    </ExperienceContainer>
  );
}

export default Experience;
