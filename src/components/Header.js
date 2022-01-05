import React, { useState } from "react";

import meteorLogo from "../imgs/meteor_logo.svg";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <header id="header" className="header-wrapper">
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
              <div className="header-nav-dropdown">
                <div className="header-nav-dropdown-item">
                  <a href="/">Install</a>
                </div>
                <div className="header-nav-dropdown-item">
                  <a href="/">Tutorials</a>
                </div>
                <div className="header-nav-dropdown-item">
                  <a href="/">Docs</a>
                </div>
                <div className="header-nav-dropdown-item">
                  <a href="/">FAQ</a>
                </div>
                <div className="header-nav-dropdown-item">
                  <a href="/">Forum</a>
                </div>
                <div className="header-nav-dropdown-item">
                  <a href="/">Showcase</a>
                </div>
              </div>
              <a href="/">Open Source</a>
            </div>
            <div className="header-nav-item">
              <div className="header-nav-dropdown min-width">
                <div className="header-nav-dropdown-item">
                  <a href="/">Meteor Cloud</a>
                </div>
                <div className="header-nav-dropdown-item">
                  <a href="/">Why Cloud?</a>
                </div>
              </div>
              <a href="/">Cloud</a>
            </div>
            <div className="header-nav-item">
              <div className="header-nav-dropdown">
                <div className="header-nav-dropdown-item">
                  <a href="/">Culture</a>
                </div>
                <div className="header-nav-dropdown-item">
                  <a href="/">Careers</a>
                </div>
                <div className="header-nav-dropdown-item">
                  <a href="/">Partners</a>
                </div>
                <div className="header-nav-dropdown-item">
                  <a href="/">Blog</a>
                </div>
                <div className="header-nav-dropdown-item">
                  <a href="/">Podcast</a>
                </div>
                <div className="header-nav-dropdown-item">
                  <a href="/">Contact Us</a>
                </div>
              </div>
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
      <div className="mobile-header-inner">
        <div className="mobile-header-left">
          <a href="/" className="mobile-header-branding">
            <img
              className="mobile-header-branding-logo"
              src={meteorLogo}
              alt="meteor logo"
            />
          </a>
        </div>
        <div className="mobile-header-right">
          <button
            className={`hamburger hamburger--slider ${
              navActive ? "is-active" : ""
            }`}
            type="button"
            aria-label="Menu"
            aria-controls="mobile-header-nav"
            onClick={() => setNavActive(!navActive)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
          <nav
            id="mobile-header-nav"
            className={` ${navActive ? "is-active" : ""}`}
          >
            <div className="mobile-header-nav-item">
              <div className="mobile-header-nav-dropdown">
                <div className="mobile-header-nav-dropdown-item">
                  <a href="/">Install</a>
                </div>
                <div className="mobile-header-nav-dropdown-item">
                  <a href="/">Tutorials</a>
                </div>
                <div className="mobile-header-nav-dropdown-item">
                  <a href="/">Docs</a>
                </div>
                <div className="mobile-header-nav-dropdown-item">
                  <a href="/">FAQ</a>
                </div>
                <div className="mobile-header-nav-dropdown-item">
                  <a href="/">Forum</a>
                </div>
                <div className="mobile-header-nav-dropdown-item">
                  <a href="/">Showcase</a>
                </div>
              </div>
              <a className="nav-item" href="/">
                Open Source
              </a>
            </div>
            <div className="mobile-header-nav-item">
              <div className="mobile-header-nav-dropdown min-width">
                <div className="mobile-header-nav-dropdown-item">
                  <a href="/">Meteor Cloud</a>
                </div>
                <div className="mobile-header-nav-dropdown-item">
                  <a href="/">Why Cloud?</a>
                </div>
              </div>
              <a className="nav-item" href="/">
                Cloud
              </a>
            </div>
            <div className="mobile-header-nav-item">
              <div className="mobile-header-nav-dropdown">
                <div className="mobile-header-nav-dropdown-item">
                  <a href="/">Culture</a>
                </div>
                <div className="mobile-header-nav-dropdown-item">
                  <a href="/">Careers</a>
                </div>
                <div className="mobile-header-nav-dropdown-item">
                  <a href="/">Partners</a>
                </div>
                <div className="mobile-header-nav-dropdown-item">
                  <a href="/">Blog</a>
                </div>
                <div className="mobile-header-nav-dropdown-item">
                  <a href="/">Podcast</a>
                </div>
                <div className="mobile-header-nav-dropdown-item">
                  <a href="/">Contact Us</a>
                </div>
              </div>
              <a className="nav-item" href="/">
                Company
              </a>
            </div>
            <div className="mobile-header-nav-item">
              <a className="nav-item" href="/">
                Log in
              </a>
            </div>
            <div className="mobile-header-nav-item">
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
