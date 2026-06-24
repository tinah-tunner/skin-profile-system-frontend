import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ textAlign: "center", padding: "20px" }}>
      <p>© 2026 Carmina Tinah Mbatsane</p>

      <div className="footer-icons">
        <a
          href="https://github.com/tinah-tunner"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://linkedin.com/in/carmina_mbatsane"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
}

export default Footer;