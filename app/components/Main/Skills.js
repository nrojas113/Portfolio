import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faJsSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { proficient, knowledgeable, learning } from "../../data/TechSkillsData";

export default function Skills() {
  return (
    <section id="skills">
      <h1 className="section_title">Tech Skills</h1>
      <h2>Proficient</h2>
      <ul>
        {proficient.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
      <h2>knowledgeable</h2>
      <ul>
        {knowledgeable.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
      <h2>Learning</h2>
      <ul>
        {learning.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
