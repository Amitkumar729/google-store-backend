import React, { useState } from "react";
import "./pixel.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlineArrowRight } from "react-icons/ai";

const Pixel: React.FC = () => {
    const [selectedColor, setSelectedColor] = useState("peonyImg");
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState<"left" | "right" | "">("");


    const slideImages = {
        peonyImg: [
            "/phoneImages/peony1.png",
            "/phoneImages/peony2.png",
            "/phoneImages/peony3.png"
        ],
        winterGreenImg: [
            "/phoneImages/winterGreen1.png",
            "/phoneImages/winterGreen2.png",
            "/phoneImages/winterGreen3.png"
        ],
        porcelainImg: [
            "/phoneImages/porcelain1.png",
            "/phoneImages/porcelain2.png",
            "/phoneImages/porcelain3.png"
        ],
        obsidianImg: [
            "/phoneImages/obsidian1.png",
            "/phoneImages/obsidian2.png",
            "/phoneImages/obsidian3.png"
        ]
    };

    const colorOptions = [
        { id: "peonyImg", color: "#FF5F7E" }, // Pink color
        { id: "winterGreenImg", color: "#d8ebd8" }, // Green color
        { id: "porcelainImg", color: "#E1E1E1" }, // Light gray
        { id: "obsidianImg", color: "#2D2D2D" }, // Dark black
    ];

    // Handle color click
    const handleColorClick = (colorId: string) => {
        setSelectedColor(colorId);
        setCurrentImageIndex(currentImageIndex);
    };

    // Handle next/previous image
    const handleNext = () => {
        setSlideDirection("right");
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === slideImages[selectedColor].length - 1 ? 0 : prevIndex + 1
            );
            setSlideDirection("");
        }, 300);
    };

    const handlePrev = () => {
        setSlideDirection("left");
        setTimeout(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === 0 ? slideImages[selectedColor].length - 1 : prevIndex - 1
            );
            setSlideDirection("");
        }, 300);
    };

    return (
        <div className="p-container">
            <div className="p-head-wrapper">
                <div className="p-header">
                    <div className="p-lefth">
                        <h2>Pixel</h2>
                        <h4>Overview</h4>
                        <h4>Tech specs</h4>
                        <h4>Compare</h4>
                    </div>
                    <div className="p-righth">
                        Add to cart
                    </div>
                </div>
            </div>
            <div className="p-wrapper">
                <div className="p-left-container">
                    <div className="p-header1">A phone full of <br /> firsts.</div>
                    <div className="p-header2">All kinds of incredible. With Gemini, your built-in AI assistant.</div>
                    <div className="p-button">Add to cart</div>


                    <div className="p-colors">
                        {colorOptions.map((option) => (
                            <div
                                key={option.id}
                                className={`p-color-outer ${selectedColor === option.id ? "active" : ""}`}
                                onClick={() => handleColorClick(option.id)}
                            >
                                <div className="p-color-inner" style={{ backgroundColor: option.color }}></div>
                            </div>
                        ))}
                    </div>

                    <div className="p-color-text">
                        <b>Color:</b> {selectedColor.replace("Img", "")}
                    </div>
                </div>

                <div className="p-right-container">
                    <div className="p-right-wrapper">

                        <img
                            src={slideImages[selectedColor][currentImageIndex]}
                            alt="Phone"
                            className={`p-image ${slideDirection === "right" ? "slide-right" : ""} ${slideDirection === "left" ? "slide-left" : ""}`}

                        />
                        <div className="p-slide-navigation">
                            <button className="p-arrow" onClick={handlePrev}><AiOutlineArrowLeft size={25} /></button>
                            <span className="p-image-counter">
                                {currentImageIndex + 1} / {slideImages[selectedColor].length}
                            </span>
                            <button className="p-arrow" onClick={handleNext}><AiOutlineArrowRight size={25} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pixel;
