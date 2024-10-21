import React from "react";
import "./performance.css";

const Performance: React.FC = () => {
  return (
    <div className="performance-container">
      <div className="performance-header1">Safety and security</div>
      <div className="performance-header2">
        Pixel helps protect <br /> you and your info.
      </div>
      <div className="performance-wrapper">
        <div className="performance-top">
          <img src="/images/performance.webp" />
        </div>
        <div className="performance-bottom">
          <img src="/images/security2.png" />
          <img src="/images/security3.png" />
        </div>
        <div className="performance-top">
          <img src="/images/performance.webp" />
        </div>
      </div>
    </div>
  );
};

export default Performance;
