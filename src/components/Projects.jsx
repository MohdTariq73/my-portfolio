import "./Projects.css";
import projects from "../data/projects";

function Projects() {
  return (
    <section className="projects" id="projects">

      <div className="section-heading projects-heading">

        <span className="section-label">
          03 — SELECTED WORK
        </span>

        <h2>
          Things I've
          <span> built.</span>
        </h2>

        <p>
          A collection of projects I've worked on,
          combining thoughtful design with practical
          engineering.
        </p>

      </div>


      <div className="projects-grid">

        {projects.map((project) => (

          <article
            className="project-card"
            key={project.id}
          >

            {/* Project image */}

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

              <div className="project-overlay">

                <span>
                  View Project ↗
                </span>

              </div>

            </div>


            {/* Project information */}

            <div className="project-info">

              <div className="project-top">

                <span className="project-number">
                  {project.number}
                </span>

                <div className="project-links">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub ↗
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live ↗
                  </a>

                </div>

              </div>


              <h3>
                {project.title}
              </h3>


              <p>
                {project.description}
              </p>


              <div className="project-technologies">

                {project.technologies.map(
                  (technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  )
                )}

              </div>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Projects;