import React from "react";

import whyMeteorImg from "../../imgs/why_meteor.svg";

const WhyMeteor = () => {
  return (
    <section className="why-meteor-wrapper">
      <div className="Index-page-content">
        <div className="content-left">
          <h1>Why Meteor?</h1>
          <h2>Integrate technologies you already use</h2>
          <h3>
            Use popular frameworks and tools right out-of-the-box. Focus on
            building features instead of configuring disparate components
            yourself.
          </h3>
          <h2>Build apps for any device</h2>
          <h3>
            Use the same code whether you’re developing for web, iOS, Android,
            or desktop for a seamless update experience for your users.
          </h3>
          <h2>Trusted by over 500k developers</h2>
          <h3>
            Developed for over a decade and trusted by industry giants. Meteor
            is a mature open source framework that allows you to build and scale
            efficiently so you can serve millions of users.
          </h3>
        </div>
        <div className="content-right">
          <img src={whyMeteorImg} alt="why meteor" />
        </div>
      </div>
    </section>
  );
};

export default WhyMeteor;
