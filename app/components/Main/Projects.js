import React, { useEffect } from "react";
import SingleProject from "./SingleProject";
import { projects } from "../../data/ProjectsData";
import AOS from "aos";

export default function Projects() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <section id="projects">
      <h1 className="section_title">Projects</h1>
      <div id="projects_body">
        {projects.map((project) => {
          return <SingleProject project={project} key={project.id} />;
        })}
      </div>
    </section>
  );
}
