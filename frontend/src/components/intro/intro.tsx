import React from "react";
import "./intro.css";
import { BiMobile } from "react-icons/bi";
import { SiGoogleassistant } from "react-icons/si";
import { FaGooglePlusSquare } from "react-icons/fa";
import { FaClockRotateLeft } from "react-icons/fa6";
import { TbRulerMeasure } from "react-icons/tb";
import { IoPlayCircleOutline } from "react-icons/io5";
import { Md3dRotation } from "react-icons/md";

const Intro: React.FC = () => {
  return (
    <div className="intro-container">
      <div className="intro-wrapper">
        <div className="intro-sub-wrapper">
          <div className="intro-icon">
            <BiMobile size={30} />
          </div>
          <div className="intro-text">
            Advanced camera and AI photo editing.
          </div>
        </div>{" "}
        <div className="intro-sub-wrapper">
          <div className="intro-icon">
            <SiGoogleassistant size={30} />
          </div>
          <div className="intro-text">
            Pixel gets the best of Google AI first.
          </div>
        </div>{" "}
        <div className="intro-sub-wrapper">
          <div className="intro-icon">
            <FaGooglePlusSquare size={30} />
          </div>
          <div className="intro-text">
            Pixel helps protect you and your info.
          </div>
        </div>{" "}
        <div className="intro-sub-wrapper">
          <div className="intro-icon">
            <FaClockRotateLeft size={30} />
          </div>
          <div className="intro-text">
            Seven years of Pixel Drops, and OS and security updates.
          </div>
        </div>{" "}
        <div className="intro-sub-wrapper">
          <div className="intro-icon">
            <TbRulerMeasure size={30} />
          </div>
          <div className="intro-text">Durable design that's built to last.</div>
        </div>
      </div>
      <div className="intro-last-container">
        <div className="intro-lwrapper">
          <div className="intro-licon">
            <IoPlayCircleOutline size={27} style={{color: "#3665d1"}} />{" "}
          </div>
          <div className="intro-ltext">Meet the phone</div>
        </div>{" "}
        <div className="intro-lwrapper">
          <div className="intro-licon">
            <Md3dRotation size={26} style={{color: "#3665d1"}} />
          </div>
          <div className="intro-ltext">Explore in 3D</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
