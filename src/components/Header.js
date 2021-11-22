import React from "react";

import meteorLogo from "../imgs/meteor_logo.svg";

const Header = () => {
  return (
    <header className="header-wrapper">
      <div className="header-inner">
        <div className="header-left">
          <a href="/" className="header-branding">
            <img
              className="header-branding-logo"
              src={meteorLogo}
              alt="meteor logo"
            />
          </a>
        </div>
        <div className="header-right">
          <nav className="header-nav">
            <div className="header-nav-item">
              <a href="/">Open Source</a>
            </div>
            <div className="header-nav-item">
              <a href="/">Cloud</a>
            </div>
            <div className="header-nav-item">
              <a href="/">Company</a>
            </div>
            <div className="header-nav-item">
              <a href="/">Log in</a>
            </div>
            <div className="header-nav-item">
              <a className="nav-btn btn-bg-solid" href="/">
                Sign up
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
