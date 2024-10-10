import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./storeSlider.css";

const StoreSlider: React.FC = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1400 },
            items: 4,
        },
        desktop: {
            breakpoint: { max: 1400, min: 680 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 680, min: 500 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1,
        },
    };

    return (
        <div className="rec-container">
            <div className="rec-phones">
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
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                >
                    <div className="rec-phone-wrapper">
                        <div className="new-tag-container">New</div>
                        <div className="rec-phone">
                            <img src="/images/p1.webp" alt="Phone model 1" />
                        </div>
                        <h4> Pixel 9 Pro and Pro XL </h4>
                    </div>

                    <div className="rec-phone-wrapper">
                        <div className="new-tag-container">New</div>
                        <div className="rec-phone">
                            <img src="/images/p2.webp" alt="Phone model 2" />
                        </div>
                        <h4> Pixel 9</h4>
                    </div>
                    <div className="rec-phone-wrapper">
                        <div className="new-tag-container">New</div>
                        <div className="rec-phone">
                            <img src="/images/p3.webp" alt="Phone model 3" />
                        </div>
                        <h4> Pixel 9 Pro Fold</h4>
                    </div>
                    <div className="rec-phone-wrapper">
                        <div className="rec-phone">
                            <img src="/images/p17.webp" alt="Phone model 4" />
                        </div>
                        <h4> Pixel * Pro</h4>
                    </div>
                    <div className="rec-phone-wrapper">

                        <div className="rec-phone">
                            <img src="/images/p18.webp" alt="Phone model 5" />
                        </div>
                        <h4> Pixel 8</h4>
                    </div>
                    <div className="rec-phone-wrapper">

                        <div className="rec-phone">
                            <img src="/images/p20.webp" alt="Phone model 6" />
                        </div>
                        <h4> Pixel 7a
                        </h4>
                    </div>
                    <div className="rec-phone-wrapper">

                        <div className="rec-phone">
                            <img src="/images/p17.webp" alt="Phone model 7" />
                        </div>
                        <h4> Pixel 8a
                        </h4>
                    </div>
                    <div className="rec-phone-wrapper">
                        <div className="rec-phone">
                            <img src="/images/p21.webp" alt="Phone model 8" />
                        </div>
                        <h4> Compare phones
                        </h4>
                    </div>
                    <div className="rec-phone-wrapper">
                    <div className="new-tag-container">New</div>
                        <div className="rec-phone">
                            <img src="/images/p22.webp" alt="Phone model 8" />
                        </div>
                        <h4> Pixel cases
                        </h4>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default StoreSlider;