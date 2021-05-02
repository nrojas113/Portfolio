import React from "react";
import SingleProject from "./SingleProject";
import { projects } from "../../data/ProjectsData";

export default function Projects() {
  return (
    <section id="projects">
      <h1 className="section_title">Projects</h1>
      <div id="projects_body">
        {projects.map((project) => {
          return (
            <div key={project.id} id="projects_body_single">
              <SingleProject {...project} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
