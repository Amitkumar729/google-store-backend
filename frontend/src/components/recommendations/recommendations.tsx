import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./recommendations.css";

const Recommendations: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="rec-container">
      <div className="rec-header">
        <h3>Our Top Recommendations.</h3>
      </div>
      <div className="rec-phones">
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlay={false}
          keyBoardControl={true}
          customTransition="transform 300ms ease-in-out"
          transitionDuration={300}
          containerClass="carousel-container"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          <div className="rec-phone">
            <img src="/images/p1.webp" alt="Phone model 1" />
          </div>
          <div className="rec-phone">
            <img src="/images/p2.webp" alt="Phone model 2" />
          </div>
          <div className="rec-phone">
            <img src="/images/p3.webp" alt="Phone model 3" />
          </div>
          <div className="rec-phone">
            <img src="/images/p4.webp" alt="Phone model 4" />
          </div>
          <div className="rec-phone">
            <img src="/images/p5.webp" alt="Phone model 5" />
          </div>
          <div className="rec-phone">
            <img src="/images/p6.webp" alt="Phone model 6" />
          </div>
          <div className="rec-phone">
            <img src="/images/p7.webp" alt="Phone model 7" />
          </div>
          <div className="rec-phone">
            <img src="/images/p8.webp" alt="Phone model 8" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Recommendations;