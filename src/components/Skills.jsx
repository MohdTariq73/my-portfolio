import "./Skills.css";
import skills from "../data/skills";

function Skills() {
  return (
    <section className="skills" id="skills">

      <div className="section-heading skills-heading">

        <span className="section-label">
          06 — SKILLS
        </span>

        <h2>
          Technologies I
          <span> work with.</span>
        </h2>

        <p>
          A growing toolkit built through projects,
          experimentation and continuous learning.
        </p>

      </div>


      <div className="skills-grid">

        {skills.map((skill) => (

          <div
            className="skill-card"
            key={skill.id}
          >

            <div className="skill-card-top">

              <span className="skill-category">
                {skill.category}
              </span>

              <span className="skill-number">
                0{skill.id}
              </span>

            </div>


            <div className="skill-main">

              <h3>
                {skill.name}
              </h3>

              <span className="skill-level">
                {skill.level}
              </span>

            </div>


            <div className="skill-progress">

              <div
                className="skill-progress-bar"
                style={{
                  width: `${skill.percentage}%`,
                }}
              ></div>

            </div>


            <span className="skill-percentage">
              {skill.percentage}%
            </span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;