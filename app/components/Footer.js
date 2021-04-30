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
        <a
          href="mailto:natalie.rojas113@gmail.com?subject=Hello!"
          aria-label="send Natalie an email"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </a>
        <a
          href="https://www.linkedin.com/in/natalie-o-rojas/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="visit Natalie's LinkedIn page"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a
          href="https://github.com/nrojas113"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="visit Natalie's GitHub page"
        >
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a
          href="https://natalie-rojas113.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="visit Natalie's Medium page"
        >
          <FontAwesomeIcon icon={faMediumM} />
        </a>
      </div>
      <p>@ 2021 Natalie Rojas | All Rights Reserved</p>
    </>
  );
}
