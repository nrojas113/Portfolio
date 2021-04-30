import React from "react";
import profileImg from "../../media/profile_photo.jpeg";

export default function About() {
  return (
    <section id="about">
      <h1 className="section_title">About Me</h1>
      <div>
        <img src={profileImg} alt="Natalie's Profile Photo" />
        <p>
          Hi! I'm Natalie Rojas, a fullstack software engineer based in Jersey
          City. I'm a fullstack developer and UI/UX enthusiast. My interest in
          technology came from when
          <br />I love learning about different roots and cultural harmony.
          Originally born and spent my childhood in Fukuoka, Japan, where my
          mother's family lives. I learned about American culture and English
          language in Portland, Oregon. And I explored my Dominican roots when
          moved to New York after graduating from college. Having multicultural
          background allow
        </p>
      </div>
    </section>
  );
}
