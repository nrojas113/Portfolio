import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
const requestImageFile = require.context("../../media", false, /.png$/);

function SingleProjectFront(prop) {
  const {
    title,
    description,
    isDeployed,
    deployLink,
    github,
    isVideo,
    videoLink,
    imageName,
    setFlip,
  } = prop;
  return (
    <>
      <div id="projects_body_single--image">
        <img
          src={requestImageFile(`./${imageName}_mockup.png`)}
          loading="lazy"
          alt={`Main page image for ${title}`}
        />
      </div>
      <div id="projects_body_single--description">
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          {isDeployed && (
            <span>
              <a
                href={deployLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="go to deployed page"
              >
                Link
              </a>
            </span>
          )}
          {isVideo && (
            <span>
              <a
                href={videoLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="go to video demo page"
              >
                Video
              </a>
            </span>
          )}
          <span>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="go to source code page"
            >
              Code
            </a>
          </span>
        </div>
      </div>
      <div id="projects_body_single--arrow">
        <button type="button" onClick={() => setFlip(true)}>
          More Details
        </button>
      </div>
    </>
  );
}

export default SingleProjectFront;
