import React, { useState } from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import { getExperience } from "../../data";
import Column from "../common/Column";
import useScreenSizeStatus from "../../hooks/useScreenSizeStatus";
import { styled } from "styled-components";
import Row from "../common/Row";
import { Button } from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";

const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  background-color: #3d52a0;
  gap: 24px;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 12px auto;
  border-radius: 10px;
  color: #fff;

  & h3 {
    font-family: "poppins", sans-serif;
    font-weight: 600;
    color: #ede8f5;
  }
`;

const TimelineContainer = styled.div``;

const Divider = styled.div`
  width: 100px;
  height: 1px;
  background-color: #cecece;
  margin: 8px 0;
`;

const StyledTimelineDot = styled(TimelineDot)<{ backgroundcolor: string }>`
  cursor: pointer;
  background-color: ${(props) => props.backgroundcolor};

  &:hover {
    background-color: ${(props) => props.backgroundcolor}cc;
  }
`;

const StyledTimelineConnector = styled(TimelineConnector)`
  min-height: 100px;
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

const StyledLinkedButtons = styled(Button)`
  background-color: #2876a1; !important;
`;

const ViewMoreButton = styled(Button)`
  margin-top: 8px !important;
  color: #fff;
  font-weight: 600;
`;

const Experience = () => {
  const { isMobile } = useScreenSizeStatus();
  const experience = getExperience();
  const [viewMore, setViewMore] = useState<boolean[]>(
    [...Array(experience.length)].map(() => false)
  );

  const openInNewTab = (link: string) => {
    window.open(link, "_blank", "noreferrer");
  };

  const onViewMoreClick = (idx: number) => {
    setViewMore((prev) => {
      const newViewMore = [...prev];
      newViewMore[idx] = !prev[idx];
      return newViewMore;
    });
  };

  const ProjectLinkButtons = isMobile ? Column : Row;

  return (
    <ExperienceContainer>
      <Typography variant="h3" component="h3" gutterBottom color="inherit">
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
          {experience.map((exp, idx) => (
            <StyledTimelineItem key={`${exp.company}-${exp.date}`}>
              {!isMobile && (
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body2"
                >
                  {exp.date}
                </TimelineOppositeContent>
              )}

              <TimelineSeparator>
                <StyledTimelineConnector />
                <StyledTimelineDot
                  backgroundcolor={exp.icon.color}
                  onClick={() => openInNewTab(exp.companyLink)}
                  color="inherit"
                >
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
                <Typography variant="h5" component="span">
                  {exp.company}
                </Typography>
                <Typography variant="subtitle1" component="span">
                  {exp.role}
                </Typography>
                <Divider />
                {exp.projectLinks && (
                  <ProjectLinkButtons gap="8px">
                    {exp.projectLinks.map((project) => (
                      <StyledLinkedButtons
                        key={project.name}
                        variant="contained"
                        size="small"
                        onClick={() => openInNewTab(project.link)}
                        endIcon={!isMobile && <LaunchIcon />}
                        color="info"
                      >
                        {project.name}
                      </StyledLinkedButtons>
                    ))}
                  </ProjectLinkButtons>
                )}
                <ul>
                  <li>{exp.description[0]}</li>
                  {viewMore[idx] &&
                    exp.description
                      .slice(1)
                      .map((desc, index) => <li key={index}>{desc}</li>)}
                  <ViewMoreButton
                    variant="outlined"
                    size="small"
                    color="inherit"
                    onClick={() => onViewMoreClick(idx)}
                  >
                    {viewMore[idx] ? "View Less" : "View More"}
                  </ViewMoreButton>
                </ul>
              </TimelineContent>
            </StyledTimelineItem>
          ))}
        </Timeline>
      </TimelineContainer>
    </ExperienceContainer>
  );
};

export default Experience;
