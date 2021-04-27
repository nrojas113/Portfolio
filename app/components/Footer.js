import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMediumM,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <>
      <div className="social-icons">
        <a href="#!">
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a href="#!">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="#!">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="#!">
          <FontAwesomeIcon icon={faMediumM} />
        </a>
      </div>
      <p>@ 2021 Natalie Rojas | All Rights Reserved</p>
    </>
  );
}
