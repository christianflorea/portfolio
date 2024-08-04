import React from "react";

import { styled } from "styled-components";
import Column from "./Column";
import exp from "constants";

const StyledTimeLineItem = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 40px;
`;

const StyledCompanyLogo = styled.div`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDate = styled.div``;

type TimeLineItemProps = {
  role: string;
  company: string;
  date: string;
  icon: {
    src: string;
    alt: string;
    height: string;
    width: string;
  };
  description: string[];
  oppositeContent?: boolean;
};
const TimeLineItem = ({
  role,
  company,
  date,
  icon,
  description,
  oppositeContent
}: TimeLineItemProps) => {
  return (
    <StyledTimeLineItem>
      <StyledDate>{date}</StyledDate>
      <StyledCompanyLogo>
        <img
          src={icon.src}
          alt={icon.alt}
          width={icon.width}
          height={icon.height}
        />
      </StyledCompanyLogo>
      <Column gap="8px">
        <h3>{company}</h3>
        <h5>{role}</h5>
        {description.map((desc) => (
          <p>{desc}</p>
        ))}
      </Column>
      
    </StyledTimeLineItem>
  );
};

export default TimeLineItem;
