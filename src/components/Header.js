const Header = (props) => {
  return (
    <header id="welcome-section">
      <div className="nav-container">
        {" "}
        <div id="nav-item-container">
          <p>Git</p>
        </div>
        <div id="nav-item-container">
          <p>Linkedin</p>
        </div>
        <div id="nav-item-container">
          <p>About</p>
        </div>
        <div id="nav-item-container">
          <p>Work</p>
        </div>
        <div id="nav-item-container">
          <p>CV</p>
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
