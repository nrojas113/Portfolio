import React, { useEffect } from "react";
import { story } from "../../data/AboutData";

function Intro() {
  return <section id="intro">{story}</section>;
}

export default Intro;
