import React from "react";
import "./healpfulAi.css";
import { IoIosArrowDown } from "react-icons/io";

const HelpfulAi: React.FC = () => {
  return (
    <div className="hai-container">
      <div className="hai-header1">Helpful AI</div>
      <div className="hai-header2">
        Done and done. <br />
        And then some.
      </div>
      <div className="hai-header3">
        Pixel 9 with Gemini makes it easy to do <br /> all those things that you
        do every day – and some things that you've never done before.
      </div>

      <div className="hai-wrapper">
        <div className="hai-left">
          <video autoPlay muted loop>
            <source src="/videos/v8.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="hai-right">
          <div className="hai-rheader">
            Gemini. Your built-in AI assistant.{" "}
          </div>
          <div className="hai-right-wrapper">
            <div className="hai-rtext">Talk things out live.</div>
            <div className="hai-icon">
              <IoIosArrowDown size={25} />
            </div>
          </div>
          <div className="hai-right-wrapper">
            <div className="hai-rtext">Find answers in IRL.</div>
            <div className="hai-icon">
              <IoIosArrowDown size={25} />
            </div>
          </div>
          <div className="hai-right-wrapper">
            <div className="hai-rtext">Get it done on the spot.</div>
            <div className="hai-icon">
              <IoIosArrowDown size={25} />
            </div>
          </div>
          <div className="hai-right-wrapper">
            <div className="hai-rtext">Catch up quick.</div>
            <div className="hai-icon">
              <IoIosArrowDown size={25} />
            </div>
          </div>
        </div>
      </div>

      <div className="hai-wrapper2">
        <video autoPlay muted loop>
          <source src="/videos/v9.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="hai-header4">
          Pixel remembers. So that you <br /> don't have to.
        </div>
        <div className="hai-header5">
          Save those things that you'll want to remember later with <br /> Pixel
          Screenshots, like events or places. So you can find what <br /> you
          need, right when you need it.
        </div>
      </div>

      <div className="hai-wrtapper3">
        <div className="hai-left3">
          <div className="hai-header6">Circle to Search. Whoa!</div>
          <div className="hai-header7">
            Just circle an image or text, even in a video. Pixel and AI <br /> 
            find it fast – directly from the app that you're in.
          </div>
        </div>
        <div className="hai-right3">
        <video autoPlay muted loop>
          <source src="/videos/v10.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
      </div>
    </div>
  );
};

export default HelpfulAi;
