import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./highlight.css";

const phones = [
  //   { id: 1, name: "Photographers, welcome to the photo.", video: "/videos/v1.mp4" },
  {
    id: 2,
    name: "Photographers, welcome to the photo.",
    video: "/videos/v2.mp4",
  },
  {
    id: 3,
    name: "You imagine it. Gemini cerates it.",
    video: "/videos/v3.mp4",
  },
  { id: 4, name: "Add more photos to your photos.", video: "/videos/v4.mp4" },
];

// Define responsive settings for the carousel
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
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

const HighLight: React.FC = () => {
  return (
    <div className="highlight-container">
      <div className="highlight-header">
        Gemini built in, for more <br /> AI-mazing.
      </div>
      <div className="highlight-wrapper">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={300}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {phones.map((phone) => (
            <div key={phone.id} className="highlight-video-container">
              <video autoPlay muted loop>
                <source src={phone.video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <p>{phone.name}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default HighLight;
