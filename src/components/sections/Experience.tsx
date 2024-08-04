import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/system";
import { getExperience } from "../../data";
import Column from "../common/Column";
import useScreenSizeStatus from "../../hooks/useScreenSizeStatus";
import { Divider } from "@mui/material";

const TimelineContainer = styled("div")`
  width: 100%;
  display: flex;
  justify-content: center;
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
        <Timeline position={isMobile ? "right" : "alternate"}>
          {experience.map((exp, idx) => (
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
                  alignItems: isMobile ? "flex-start" : idx % 2 === 1 ? "flex-end" : "flex-start",
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
                {exp.description
                  .slice(0, isDesktop ? undefined : 1)
                  .map((desc) => (
                    <Typography variant="body2" component="span" key={desc}>
                      {desc}
                    </Typography>
                  ))}
              </TimelineContent>
            </StyledTimelineItem>
          ))}
        </Timeline>
      </TimelineContainer>
    </Column>
  );
};

export default Experience;
