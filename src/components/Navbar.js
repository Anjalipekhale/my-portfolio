// import { useState } from "react";

// function Navbar() {
//   const [menuOpen, setMenuOpen] = useState(false);

// function Navbar() {
//   return (
//     <nav style={{display:"flex", gap:"20px", padding:"20px", alignItems:"center", flexWrap:"wrap", justifyContent:"center"}}>
//       <a href="#home">Home</a>
//       <a href="#about">About</a>
//       <a href="#experience">Experience</a>
//       <a href="#projects">Projects</a>
//       <a href="#achievements">Achievements</a>
//       <a href="#github-stats">Research / GitHub</a>
//       <a href="/Anjali_Pekhale_Resume.pdf" target="_blank" rel="noopener noreferrer">View Resume</a>
//       <a href="#contact">Contact</a>
//     </nav>
//   );
// }
// export default Navbar;

import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      
      <div className="logo">Anjali.dev</div>

      <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home">🏠 Home</a>
        <a href="#about">👩‍💻 About</a>
        <a href="#experience">💼 Experience</a>
        <a href="#projects">🚀 Projects</a>
        <a href="#achievements">🏆 Achievements</a>
        <a href="#github-stats">📊 GitHub</a>
        <a href="/Anjali_Pekhale_Resume.pdf" target="_blank" rel="noopener noreferrer">📄 Resume</a>
        <a href="#contact">📬 Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;