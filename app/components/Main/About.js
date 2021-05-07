import React, { useEffect } from "react";
import AOS from "aos";
import profileImg from "../../media/profile_photo.jpeg";
import { story } from "../../data/AboutData";

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 5000 });
  }, []);
  return (
    <section id="about">
      <h1 className="section_title">About Me</h1>
      <div id="about_body">
        <img
          src={profileImg}
          alt="Natalie's Profile Photo"
          loading="lazy"
          data-aos="slide-right"
        />
        <div data-aos="slide-left" id="about_body-bio">
          {story}
        </div>
      </div>
    </section>
  );
}
