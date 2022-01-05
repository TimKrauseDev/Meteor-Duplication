import React from "react";

import dispatchImg from "../../imgs/companies/dispatch.svg";
import rocketChatImg from "../../imgs/companies/rocket-chat.svg";
import mixmaxImg from "../../imgs/companies/mixmax.svg";
import codesignalImg from "../../imgs/companies/cs.svg";
import qualcommImg from "../../imgs/companies/qualcomm.svg";
import ikeaImg from "../../imgs/companies/ikea.svg";
import honeywellImg from "../../imgs/companies/honeywell.svg";

const CompaniesUsingMeteor = () => {
  return (
    <section className="companies-using-meteor-wrapper">
      <div className="Index-page-content">
        <h1>Companies using Meteor</h1>
        <div className="companies-container-primary">
          <img className="company-img" src={dispatchImg} alt="dispatch" />
          <img className="company-img" src={rocketChatImg} alt="rocket chat" />
          <img className="company-img" src={mixmaxImg} alt="mixmax" />
          <img className="company-img" src={codesignalImg} alt="code signal" />
        </div>
        <div className="companies-container-secondary">
          <img className="company-img" src={qualcommImg} alt="qualcomm" />
          <img className="company-img" src={ikeaImg} alt="ikea" />
          <img className="company-img" src={honeywellImg} alt="honeywell" />
        </div>
      </div>
    </section>
  );
};

export default CompaniesUsingMeteor;
