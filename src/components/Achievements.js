function Achievements() {
  const achievements = [
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "April 2026",
      description: "Completed Deloitte Virtual Internship – Forensic Technology & Data Analytics. Task 1: Operational Telemetry Analysis (Tableau Dashboard).  Task 2: Forensic Technology – Gender Pay Equality Analysis",
      icon: "🏆"
    },
    {
      title: "Devops Decode - fundamentals",
      issuer: "Excelr",
      date: "June - July 2025",
      description: "Learned the fundamentals of DevOps including CI/CD pipelines, version control, automation, and basic cloud integration. Gained practical knowledge of tools and workflows used in modern software development and deployment.",
      icon: "☁️"
    },
    {
      title: "Cloud Computing Management & Security",
      issuer: "Softcrowd Technologies",
      date: "February - March 2025",
      description: "Gained hands-on experience with AWS services including EC2, S3, IAM, and VPC. Worked on cloud storage, security, and network configuration, along with implementing backup and recovery strategies. Also understood cloud service models (IaaS, PaaS, SaaS) and used auto scaling.",
      icon: "🔁",
    },
    {
      title: "Machine Learning Specialization",
      issuer: "SWAYAM (NPTEL)",
      date: "Jan - Mar 2025",
      description: "Completed a Machine Learning Specialization from SWAYAM (NPTEL), where I learned and applied core ML concepts such as regression, classification, clustering, and model evaluation.",
      icon: "🤖"
    }
  ];

  return (
    <section id="achievements">
      <h2>Achievements & Certifications</h2>
      <h3>The Story Behind The Code</h3>
      <h4>Engineering solutions with purpose and precision</h4>

      {/* Know Me More Section */}
      <div style={{
        background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
        borderRadius: "1rem",
        padding: "2rem",
        marginBottom: "3rem",
        border: "1px solid #38bdf8",
        boxShadow: "0 4px 6px -1px rgba(56, 189, 248, 0.1)"
      }}>
        <h3 style={{
          color: "#38bdf8",
          marginBottom: "1.5rem",
          textAlign: "center",
          fontSize: "1.8rem"
        }}>
          Know Me More
        </h3>
        
        <div style={{
          color: "#e2e8f0",
          lineHeight: "1.7",
          fontSize: "1.1rem",
          marginBottom: "2rem"
        }}>
          <p style={{ marginBottom: "1.5rem" }}>
            I'm not just a developer who writes code—I'm a problem solver who happens to use technology as my canvas. My journey began with a simple question: How can we make sense of the overwhelming amount of data around us?
          </p>
          
          <p style={{ marginBottom: "1.5rem" }}>
            That curiosity led me to build ETL pipelines that process thousands of records, design dashboards that reveal hidden business insights, and develop AI systems that protect users from harmful content. Every project I take on is driven by the belief that good engineering creates tangible impact.
          </p>
          
          <p style={{ marginBottom: "2rem" }}>
            Whether it's optimizing database queries, architecting scalable systems, or crafting intuitive user interfaces, I approach each challenge with the same rigor: understand deeply, design thoughtfully, and execute flawlessly.
          </p>
        </div>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "1.5rem"
        }}>
          <div style={{
            background: "rgba(56, 189, 248, 0.1)",
            borderRadius: "0.5rem",
            padding: "1.5rem",
            border: "1px solid rgba(56, 189, 248, 0.3)"
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🎯</div>
            <h4 style={{ color: "#38bdf8", marginBottom: "0.5rem" }}>Mission</h4>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>
              Build scalable data infrastructure that empowers decision-makers
            </p>
          </div>

          <div style={{
            background: "rgba(239, 68, 68, 0.1)",
            borderRadius: "0.5rem",
            padding: "1.5rem",
            border: "1px solid rgba(239, 68, 68, 0.3)"
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🔥</div>
            <h4 style={{ color: "#ef4444", marginBottom: "0.5rem" }}>Passion</h4>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>
              Creating AI solutions that solve real human problems
            </p>
          </div>

          <div style={{
            background: "rgba(34, 197, 94, 0.1)",
            borderRadius: "0.5rem",
            padding: "1.5rem",
            border: "1px solid rgba(34, 197, 94, 0.3)"
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🚀</div>
            <h4 style={{ color: "#22c55e", marginBottom: "0.5rem" }}>Vision</h4>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>
              Bridging the gap between complex technology and business value
            </p>
          </div>

          <div style={{
            background: "rgba(168, 85, 247, 0.1)",
            borderRadius: "0.5rem",
            padding: "1.5rem",
            border: "1px solid rgba(168, 85, 247, 0.3)"
          }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>🌍</div>
            <h4 style={{ color: "#a855f7", marginBottom: "0.5rem" }}>Impact</h4>
            <p style={{ color: "#cbd5e1", fontSize: "0.95rem" }}>
              Led initiatives reaching 500+ individuals across multiple domains
            </p>
          </div>
        </div>
      </div>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "1.5rem"
      }}>
        {achievements.map((achievement, index) => (
          <div key={index} className="project-card" style={{ textAlign: "center" }}>
            <div style={{
              fontSize: "3rem",
              marginBottom: "1rem",
              display: "block"
            }}>
              {achievement.icon}
            </div>

            <h3 style={{ color: "#38bdf8", marginBottom: "0.5rem" }}>{achievement.title}</h3>
            <h4 style={{ color: "#06b6d4", marginBottom: "0.5rem", fontSize: "1rem" }}>{achievement.issuer}</h4>
            <p style={{ color: "#ffffff", fontSize: "0.9rem", marginBottom: "1rem" }}>{achievement.date}</p>
            <p style={{ fontSize: "0.95rem" }}>{achievement.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;