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

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      
      {/* Logo */}
      <h2 className="logo">Anjali.dev</h2>

      {/* Toggle Button */}
      <button 
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✖" : "☰"}
      </button>

      {/* Links */}
      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>🏠 Home</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>👩‍💻 About</a>
        <a href="#experience" onClick={() => setMenuOpen(false)}>💼 Experience</a>
        <a href="#projects" onClick={() => setMenuOpen(false)}>🚀 Projects</a>
        <a href="#achievements" onClick={() => setMenuOpen(false)}>🏆 Achievements</a>
        <a href="#github-stats" onClick={() => setMenuOpen(false)}>📊 GitHub</a>
        <a href="/Anjali_Pekhale_Resume.pdf" target="_blank" rel="noopener noreferrer">
          📄 Resume
        </a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>📩 Contact</a>
      </div>

    </nav>
  );
}

export default Navbar;