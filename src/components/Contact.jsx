import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">

        {/* Heading */}
        <div className="section-heading contact-heading">
          <span className="section-label">
            05 — CONTACT
          </span>

          <h2>
            Let's build something
            <span> great together.</span>
          </h2>
        </div>

        {/* Contact content */}
        <div className="contact-content">

          <div className="contact-text">
            <p>
              Have an idea, a project, or an opportunity
              you'd like to discuss?
            </p>

            <p>
              I'm always open to interesting conversations
              and new opportunities.
            </p>

            {/* Contact details */}
            <div className="contact-details">

              <a href="mailto:mohdtariq7383@gmail.com">
                <span className="contact-detail-label">
              
                </span>

                <span className="contact-detail-value">
              
                </span>
              </a>

              <a href="tel:+917317041603">
                <span className="contact-detail-label">
                  PHONE: 
                </span>

                <span className="contact-detail-value">
                  +91 73170 41603
                </span>
              </a>

            </div>
          </div>

          {/* Email CTA */}
          <a
            href="mailto:mohdtariq7383@gmail.com"
            className="contact-button"
          >
            <span>Email Me</span>

            <span className="contact-arrow">
              ↗
            </span>
          </a>

        </div>

        {/* Divider */}
        <div className="contact-divider"></div>

        {/* Social links */}
        <div className="contact-socials">

          <a
            href="https://github.com/MohdTariq73"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
            <span>↗</span>
          </a>

          <a
            href="https://www.linkedin.com/in/mohd-tariq-ba530337b/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
            <span>↗</span>
          </a>

          <a
            href="mailto:mohdtariq7383@gmail.com"
          >
            Email
            <span>↗</span>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;