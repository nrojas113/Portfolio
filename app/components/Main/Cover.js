import React from "react";
import video from "../../media/nature.mov";

export default function Cover() {
  return (
    <section id="cover">
      <h1 id="cover_name">
        Hi. I'M NATALIE <span id="cover_name--last"></span>
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
    </section>
  );
}
