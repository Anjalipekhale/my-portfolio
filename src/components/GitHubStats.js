function GitHubStats() {
  const stats = [
    { label: "Total Commits", value: "250+", icon: "📊" },
    { label: "Repositories", value: "15+", icon: "📁" },
    { label: "Stars Earned", value: "50+", icon: "⭐" },
    { label: "Contributions", value: "180+", icon: "🔥" }
  ];

  const languages = [
    { name: "JavaScript", percentage: 40, color: "#f7df1e" },
    { name: "Python", percentage: 35, color: "#3776ab" },
    { name: "React", percentage: 15, color: "#61dafb" },
    { name: "CSS", percentage: 10, color: "#1572b6" }
  ];

  return (
    <section id="github-stats">
      <h2>GitHub Activity & Stats</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
        {/* Stats Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem"
        }}>
          {stats.map((stat, index) => (
            <div key={index} className="project-card" style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{stat.icon}</div>
              <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#38bdf8", marginBottom: "0.25rem" }}>
                {stat.value}
              </div>
              <div style={{ color: "#ffffff", fontSize: "0.9rem" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Languages Chart */}
        <div className="project-card">
          <h3 style={{ color: "#38bdf8", marginBottom: "1.5rem", textAlign: "center" }}>Most Used Languages</h3>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {languages.map((lang, index) => (
              <div key={index}>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.5rem"
                }}>
                  <span style={{ fontWeight: "500" }}>{lang.name}</span>
                  <span style={{ color: "#ffffff", fontSize: "0.9rem" }}>{lang.percentage}%</span>
                </div>

                <div style={{
                  width: "100%",
                  height: "8px",
                  background: "rgba(56, 189, 248, 0.1)",
                  borderRadius: "4px",
                  overflow: "hidden"
                }}>
                  <div style={{
                    width: `${lang.percentage}%`,
                    height: "100%",
                    background: `linear-gradient(90deg, ${lang.color}, ${lang.color}dd)`,
                    borderRadius: "4px",
                    transition: "width 1s ease-out"
                  }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub Link */}
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #24292e 0%, #1a1e22 100%)",
              color: "#ffffff",
              padding: "12px 24px",
              borderRadius: "50px",
              fontWeight: "700",
              textDecoration: "none",
              boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.5)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.3)";
            }}
          >
            🔗 View My GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
}

export default GitHubStats;