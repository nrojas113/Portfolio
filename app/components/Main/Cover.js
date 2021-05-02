import React, { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import { Link } from "react-scroll";
// import video from "../../media/nature.mov";

export default function Cover() {
  const [more, setMore] = useState(true);
  useEffect(() => {
    console.log(
      "Hello there! I see you peeking! If you like my website and looking for fullstack/frontend developer, I'd love to connect! My email is natalie.rojas113@gmail.com. Thanks :)"
    );
  }, []);
  return (
    <section id="cover">
      <h1 id="cover_name">
        Hello. I'm Natalie <span id="cover_name--last"></span>
      </h1>
      <h2>A Fullstack Software Developer</h2>
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
