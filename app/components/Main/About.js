import React from "react";
import profileImg from "../../media/profile_photo.jpeg";
import { story } from "../../data/AboutData";

export default function About() {
  return (
    <section id="about">
      <h1 className="section_title">About Me</h1>
      <div>
        <img src={profileImg} alt="Natalie's Profile Photo" loading="lazy" />
        {story}
      </div>
    </section>
  );
}
