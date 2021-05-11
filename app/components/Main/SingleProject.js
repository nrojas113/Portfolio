import React, { useState } from "react";
import SingleProjectFront from "./SingleProjectFront";
import SingleProjectBack from "./SingleProjectBack";

function SingleProject(prop) {
  const [flip, setFlip] = useState(false);

  return (
    <div id="projects_body_single" className="card" data-aos="zoom-in">
      {flip ? (
        <SingleProjectBack {...prop} setFlip={setFlip} />
      ) : (
        <SingleProjectFront {...prop} setFlip={setFlip} />
      )}
    </div>
  );
}

export default SingleProject;
