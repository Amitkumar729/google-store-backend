import React from "react";
import "./banner.css";
const Banner = () => {
  return (
    <div className="banner-contaiiner">
      <div className="banner-main-header">
        <div className="banner-header">
          <h2>Oh hi, Gemini</h2>
        </div>
        <div className="banner-subheader1">
          Meet the new Pixel 9 Pro XL, Pixel 9 Pro, Pixel 9, and Pixel 9 Pro
        </div>
        <div className="banner-subheader2">Fold with Gemini.</div>
        <div className="banner-subheader3">
          (Stock subject to availability with the retailer)
        </div>
        <div className="browse-phone-button">Browse phones</div>
      </div>
      <div className="banner-photo">
        <img src="/images/banner.webp" alt="photos" />
      </div>
    </div>
  );
};

export default Banner;
