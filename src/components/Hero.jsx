import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">

      {/* Background glow */}
      <div className="hero-glow"></div>

      {/* Left content */}
      <div className="hero-content">

        <div className="hero-badge">
          <span className="status-dot"></span>
          B.Tech CSE · 2nd Year
        </div>

        <h1 className="hero-title">
          Hi, I'm{" "}
          <span className="hero-name">
            Mo TARIQ.
          </span>
        </h1>

        <h2 className="hero-role">
          Computer Science Student
        </h2>

        <p className="hero-description">
          I'm a B.Tech Computer Science & Engineering
          student at Lovely Professional University,
          exploring software development and building
          my skills through practical projects.
        </p>

        <div className="hero-buttons">

          <a
            href="#projects"
            className="btn-primary"
          >
            View My Work
            <span>↗</span>
          </a>

          <a
            href="#contact"
            className="btn-secondary"
          >
            Contact Me
          </a>

        </div>

      </div>


      {/* Right visual */}
      <div className="hero-visual">

        <div className="orbit orbit-one"></div>

        <div className="orbit orbit-two"></div>

        <div className="orbit orbit-three"></div>

        <div className="hero-core">

          <div className="core-glow"></div>

          <span>✦</span>

        </div>

      </div>


      {/* Bottom scroll indicator */}
      <div className="scroll-indicator">

        <span></span>

        Scroll to explore

      </div>

    </section>
  );
}

export default Hero;