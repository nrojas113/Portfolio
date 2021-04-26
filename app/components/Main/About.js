import React from "react";
import image from "../../media/girl.jpg";

export default function About() {
  return (
    <section id="about">
      <h1>About Me</h1>
      <div>
        <img src={image} alt="red hair girl drawing" />
        <p>
          Hi. I'm Natalie Rojas, a fullstack software engineer based in Jersey
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
