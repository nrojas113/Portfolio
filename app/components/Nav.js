import React, { useState } from "react";
import { Link } from "react-scroll";

export default function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState("");

  const handleMenuDisplay = () => {
    setShowMenu((prev) => !prev);
    open === "" ? setOpen("open") : setOpen("");
  };

  return (
    <>
      <div className="menu-btn" onClick={handleMenuDisplay}>
        <span className={`menu-btn_icon ${open}`}></span>
      </div>
      <nav className={`${open}`}>
        <ul className={`menu-nav ${open}`}>
          <li className={`menu-nav_item ${open}`}>
            <Link to="cover" smooth={true} className="menu-nav_link">
              Home{" "}
            </Link>
          </li>
          <li className={`menu-nav_item ${open}`}>
            <Link to="about" smooth={true} className="menu-nav_link">
              About
            </Link>
          </li>
          <li className={`menu-nav_item ${open}`}>
            <Link to="skills" smooth={true} className="menu-nav_link">
              Tech Skills
            </Link>
          </li>
          <li className={`menu-nav_item ${open}`}>
            <Link to="experience" smooth={true} className="menu-nav_link">
              Experience
            </Link>
          </li>
          <li className={`menu-nav_item ${open}`}>
            <Link to="projects" smooth={true} className="menu-nav_link">
              Projects
            </Link>
          </li>
          <li className={`menu-nav_item ${open}`}>
            <Link to="cover" smooth={true} className="menu-nav_link">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
