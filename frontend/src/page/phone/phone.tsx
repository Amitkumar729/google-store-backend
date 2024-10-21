import React from "react";
import Pixel from "../../components/pixel/pixel";
import Intro from "../../components/intro/intro";
import HighLight from "../../components/highlight/highlight";
import Footer from "../../components/footer/footer";
import AboutPhone from "../../components/aboutPhone/aboutPhone";
import HomeAbout from "../../components/homeAbout/homeAbout";
import AiPhoto from "../../components/aiPhoto/aiPhoto";
import AdvancePixel from "../../components/advancePixel/advancePixel";
import HelpfulAi from "../../components/healpfulAi/healpfulAi";
import Safety from "../../components/safety/safety";
import Performance from "../../components/performance/performance";

const Phone: React.FC = () => {
  return (
    <>
      <Pixel />
      <Intro />
      <HighLight />
      <AiPhoto />
      <AdvancePixel />
      <HelpfulAi />
      <Safety />
      <Performance />
      <AboutPhone />
      <HomeAbout />
      <Footer />
    </>
  );
};

export default Phone;
