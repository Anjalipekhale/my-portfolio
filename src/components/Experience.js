function Experience() {
  const experiences = [
    {
      title: "JAVA Intern",
      company: "Cognifyz Technology",
      duration: "May 2024 - June 2024",
      description: "Completed a task-based internship focused on developing Java-based applications and solving real-world programming challenges. Implemented core Java concepts such as object-oriented programming, exception handling, and data structures through hands-on tasks.",
      technologies: ["Java", "OOP", "Data Structures", "VS Code / IntelliJ IDEA"]
    },
    {
      title: "Python Developer",
      company: "CloudCatch",
      duration: "November 2025 - Present",
      description: "Worked on a Unified Service Orchestration (USO) project aimed at automating telecom network operations by converting manual network commands into automated workflows. The project focused on improving efficiency, reducing human errors, and enabling faster service deployment across multiple vendors.",
      technologies: ["Python", "Automation Scripts", "Networking Concepts", "Multi-vendor Systems"]
    }
  ];

  return (
    <section id="experience">
      <h2>Experience & Internships</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {experiences.map((exp, index) => (
          <div key={index} className="project-card" style={{ position: "relative" }}>
            <div style={{
              position: "absolute",
              left: "-20px",
              top: "20px",
              width: "12px",
              height: "12px",
              background: "linear-gradient(135deg, #38bdf8, #06b6d4)",
              borderRadius: "50%",
              border: "3px solid #0f172a"
            }}></div>

            <h3 style={{ color: "#38bdf8", marginBottom: "0.5rem" }}>{exp.title}</h3>
            <h4 style={{ color: "#06b6d4", marginBottom: "0.5rem" }}>{exp.company}</h4>
            <p style={{ color: "#94a3b8", fontSize: "0.9rem", marginBottom: "1rem" }}>{exp.duration}</p>
            <p style={{ marginBottom: "1rem" }}>{exp.description}</p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {exp.technologies.map((tech, techIndex) => (
                <span key={techIndex} style={{
                  background: "rgba(56, 189, 248, 0.1)",
                  color: "#38bdf8",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "0.8rem",
                  fontWeight: "500"
                }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;