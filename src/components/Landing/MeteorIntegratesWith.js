import React from "react";

import reactImg from "../../imgs/integrates/react.svg";
import vueImg from "../../imgs/integrates/vue.svg";
import angularImg from "../../imgs/integrates/angular.svg";
import graphQLImg from "../../imgs/integrates/graph-ql.svg";
import mongoDBImg from "../../imgs/integrates/mongoDB.svg";
import cordovaImg from "../../imgs/integrates/cordova.svg";
import npmImg from "../../imgs/integrates/npm.svg";

const MeteorIntegratesWith = () => {
  return (
    <section className="meteor-integrates-with-wrapper">
      <div className="Index-page-content">
        <h1>Meteor integrates with</h1>
        <div className="companies-container-primary">
          <img className="company-img" src={reactImg} alt="react" />
          <img className="company-img" src={vueImg} alt="vue" />
          <img className="company-img" src={angularImg} alt="angular" />
          <img className="company-img" src={graphQLImg} alt="graphQL" />
          <img className="company-img" src={mongoDBImg} alt="mongoDB" />
          <img className="company-img" src={cordovaImg} alt="cordova" />
          <img className="company-img" src={npmImg} alt="npm" />
        </div>
      </div>
    </section>
  );
};

export default MeteorIntegratesWith;
