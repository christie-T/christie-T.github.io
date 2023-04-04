import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

import "../styles/SkillsExperience.css"

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#522d97">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2018-2022"
          iconStyle={{ background: "#0d598b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St. Robert Catholic High School, Ontario, Canada
          </h3>
          <p> Got my High School Diploma!</p>
        </VerticalTimelineElement>
        
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2020-2022"
          iconStyle={{ background: "#833fc2", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Video Editor for School
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Toronto, Canada
          </h4>
          <p>Edited videos for my high school over the course of two years.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: "#833fc2", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sales Associate - Sporting Life
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Toronto, Canada
          </h4>
          <p>
          Provided excellent customer service by greeting customers and
making personalized recommendations
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2022 - Present"
          iconStyle={{ background: "#0d598b", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            York University, Ontario, Canada
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor of Science
          </h4>

          <p> Working towards a Computer Science degree!</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;