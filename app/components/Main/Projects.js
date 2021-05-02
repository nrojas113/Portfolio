import React from "react";
import { projects } from "../../data/ProjectsData";

const requestImageFile = require.context("../../media", false, /.png$/);

export default function Projects() {
  return (
    <section id="projects">
      <h1 className="section_title">Projects</h1>
      <div id="projects_body">
        {projects.map(
          ({
            id,
            title,
            description,
            isDeployed,
            deployLink,
            github,
            isVideo,
            videoLink,
            imageName,
          }) => {
            return (
              <div key={id} id="projects_body_single">
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
                    <span>
                      <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="go to deployed page"
                      >
                        More Details
                      </a>
                    </span>
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
              </div>
            );
          }
        )}
      </div>
    </section>
  );
}
