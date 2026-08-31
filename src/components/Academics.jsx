import { useState } from "react";
import "./Academics.css";

function Academics() {
  const [selectedMarksheet, setSelectedMarksheet] = useState(null);

  const openMarksheet = (image) => {
    setSelectedMarksheet(image);
  };

  const closeMarksheet = () => {
    setSelectedMarksheet(null);
  };

  return (
    <section className="academics" id="academics">

      {/* Heading */}
      <div className="section-heading academics-heading">
        <span className="section-label">
          02 — ACADEMICS
        </span>

        <h2>
          My academic
          <span> journey.</span>
        </h2>
      </div>

      <div className="academic-timeline">

        {/* =========================
            B.Tech
        ========================= */}
        <div className="academic-item">

          <div className="academic-year">
            Present
          </div>

          <div className="academic-line">
            <span className="academic-dot"></span>
          </div>

          <div className="academic-card">

            <div className="academic-card-top">
              <span className="academic-type">
                UNDERGRADUATE
              </span>

              <span className="academic-status">
                2nd Year
              </span>
            </div>

            <h3>
              B.Tech — Computer Science & Engineering
            </h3>

            <p className="academic-institute">
              Lovely Professional University
            </p>

            <p className="academic-description">
              Currently pursuing my Bachelor's degree in
              Computer Science & Engineering, while developing
              practical skills in software development,
              programming and modern web technologies.
            </p>

            <div className="academic-score-highlight">
              <span>
                FIRST YEAR CGPA
              </span>

              <strong>
                8.47 / 10
              </strong>
            </div>

          </div>
        </div>

        {/* =========================
            Class XII
        ========================= */}
        <div className="academic-item">

          <div className="academic-year">
            2023
          </div>

          <div className="academic-line">
            <span className="academic-dot"></span>
          </div>

          <div className="academic-card">

            <div className="academic-card-top">
              <span className="academic-type">
                SENIOR SECONDARY
              </span>

              <span className="academic-score">
                80%
              </span>
            </div>

            <h3>
              Class XII
            </h3>

            <p className="academic-institute">
              CDA Academy
            </p>

            <p className="academic-description">
              Completed senior secondary education in 2023
              with an overall score of 80%.
            </p>

            <button
              className="marksheet-button"
              onClick={() =>
                openMarksheet(
                  `${import.meta.env.BASE_URL}marksheets/class-12-marksheet.jpg`
                )
              }
            >
              View Marksheet
              <span>↗</span>
            </button>

          </div>
        </div>

        {/* =========================
            Class X
        ========================= */}
        <div className="academic-item">

          <div className="academic-year">
            2021
          </div>

          <div className="academic-line">
            <span className="academic-dot"></span>
          </div>

          <div className="academic-card">

            <div className="academic-card-top">
              <span className="academic-type">
                SECONDARY
              </span>

              <span className="academic-score">
                91%
              </span>
            </div>

            <h3>
              Class X
            </h3>

            <p className="academic-institute">
              CDA Academy
            </p>

            <p className="academic-description">
              Completed secondary education in 2021
              with an overall score of 91%.
            </p>

            <button
              className="marksheet-button"
              onClick={() =>
                openMarksheet(
                  `${import.meta.env.BASE_URL}marksheets/class-10-marksheet.jpg`
                )
              }
            >
              View Marksheet
              <span>↗</span>
            </button>

          </div>
        </div>

      </div>

      {/* =========================
          Marksheet Modal
      ========================= */}
      {selectedMarksheet && (
        <div
          className="marksheet-modal"
          onClick={closeMarksheet}
        >
          <div
            className="marksheet-modal-content"
            onClick={(event) => event.stopPropagation()}
          >

            <button
              className="marksheet-close"
              onClick={closeMarksheet}
            >
              ×
            </button>

            <img
              src={selectedMarksheet}
              alt="Academic marksheet"
            />

          </div>
        </div>
      )}

    </section>
  );
}

export default Academics;
