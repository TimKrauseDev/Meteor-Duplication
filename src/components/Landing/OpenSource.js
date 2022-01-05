import React from "react";

const OpenSource = () => {
  return (
    <section className="open-source-wrapper">
      <div className="Index-page-content">
        <div className="container-left">
          <h2 className="title">Open Source</h2>
          <h1>Build great applications faster than ever using Meteor.</h1>
          <p>
            Join the community of developers from all over the world that rely
            on Meteor.
          </p>
          <button className="btn">Install Meteor</button>
        </div>
        <div className="container-right">
          <div className="content-one">
            <h2 className="count">13,937</h2>
            <p className="count-description">Packages</p>
          </div>
          <div className="content-two">
            <h2 className="count">226</h2>
            <p className="count-description">Professional Service Providers</p>
          </div>
          <div className="content-three">
            <h2 className="count">28,278</h2>
            <p className="count-description">Stack Overflow Questions</p>
          </div>
          <div className="content-four">
            <h2 className="count">508,000+</h2>
            <p className="count-description">Unique Installs</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
