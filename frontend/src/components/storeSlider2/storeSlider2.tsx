import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./storeSlider2.css";

const StoreSlide2: React.FC = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="ss2-container">
            <Carousel
                swipeable={true}
                draggable={true}
                showDots={true}
                responsive={responsive}
                ssr={true}
                infinite={true}
                autoPlay={false}
                keyBoardControl={true}
                customTransition="transform 300ms ease-in-out"
                transitionDuration={300}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >

                <div className="ss2-slide">
                    <img src="/images/sl1.png" alt="sdfdsfs" />
                </div>
                <div className="ss2-slide">
                    <img src="/images/sl2.png" alt="sdfdsfs" />
                </div>
                <div className="ss2-slide">
                    <img src="/images/sl3.png" alt="sdfdsfs" />
                </div>
                <div className="ss2-slide">
                    <img src="/images/sl4.png" alt="sdfdsfs" />
                </div>

            </Carousel>
        </div>
    );
}

export default StoreSlide2;