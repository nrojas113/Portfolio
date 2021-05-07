import React from "react";
import { FaEnvelope, FaFileDownload } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact">
      <h1 className="section_title">Contact</h1>
      <div>
        <h2>Say Hi. Share feedback. Let's Collaborate.</h2>
        <div id="contact_icons">
          <div id="contact_icons-email">
            <a
              href="mailto:natalie.rojas113@gmail.com?subject=Hello!"
              aria-label="send Natalie an email"
            >
              <FaEnvelope />
            </a>
            <h3>Email</h3>
          </div>
          <div id="contact_icons-resume">
            <a
              href="https://drive.google.com/file/d/1bMjgFXLBxlng5_r3wzQG66mR-3g8r9iJ/view?usp=sharing"
              aria-label="Go to Natalie's an resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFileDownload />
            </a>
            <h3>Resume</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
