import React from "react";

import Header from "./Header";
import Footer from "./Footer";
import Banner from "./Landing/Banner";
import CompaniesUsingMeteor from "./Landing/CompaniesUsingMeteor";
import WhyMeteor from "./Landing/WhyMeteor";
import MeteorIntegratesWith from "./Landing/MeteorIntegratesWith";
import BuiltWithMeteor from "./Landing/BuiltWithMeteor";
import MeteorCloud from "./Landing/MeteorCloud";
import OpenSource from "./Landing/OpenSource";

const App = () => {
  return (
    <div id="app">
      <Header />
      <Banner />
      <CompaniesUsingMeteor />
      <WhyMeteor />
      <MeteorIntegratesWith />
      <BuiltWithMeteor />
      <MeteorCloud />
      <OpenSource />
      <Footer />
    </div>
  );
};

export default App;
