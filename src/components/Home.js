function Home() {
  return (
    <section id="home">
      <div style={{ 
        display: "flex", 
        alignItems: "center", 
        gap: "3rem", 
        flexWrap: "wrap",
        justifyContent: "center",
        marginBottom: "3rem"
      }}>
        <img
          src="/Anjali_profile.png"
          alt="Anjali profile"
          style={{
            width: "200px",
            height: "200px",
            borderRadius: "50%",
            border: "5px solid rgba(56, 189, 248, 0.7)",
            objectFit: "cover",
            boxShadow: "0 20px 50px rgba(56, 189, 248, 0.6)",
            transition: "transform 0.3s ease",
            cursor: "pointer"
          }}
          onMouseOver={(e) => { e.currentTarget.style.transform = "scale(1.05)"; }}
          onMouseOut={(e) => { e.currentTarget.style.transform = "scale(1)"; }}
        />

        <div style={{ maxWidth: "600px" }}>
          <h1 style={{ fontSize: "4.5rem", marginBottom: "1.5rem" }}>Hi, I'm Anjali 👋</h1>
          <p style={{ 
            fontSize: "1.5rem", 
            color: "#38bdf8",
            fontWeight: "600",
            marginBottom: "1.5rem"
          }}>
            Software Developer | React | Python | AI
          </p>
          <p style={{ 
            fontSize: "1.3rem", 
            color: "#ffffff",
            lineHeight: "1.8",
            marginBottom: "1rem"
          }}>
            Passionate about building awesome web applications and AI-powered solutions that solve real-world problems.
          </p>
          <p style={{ 
            fontSize: "1.1rem", 
            color: "#cbd5e1",
            fontStyle: "italic"
          }}>
            Let's create something amazing together! 🚀
          </p>
        </div>
      </div>

      <div style={{ 
        marginTop: "3rem", 
        display: "flex", 
        gap: "1.5rem", 
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        <button
          style={{ 
            marginTop: "0", 
            minWidth: "200px",
            padding: "16px 32px",
            fontSize: "1.1rem",
            fontWeight: "700"
          }}
          onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}
        >
          View My Work →
        </button>

        <a
          href="/Anjali_Pekhale_Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #06b6d4 0%, #0ea5e9 100%)",
            color: "#0f172a",
            padding: "16px 32px",
            borderRadius: "50px",
            fontWeight: "700",
            fontSize: "1.1rem",
            textDecoration: "none",
            boxShadow: "0 10px 25px rgba(56, 189, 248, 0.4)",
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            minWidth: "200px",
            textAlign: "center",
            border: "2px solid transparent"
          }}
          onMouseOver={(e) => { 
            e.currentTarget.style.transform = "translateY(-4px)"; 
            e.currentTarget.style.boxShadow = "0 20px 40px rgba(56, 189, 248, 0.6)"; 
          }}
          onMouseOut={(e) => { 
            e.currentTarget.style.transform = "translateY(0)"; 
            e.currentTarget.style.boxShadow = "0 10px 25px rgba(56, 189, 248, 0.4)"; 
          }}
        >
          👉 View Resume
        </a>
      </div>
    </section>
  );
}
export default Home;