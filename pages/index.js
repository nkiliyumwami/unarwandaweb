// import React from "react";
// import Navbar from "../components/Layouts/Navbar";
// import MainBanner from "../components/HomePages/DefaultHome/MainBanner";
// import Services from "../components/HomePages/DefaultHome/Services";
// import About from "../components/HomePages/DefaultHome/About";
// import OurWorks from "../components/HomePages/DefaultHome/OurWorks";
// import WorkProcess from "../components/HomePages/DefaultHome/WorkProcess";
// import Feedback from "../components/Common/Feedback";
// import Team from "../components/Common/Team";
// import FunFacts from "../components/Common/FunFacts";
// import LatestNewsSlider from "../components/Common/LatestNewsSlider";
// import CtaArea from "../components/Common/CtaArea";
// import Partner from "../components/Common/Partner";
// import Footer from "../components/Layouts/Footer";

import React from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomePages/CreativeAgencyTwo/MainBanner";
import About from "../components/HomePages/CreativeAgencyTwo/About";
import Services from "../components/HomePages/CreativeAgencyTwo/Services";
import OurWorks from "../components/HomePages/CreativeAgencyTwo/OurWorks";
import Feedback from "../components/Common/Feedback";
import WorkProcess from "../components/HomePages/CreativeAgencyTwo/WorkProcess";

import Team from "../components/HomePages/CreativeAgencyTwo/Team";
import FunFactsTwo from "../components/Common/FunFactsTwo";
import LatestNewsSlider from "../components/Common/LatestNewsSlider";
import CtaArea from "../components/Common/CtaArea";
import Partner from "../components/Common/Partner";
import Footer from "../components/Layouts/Footer";

const Index = () => {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <Services />

      <About />

      <OurWorks />

      <WorkProcess />

      <Feedback />

      <Team />

      {/* <FunFacts /> */}

      {/* <LatestNewsSlider /> */}

      <CtaArea />

      <Partner />

      <Footer />
    </>
  );
};

export default Index;

