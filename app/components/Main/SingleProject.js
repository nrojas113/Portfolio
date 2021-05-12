import React, { useState, useEffect, useRef } from "react";
import SingleProjectFront from "./SingleProjectFront";
import SingleProjectBack from "./SingleProjectBack";

function SingleProject({ project }) {
  const [flip, setFlip] = useState(false);

  return (
    <div id="projects_body_single" className="card" data-aos="zoom-in">
      {flip ? (
        <SingleProjectBack {...project} setFlip={setFlip} />
      ) : (
        <SingleProjectFront {...project} setFlip={setFlip} />
      )}
    </div>
  );
}

export default SingleProject;
