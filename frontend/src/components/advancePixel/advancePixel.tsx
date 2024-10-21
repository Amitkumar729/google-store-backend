import React from "react";
import "./advancePixel.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const images = [
  { id: 1, image: "/images/ap1.png" },
  { id: 2, image: "/images/ap2.png" },
  { id: 4, image: "/images/ap4.png" },
  { id: 4, image: "/images/ap5.png" },
  { id: 3, image: "/images/ap4.png" },
  { id: 4, image: "/images/ap6.png" },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const AdvancePixel: React.FC = () => {
  return (
    <div className="apxl-container">
      <div className="apxl-header1">Advanced Pixel Camera</div>
      <div className="apxl-header2">
        Beyond brilliant <br /> from front to back.
      </div>
      <div className="apxl-header3">
        The award-winning Pixel Camera takes stunning photos and videos in{" "}
        <br /> any light – from super close up to really far away.
      </div>
      <div className="apxl-wrapper">
        <img src="/images/ap7.webp" />
      </div>
      <div className="apxl-header4">
        Real Tone represents the nuances of skin tones beautifully, <br />{" "}
        authentically and accurately in photos and video.
      </div>
    </div>
  );
};

export default AdvancePixel;
