import React from "react";

const Banner = () => {
  return (
    <section id="banner-wrapper">
      <div className="Index-page-content">
        <div className="banner-content">
          <div className="banner-heading">
            <h1>Build Full-Stack Javascript Apps with Meteor</h1>
          </div>
          <div className="banner-description">
            <p>
              Meteor is an open source framework for seamlessly building and
              deplying Web, Mobile, and Desktop applications in Javascript.
            </p>
          </div>
          <div className="banner-buttons">
            <button className="banner-btn get-started">Get Started</button>
            <button className="banner-btn install">Install</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
