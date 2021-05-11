import React, { useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { CgWorkAlt } from "react-icons/cg";
import { MdSchool } from "react-icons/md";

function SingleExperience({ data }) {
  const { date, type, title, company, description } = data;
  const [showDescription, setShowDescription] = useState(false);
  const isWorkIcon = type === "work";
  const toggleDescription = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      date={date}
      dateClassName="date"
      icon={isWorkIcon ? <CgWorkAlt /> : <MdSchool />}
      iconStyle={{ background: "rgb(228, 185, 69)", color: "#fff" }}
      onTimelineElementClick={toggleDescription}
    >
      <h2 className="vertical-timeline-element-title">{title}</h2>
      <h3 className="vertical-timeline-element-subtitle">{company}</h3>
      {showDescription && <p id="experience_description">{description}</p>}
    </VerticalTimelineElement>
  );
}

export default SingleExperience;
