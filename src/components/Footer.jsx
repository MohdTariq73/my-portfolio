import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-inner">

        {/* Top */}
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              TARIQ<span>.</span>
            </div>

            <p>
              B.Tech CSE student building modern
              digital experiences with clean code.
            </p>
          </div>

          {/* Navigation */}
          <div className="footer-navigation">
            <span className="footer-label">
              NAVIGATION
            </span>

            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#academics">Academics</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Social */}
          <div className="footer-connect">
            <span className="footer-label">
              CONNECT
            </span>

            <a
              href="https://github.com/MohdTariq73"
              target="_blank"
              rel="noreferrer"
            >
              GitHub <span>↗</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mohd-tariq-ba530337b/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <span>↗</span>
            </a>

            <a href="mailto:mohdtariq7383@gmail.com">
              Email <span>↗</span>
            </a>

            <a href="tel:7317041603">
              Phone <span>↗</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider"></div>

        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} MO. TARIQ
          </p>

          <p>
            Designed & built with React.
          </p>

          <button
            className="back-to-top"
            onClick={scrollToTop}
          >
            Back to top
            <span>↑</span>
          </button>

        </div>

      </div>
    </footer>
  );
}

export default Footer;