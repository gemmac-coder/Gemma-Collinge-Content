const Header = (props) => {
  return (
    <header id="welcome-section">
      <div className="nav-container">
        {" "}
        <div id="nav-item-container">
          <p>GIT</p>
        </div>
        <div id="nav-item-container">
          <p>LINKEDIN</p>
        </div>
        <div id="nav-item-container">
          <p>ABOUT</p>
        </div>
        <div id="nav-item-container">
          <p>WORK</p>
        </div>
        <div id="nav-item-container">
          <p>CV</p>
        </div>
      </div>
      <div className="heading-container">
        <span id="h1-span">
          <div className="pink-triangle"></div>
          <h1>GEMMA</h1>
        </span>
      </div>
    </header>
  );
};

export default Header;
