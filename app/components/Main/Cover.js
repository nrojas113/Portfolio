import React, { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import Particles from "react-particles-js";
import { Link } from "react-scroll";

export default function Cover() {
  const [more, setMore] = useState(true);
  useEffect(() => {
    console.log(
      "Hello there! I see you peeking! If you like my website and looking for fullstack/frontend developer, I'd love to connect! My email is natalie.rojas113@gmail.com. Thanks :)"
    );
  }, []);

  return (
    <section id="cover">
      <div id="cover_particles">
        <Particles
          params={{
            particles: {
              number: {
                value: 150,
                density: {
                  enable: false,
                },
              },
              size: {
                value: 20,
                random: true,
                anim: {
                  speed: 4,
                  size_min: 0.3,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                random: true,
                speed: 1,
                direction: "top",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "bubble",
                },
                onclick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 250,
                  duration: 2,
                  size: 0,
                  opacity: 0,
                },
                repulse: {
                  distance: 400,
                  duration: 4,
                },
              },
            },
          }}
        />
      </div>

      <h1 id="cover_name">
        Hello. I'm Natalie <span id="cover_name--last"></span>
      </h1>
      <h2>A Fullstack Software Developer</h2>
      {more && (
        <div id="cover_more">
          <Link to="about" smooth={true} onClick={() => setMore(false)}>
            <p>Learn More</p>
            <FaArrowDown />
          </Link>
        </div>
      )}
    </section>
  );
}
