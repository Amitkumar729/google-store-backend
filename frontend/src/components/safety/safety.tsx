import React from "react";
import "./safety.css";

const Safety: React.FC = () => {
  return (
    <div className="scr-container">
      <div className="scr-header1">Safety and security</div>
      <div className="scr-header2">
        Pixel helps protect <br /> you and your info.
      </div>
      <div className="scr-wrapper">
        <div className="src-top">
          <img src="/images/security1.png" />
        </div>
        <div className="src-bottom">
          <img src="/images/security2.png" />
          <img src="/images/security3.png" />
        </div>
      </div>
    </div>
  );
};

export default Safety;
