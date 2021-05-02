import React from "react";
import { IconContext } from "react-icons";
import {
  FaReact,
  FaNode,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaGit,
  FaSass,
} from "react-icons/fa";
import {
  SiJavascript,
  SiPostgresql,
  SiRedux,
  SiHeroku,
  SiFirebase,
  SiWebpack,
} from "react-icons/si";
import { Icon, InlineIcon } from "@iconify/react";
import sequelizeIcon from "@iconify-icons/file-icons/sequelize";
import { learning } from "../../data/TechSkillsData";

export default function Skills() {
  return (
    <section id="skills">
      <h1 className="section_title">Tech Skills</h1>
      <IconContext.Provider value={{ size: "5rem" }}>
        <ul>
          <li>
            <SiJavascript />
            <p>JavaScript</p>
          </li>
          <li>
            <FaReact />
            <p>React</p>
          </li>
          <li>
            <SiRedux />
            <p>Redux</p>
          </li>
          <li>
            <FaHtml5 />
            <p>HTML5</p>
          </li>
          <li>
            <FaCss3Alt />
            <p>CSS3</p>
          </li>
          <li>
            <FaNode />
            <p>Node.js/Express</p>
          </li>
          <li>
            <Icon
              icon={sequelizeIcon}
              style={{ height: "5rem", width: "5rem" }}
            />
            <p>Sequelize</p>
          </li>
          <li>
            <SiPostgresql />
            <p>PostgreSQL</p>
          </li>
          <li>
            <FaBootstrap />
            <p>Bootstrap</p>
          </li>
          <li>
            <FaSass />
            <p>Sass</p>
          </li>
          <li>
            <FaGit />
            <p>Git</p>
          </li>
          <li>
            <SiHeroku />
            <p>Heroku</p>
          </li>
          <li>
            <SiWebpack />
            <p>Webpack</p>
          </li>
        </ul>
      </IconContext.Provider>
      <h2>
        Currently learning:
        {learning.map((skill, idx) => (
          <span key={idx}>{skill}</span>
        ))}
      </h2>
    </section>
  );
}
