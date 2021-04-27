import React, { useState } from "react";

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
            <a href="#" className="menu-nav_link">
              Home
            </a>
          </li>
          <li className={`menu-nav_item ${open}`}>
            <a href="#about" className="menu-nav_link">
              About
            </a>
          </li>
          <li className={`menu-nav_item ${open}`}>
            <a href="#projects" className="menu-nav_link">
              Projects
            </a>
          </li>
          <li className={`menu-nav_item ${open}`}>
            <a href="#experience" className="menu-nav_link">
              Experience
            </a>
          </li>
          <li className={`menu-nav_item ${open}`}>
            <a href="#" className="menu-nav_link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
