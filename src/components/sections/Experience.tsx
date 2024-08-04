import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, { timelineOppositeContentClasses } from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { getExperience } from "../../data";
import Column from "../common/Column";
import useScreenSizeStatus from "../../hooks/useScreenSizeStatus";
import { styled } from "styled-components";

const TimelineContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const Divider = styled.div`
  width: 100px;
  height: 1px;
  background-color: #cecece;
  margin: 8px 0;
`;

const StyledTimelineDot = styled(TimelineDot)`
  cursor: pointer;

  &:hover {
    background-color: #cecece;
  }
`;

const StyledTimelineConnector = styled(TimelineConnector)`
  min-height: 50px;
`;

const StyledCompanyLogo = styled("div")`
  width: 70px;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledTimelineItem = styled(TimelineItem)`
  &::before {
    content: none;
  }
`;

const Experience = () => {
  const { isDesktop, isMobile } = useScreenSizeStatus();
  const experience = getExperience();

  const openInNewTab = (link: string) => {
    window.open(link, "_blank", "noreferrer");
  };

  return (
    <Column gap="24px" justifyContent="center" alignItems="center" width="100%">
      <Typography variant="h4" component="h2" gutterBottom>
        Experience
      </Typography>
      <TimelineContainer>
        <Timeline
          position="right"
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
            [`& .${timelineOppositeContentClasses.root}`]: {
              flex: 0.25,
            },
          }}
        >
          {experience.map((exp) => (
            <StyledTimelineItem key={`${exp.company}-${exp.date}`}>
              {!isMobile && (
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                  color="text.secondary"
                >
                  {exp.date}
                </TimelineOppositeContent>
              )}

              <TimelineSeparator>
                <StyledTimelineConnector />
                <StyledTimelineDot onClick={() => openInNewTab(exp.link)}>
                  <StyledCompanyLogo>
                    <img
                      src={exp.icon.src}
                      alt={exp.icon.alt}
                      width={exp.icon.width}
                      height={exp.icon.height}
                    />
                  </StyledCompanyLogo>
                </StyledTimelineDot>
                <StyledTimelineConnector />
              </TimelineSeparator>
              <TimelineContent
                sx={{
                  py: "4px",
                  px: 2,
                  gap: "8px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "center",
                }}
              >
                <Typography variant="h6" component="span">
                  {exp.company}
                </Typography>
                <Typography variant="subtitle2" component="span">
                  {exp.role}
                </Typography>
                <Divider />
                <Typography variant="body2" component="span">
                  {exp.description[0]}
                </Typography>
              </TimelineContent>
            </StyledTimelineItem>
          ))}
        </Timeline>
      </TimelineContainer>
    </Column>
  );
};

export default Experience;
