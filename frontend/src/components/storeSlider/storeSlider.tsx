import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./storeSlider.css";
import { useNavigate } from "react-router-dom";

const StoreSlider: React.FC = () => {

    const navigate = useNavigate();

    const phones = [
        { id: 1, name: "Pixel 9 Pro and Pro XL", image: "/images/p1.webp", isNew: true, onClick: () => navigate("/about-phone") },
        { id: 2, name: "Pixel 9", image: "/images/p2.webp", isNew: true, onClick: () => navigate("/about-phone") },
        { id: 3, name: "Pixel 9 Pro Fold", image: "/images/p3.webp", isNew: true },
        { id: 4, name: "Pixel * Pro", image: "/images/p17.webp" },
        { id: 5, name: "Pixel 8", image: "/images/p18.webp" },
        { id: 6, name: "Pixel 7a", image: "/images/p20.webp" },
        { id: 7, name: "Pixel 8a", image: "/images/p17.webp" },
        { id: 8, name: "Compare phones", image: "/images/p21.webp" },
        { id: 9, name: "Pixel cases", image: "/images/p22.webp" }
    ];

    const responsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 1400 }, items: 4 },
        desktop: { breakpoint: { max: 1400, min: 680 }, items: 3 },
        tablet: { breakpoint: { max: 680, min: 500 }, items: 2 },
        mobile: { breakpoint: { max: 500, min: 0 }, items: 1 },
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
                    {phones.map((phone) => (
                        <div
                            key={phone.id}
                            className="rec-phone-wrapper"
                            onClick={phone.onClick}
                        >
                            {phone.isNew && <div className="new-tag-container">New</div>}
                            <div className="rec-phone">
                                <img src={phone.image} alt={phone.name} />
                            </div>
                            <h4>{phone.name}</h4>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    );
};

export default StoreSlider;
