import React, { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";
import ParticlesBackground from "./ParticlesBackground";

export default function Cover() {
  const [more, setMore] = useState(false);
  useEffect(() => {
    console.log(
      "Hello there! I see you peeking! If you like my website and looking for fullstack/frontend developer, I'd love to connect! My email is natalie.rojas113@gmail.com. Thanks :)"
    );
    setTimeout(() => setMore(true), 5000);
  }, []);

  return (
    <section id="cover">
      <ParticlesBackground />
      <h1 id="cover_name">
        Hello. I'm Natalie <span id="cover_name--last"></span>
      </h1>
      <h2>A Fullstack Software Developer</h2>
      {more && (
        <div id="cover_more">
          <Link to="intro" smooth={true} onClick={() => setMore(false)}>
            <p>Learn More</p>
            <FaArrowDown />
          </Link>
        </div>
      )}
    </section>
  );
}
