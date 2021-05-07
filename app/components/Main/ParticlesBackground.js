import React from "react";
import Particles from "react-particles-js";
import particlesConfig from "../utils/particlesConfig";

function ParticlesBackground() {
  return (
    <div id="cover_particles">
      <Particles params={particlesConfig} />
    </div>
  );
}

export default ParticlesBackground;
