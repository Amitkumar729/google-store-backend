import React from "react";
import "./storeSlider3.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const StoreSlider3: React.FC = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="sl3-container">
            <Carousel
                responsive={responsive}
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={3000}
                showDots={true}
                arrows={true}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                removeArrowOnDeviceType={["tablet", "mobile"]}
            >
                <div className="ss3-slide">
                    <img src="/images/sl5.png" alt="sdfdsfs" />
                </div>
                <div className="ss3-slide">
                    <img src="/images/sl6.png" alt="sdfdsfs" />
                </div>
                <div className="ss3-slide">
                    <img src="/images/sl7.png" alt="sdfdsfs" />
                </div>
                <div className="ss3-slide">
                    <img src="/images/sl8.png" alt="sdfdsfs" />
                </div>
            </Carousel>
        </div>
    );
};

export default StoreSlider3;