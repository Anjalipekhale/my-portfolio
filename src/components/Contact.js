import { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Initialize EmailJS (Sign up at https://www.emailjs.com/ for free)
  emailjs.init("xvpWL7cn6VxidqPHi"); // Replace with your EmailJS public key

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const templateParams = {
    name: formData.name,
    email: formData.email,
    message: formData.message
  };
    emailjs.send(
    "service_7l7lzwb",
    "template_90ohzig",
    templateParams,
    "xvpWL7cn6VxidqPHi"
  )
      .then(
        (response) => {
          console.log("Success:", response);
          setStatus("success");
          setFormData({ name: "", email: "", message: "" });
          // Auto-close popup after 3 seconds
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          console.log("Error:", error);
          setStatus("error");
          // Auto-close error after 3 seconds
          setTimeout(() => setStatus(""), 3000);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <p>Feel free to reach out for collaborations or just a friendly hello!</p>
      
      {/* Success Popup Modal */}
      {status === "success" && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000
        }}>
          <div style={{
            background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
            borderRadius: "1rem",
            padding: "3rem",
            textAlign: "center",
            border: "2px solid #22c55e",
            boxShadow: "0 10px 40px rgba(34, 197, 94, 0.3)",
            maxWidth: "400px",
            animation: "slideIn 0.3s ease-out"
          }}>
            <div style={{
              fontSize: "4rem",
              marginBottom: "1rem",
              animation: "checkmark 0.6s ease-out"
            }}>
              ✓
            </div>
            <h3 style={{
              color: "#22c55e",
              marginBottom: "0.5rem",
              fontSize: "1.8rem"
            }}>
              Success!
            </h3>
            <p style={{
              color: "#cbd5e1",
              marginBottom: "1rem",
              fontSize: "1.1rem"
            }}>
              Thank you for reaching out!
            </p>
            <p style={{
              color: "#94a3b8",
              fontSize: "0.95rem",
              lineHeight: "1.6"
            }}>
              Your message has been sent successfully. I'll get back to you soon.
            </p>
          </div>
        </div>
      )}

      {/* Error Popup Modal */}
      {status === "error" && (
        <div style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1000
        }}>
          <div style={{
            background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
            borderRadius: "1rem",
            padding: "3rem",
            textAlign: "center",
            border: "2px solid #ef4444",
            boxShadow: "0 10px 40px rgba(239, 68, 68, 0.3)",
            maxWidth: "400px",
            animation: "slideIn 0.3s ease-out"
          }}>
            <div style={{
              fontSize: "4rem",
              marginBottom: "1rem",
              animation: "shake 0.5s ease-out"
            }}>
              ✗
            </div>
            <h3 style={{
              color: "#ef4444",
              marginBottom: "0.5rem",
              fontSize: "1.8rem"
            }}>
              Failed to Send
            </h3>
            <p style={{
              color: "#cbd5e1",
              marginBottom: "1rem",
              fontSize: "1.1rem"
            }}>
              Something went wrong
            </p>
            <p style={{
              color: "#94a3b8",
              fontSize: "0.95rem",
              lineHeight: "1.6"
            }}>
              Please try again or contact me directly at anjalipekhale2@gmail.com
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50px);
          }
          to {
            opacity: 1;
            transform: translate(0, 0);
          }
        }
        @keyframes checkmark {
          0% {
            opacity: 0;
            transform: scale(0) rotate(-45deg);
          }
          50% {
            transform: scale(1.2) rotate(10deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-10px); }
          75% { transform: translateX(10px); }
        }
      `}</style>
      
      <div style={{maxWidth: "600px", margin: "0 auto"}}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={loading}
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={loading}
            style={{resize: "none"}}
          ></textarea>
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message ✉️"}
          </button>
        </form>

        <div style={{marginTop: "3rem", textAlign: "center"}}>
          <h3>Contact Information</h3>
          <p>📧 Email: <a href="mailto:yourmail@gmail.com">anjalipekhale2@gmail.com</a></p>
          <a href="https://www.linkedin.com/in/anjali-pekhale-5342" target="_blank" rel="noopener noreferrer">LinkedIn</a>

          <a href="https://github.com/Anjalipekhale" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </section>
  );
}
export default Contact;