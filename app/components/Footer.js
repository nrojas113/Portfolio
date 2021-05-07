import React from "react";
import { FaMediumM, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <div className="social-icons">
        <a
          href="https://www.linkedin.com/in/natalie-o-rojas/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="visit Natalie's LinkedIn page"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/nrojas113"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="visit Natalie's GitHub page"
        >
          <FaGithub />
        </a>
        <a
          href="https://natalie-rojas113.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="visit Natalie's Medium page"
        >
          <FaMediumM />{" "}
        </a>
      </div>
      <p>@ 2021 Natalie Rojas | All Rights Reserved</p>
    </>
  );
}
