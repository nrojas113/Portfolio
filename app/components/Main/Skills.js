import React from "react";
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
      <h2>learning</h2>
      <ul>
        {learning.map((skill, idx) => (
          <li key={idx}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
