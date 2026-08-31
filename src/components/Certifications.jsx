import "./Certifications.css";

import certifications from "../data/certifications";

function Certifications() {
  const openCertificate = (certificate) => {
    window.open(certificate.pdf, "_blank", "noopener,noreferrer");
  };

  return (
    <section
      className="certifications"
      id="certifications"
    >

      {/* Heading */}
      <div className="section-heading certifications-heading">

        <span className="section-label">
          04 — CERTIFICATIONS
        </span>

        <h2>
          Learning never
          <span> stops.</span>
        </h2>

        <p>
          Certifications and credentials that represent
          my continuous learning and technical growth.
        </p>

      </div>


      {/* Certificate cards */}
      <div className="certifications-grid">

        {certifications.map((certificate) => (

          <article
            className="certificate-card"
            key={certificate.id}
          >

            {/* Certificate preview */}
            <div className="certificate-preview">

              <div className="certificate-placeholder">

                <span>
                  {certificate.category}
                </span>

                <div className="certificate-icon">
                  ✦
                </div>

                <strong>
                  {certificate.issuer}
                </strong>

              </div>

            </div>


            {/* Certificate information */}
            <div className="certificate-info">

              <div className="certificate-top">

                <span className="certificate-number">
                  {certificate.number}
                </span>

                <span className="certificate-date">
                  {certificate.date}
                </span>

              </div>


              <h3>
                {certificate.title}
              </h3>


              <p>
                Issued by{" "}
                <strong>
                  {certificate.issuer}
                </strong>
              </p>


              <button
                className="certificate-button"
                onClick={() => openCertificate(certificate)}
              >
                View Certificate
                <span>↗</span>
              </button>

            </div>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Certifications;