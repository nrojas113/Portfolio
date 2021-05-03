import React, { useState } from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { CgWorkAlt } from "react-icons/cg";
import { MdSchool } from "react-icons/md";

function SingleExperience({ data }) {
  const [showDescription, setShowDescription] = useState(false);
  const isWorkIcon = data.type === "work";
  const toggleShowMore = () => {
    setShowDescription((prev) => !prev);
  };

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      key={data.id}
      date={data.date}
      dateClassName="date"
      icon={isWorkIcon ? <CgWorkAlt /> : <MdSchool />}
      iconStyle={{ background: "rgb(228, 185, 69)", color: "#fff" }}
    >
      <h2 className="vertical-timeline-element-title">{data.title}</h2>
      <h3 className="vertical-timeline-element-subtitle">{data.company}</h3>
      <div className="show_more" onClick={toggleShowMore}>
        Show more
      </div>
      {showDescription && <p id="experience_description">{data.description}</p>}
    </VerticalTimelineElement>
  );
}

export default SingleExperience;
