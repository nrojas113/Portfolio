import React from "react";
import line from "../media/line.png";
import { FiCheckCircle } from "react-icons/fi";
import { GiMagnifyingGlass } from "react-icons/gi";
import { FaHandHoldingHeart } from "react-icons/fa";
import { IconContext } from "react-icons";

export const intro = (
  <>
    <p id="intro_statement">
      Hi! I'm Natalie Rojas, a fullstack software developer with passion for
      building beautiful and creative apps that solves problems.
    </p>{" "}
    <img src={line} alt="line break" />
    <br />
    <p>
      A graduate of The Grace Hopper Program at Fullstack Academy, a immersive
      17 weeks software engineering bootcamp where I learned the fullstack
      JavaScript development, including React, Redux, Node.js, Express, and
      PostgreSQL databases.
    </p>
  </>
);

export const story = (
  <>
    <p>
      I discovered my passion for technology while advocating for digital
      transformation at my previous roles. I soon found myself fascinated with
      the world of tech, and my love for continuous learning led me to enroll in
      a Grace Hopper Software Engineering immersive. Today, I successfully
      transitioned from a project manager/account executive to a fullstack
      developer. As a developer, I leverage my past customer centric experiences
      to build visually pleasing and user friendly apps.
    </p>
    <br />
    <br />
    <div id="about_body-bio-softskills">
      <h1>~ My strengths ~</h1>
      <div id="about_body-bio-softskills-list">
        <IconContext.Provider value={{ size: "3.5rem", color: "gray" }}>
          <div>
            <p>Focus on Quality</p>
            <FiCheckCircle />
          </div>
          <div>
            <p>Eye for Detail</p>
            <GiMagnifyingGlass />
          </div>
          <div>
            <p>Empathy</p>
            <FaHandHoldingHeart />
          </div>
        </IconContext.Provider>
      </div>
    </div>
    <br />
    {/* <br />I was originally born and spent my childhood in Fukuoka, Japan, where
    my mother's family lives. I learned about American culture and English
    language in Portland, Oregon. And I was able to reconnect with my Dominican
    roots through my father's side of family when I moved to New York after
    graduating from college. */}
    {/* <br />
    <br />
    When I'm not coding or daydreaming about my next project, you might find me
    watching Ghbili movies, planning my next weekend cabin trip, attempting
    Yoga. */}
  </>
);
