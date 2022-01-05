import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";

import meteorAPMImg from "../../imgs/meteorCloud/meteorAPM.svg";
import galaxyHostingImg from "../../imgs/meteorCloud/galaxyHosting.svg";
import atmosphereImg from "../../imgs/meteorCloud/atmosphere.svg";

const MeteorCloud = () => {
  useEffect(() => {
    const slideLeft = {
      opacity: 0,
      origin: "left",
      distance: "50px",
      duration: 500,
      easing: "ease-in",
      reset: false,
      viewFactor: 0.2,
    };
    const slideUp = {
      opacity: 0,
      origin: "bottom",
      distance: "50px",
      duration: 500,
      easing: "ease-in",
      reset: false,
      viewFactor: 0.2,
      delay: 200,
    };
    const slideUp2 = {
      opacity: 0,
      origin: "bottom",
      distance: "50px",
      duration: 500,
      easing: "ease-in",
      reset: false,
      viewFactor: 0.2,
      delay: 500,
    };

    ScrollReveal().reveal(".meteor-cloud-wrapper .item-left", slideLeft);
    ScrollReveal().reveal(".meteor-cloud-wrapper .item-center", slideUp);
    ScrollReveal().reveal(".meteor-cloud-wrapper .item-right", slideUp2);
  }, []);

  return (
    <section className="meteor-cloud-wrapper">
      <div className="Index-page-content">
        <h1 className="section-title">Meteor Cloud</h1>
        <div className="content-wrapper">
          <div className="item-left">
            <div className="img-wrapper">
              <img src={meteorAPMImg} alt="meteor APM" />
            </div>
            <h2>Meteor APM</h2>
            <p>
              Visibility into yoru apps performance. See real time metrics so
              you can monitor how your application is running.
            </p>
            <button className="btn">Get started with APM</button>
          </div>
          <div className="item-center">
            <div className="img-wrapper">
              <img src={galaxyHostingImg} alt="meteor APM" />
            </div>
            <h2>Galaxy Hosting</h2>
            <p>
              Spend less time on DevOps and more time building. The most
              efficient way for yoiu to host & scale your Meteor app.
            </p>
            <button className="btn">Get started for free</button>
          </div>
          <div className="item-right">
            <div className="img-wrapper">
              <img src={atmosphereImg} alt="meteor APM" />
            </div>
            <h2>Atmosphere</h2>
            <p>
              Browse our extensive library of open source pagackes, free for you
              to download and use with your Cloud Account.
            </p>
            <button className="btn">Download packages</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeteorCloud;
