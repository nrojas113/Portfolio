import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SingleExperience from "./SingleExperience";
import { resumeData } from "../../data/ResumeData";

export default function Experience() {
  return (
    <section id="experience">
      <h1 className="section_title">Experience</h1>
      <VerticalTimeline>
        {resumeData.map((data) => {
          return <SingleExperience data={data} />;
        })}
      </VerticalTimeline>
    </section>
  );
}
