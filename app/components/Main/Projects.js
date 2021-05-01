import React from "react";
import { projects } from "../../data/ProjectsData";

export default function Projects() {
  return (
    <section id="projects">
      <h1 className="section_title">Projects</h1>
      <div id="projects_body">
        {projects.map(({ id, title, description, link, demoUrl, github }) => {
          return (
            <div key={id} id="projects_body_single">
              <div id="projects_body_single--image">image space</div>
              <div id="projects_body_single--description">
                <h2>{title}</h2>
                <p>{description}</p>
                <div>
                  <span>More Details</span>
                  {link && (
                    <span>
                      <a
                        href={demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="go to demo page"
                      >
                        Link
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
        })}
      </div>
    </section>
  );
}
