import "./About.css";

function About() {
  return (
    <section className="about section" id="about">

      <div className="section-heading">

        <span className="section-label">
          01 — ABOUT
        </span>

        <h2>
          Learning, building and
          <span> growing with technology.</span>
        </h2>

      </div>


      <div className="about-content">

        <div className="about-intro">

          <p className="about-large-text">
            I'm Mo TARIQ, a B.Tech Computer Science
            & Engineering student currently in my
            second year at Lovely Professional University.
          </p>


          <p className="about-description">
            I'm interested in software development and
            enjoy learning how modern web applications
            are designed, developed and connected with
            backend systems.
          </p>


          <p className="about-description">
            I'm currently strengthening my skills in
            C#, .NET, React, JavaScript and SQL through
            hands-on projects and continuous learning.
          </p>

        </div>


        <div className="about-tech">

          <div className="tech-card">

            <span className="tech-number">
              01
            </span>

            <h3>
              Frontend
            </h3>

            <p>
              React, JavaScript, HTML, CSS
            </p>

          </div>


          <div className="tech-card">

            <span className="tech-number">
              02
            </span>

            <h3>
              Backend
            </h3>

            <p>
              C#, .NET, Web API
            </p>

          </div>


          <div className="tech-card">

            <span className="tech-number">
              03
            </span>

            <h3>
              Database
            </h3>

            <p>
              SQL, Database Concepts, Git
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default About;