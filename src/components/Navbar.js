import { useState } from "react";
import "../App.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">Anjali.dev</div>

      {/* Menu Button */}
      <button 
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home"> Home</a>
        <a href="#about"> About</a>
        <a href="#experience"> Experience</a>
        <a href="#projects"> Projects</a>
        <a href="#achievements"> Achievements</a>
        <a href="#github-stats"> GitHub</a>
        <a href="/Anjali_Pekhale_Resume.pdf" target="_blank" rel="noopener noreferrer"> Resume</a>
        <a href="#contact"> Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;