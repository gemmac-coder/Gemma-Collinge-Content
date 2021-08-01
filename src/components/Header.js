const Header = (props) => {
  return (
    <header id="welcome-section">
      <div className="nav-container">
        {" "}
        <div id="nav-item-container">
          <a href="https://github.com/gemmac-coder" target="blank">
            <p>GIT</p>
          </a>
        </div>
        <div id="nav-item-container">
          <a
            href="https://www.linkedin.com/in/gemma-collinge-08802b86/"
            target="blank"
          >
            <p>LINKEDIN</p>
          </a>
        </div>
        <div id="nav-item-container">
          <a href="#about-info-container">
            <p>ABOUT</p>
          </a>
        </div>
        <div id="nav-item-container">
          <a href="#project-cards">
            <p>WORK</p>
          </a>
        </div>
        <div id="nav-item-container">
          <a
            href="https://docs.google.com/document/d/1txN89bRbrUCdbyVKmoCHl_NXJY4ULnkvvrt7e4hoGdE/edit?usp=sharing"
            target="blank"
          >
            <p>CV</p>
          </a>
        </div>
      </div>
      <div className="heading-container">
        <span id="h1-span">
          <h1>GEMMA</h1>
        </span>
      </div>
    </header>
  );
};

export default Header;
