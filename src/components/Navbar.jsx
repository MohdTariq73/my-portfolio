import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="navbar-logo">
        <span className="logo-symbol">✦</span>
        <span>TARIQ</span>
      </div>

      <div className="navbar-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#academics">Academics</a>
        <a href="#projects">Projects</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </div>

      <button className="navbar-button">
        Let's Talk
      </button>

    </nav>
  );
}

export default Navbar;