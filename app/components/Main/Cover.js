import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

import video from "../../media/nature.mov";

export default function Cover() {
  useEffect(() => {
    console.log(
      "Hello! So nice to see you here! If you liked my website and looking for fullstack/frontend developer, I'd love to connect! My email is natalie.rojas113@gmail.com"
    );
  }, []);
  return (
    <section id="cover">
      <h1 id="cover_name">
        Hi. I'm Natalie <span id="cover_name--last"></span>
      </h1>
      <h2>Software Engineer</h2>
      {/* <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          filter: blur(0.3),
        }}
      >
        <source src={video}></source>
      </video> */}
      <div id="cover_more">
        <Link to="about" smooth={true}>
          <p>Learn More</p>
          <FontAwesomeIcon icon={faArrowDown} />
        </Link>
      </div>
    </section>
  );
}
