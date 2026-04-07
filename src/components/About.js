function About() {
  const skills = ["HTML5","React", "Python", "JavaScript", "AI/ML", "Node.js", "MongoDB", "CSS3","Data Analytics","Tableau","JAVA","SQL","AWS","GIT"];

  return (
    <section id="about">
      <h2>About Me</h2>
      <p>
        I am a passionate developer working on web and AI-based projects like food recognition and student monitoring systems. Dedicated to creating innovative solutions with clean code and modern technologies.
      </p>
      
      <h3 style={{marginTop: "2rem"}}>Skills</h3>
      <div style={{display: "flex", flexWrap: "wrap", gap: "1rem"}}>
        {skills.map((skill, index) => (
          <div key={index} className="skill-card" style={{flex: "1", minWidth: "120px", textAlign: "center"}}>
            <strong>{skill}</strong>
          </div>
        ))}
      </div>
    </section>
  );
}
export default About;