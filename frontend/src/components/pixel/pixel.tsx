import React, { useState } from "react";
import "./pixel.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import Footer from "../footer/footer";
import HomeAbout from "../homeAbout/homeAbout";
import AboutPhone from "../aboutPhone/aboutPhone";

type ColorId = "peonyImg" | "winterGreenImg" | "porcelainImg" | "obsidianImg";
type SlideDirection = "left" | "right" | "";

interface ColorOption {
  id: ColorId;
  color: string;
}

interface SlideImages {
  [key: string]: string[];
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Pixel: React.FC = () => {
  const navigate = useNavigate();

  const [selectedColor, setSelectedColor] = useState<ColorId>("peonyImg");
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [slideDirection, setSlideDirection] = useState<SlideDirection>("");
  const [openSnackbar, setOpenSnackbar] = useState<boolean>(false);

  const slideImages: SlideImages = {
    peonyImg: [
      "/phoneImages/peony1.png",
      "/phoneImages/peony2.png",
      "/phoneImages/peony3.png",
      "/phoneImages/peony4.png",
    ],
    winterGreenImg: [
      "/phoneImages/winterGreen1.png",
      "/phoneImages/winterGreen2.png",
      "/phoneImages/winterGreen3.png",
      "/phoneImages/winterGreen4.png",
    ],
    porcelainImg: [
      "/phoneImages/porcelain1.png",
      "/phoneImages/porcelain2.png",
      "/phoneImages/porcelain3.png",
      "/phoneImages/porcelain4.png",
    ],
    obsidianImg: [
      "/phoneImages/obsidian1.png",
      "/phoneImages/obsidian2.png",
      "/phoneImages/obsidian3.png",
      "/phoneImages/obsidian4.png",
    ],
  };

  const colorOptions: ColorOption[] = [
    { id: "peonyImg", color: "#FF5F7E" },
    { id: "winterGreenImg", color: "#d8ebd8" },
    { id: "porcelainImg", color: "#E1E1E1" },
    { id: "obsidianImg", color: "#2D2D2D" },
  ];

  const handleColorClick = (colorId: ColorId): void => {
    setSelectedColor(colorId);
    setCurrentImageIndex(currentImageIndex);
  };

  const handleNext = (): void => {
    setSlideDirection("right");
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === slideImages[selectedColor].length - 1 ? 0 : prevIndex + 1
      );
      setSlideDirection("");
    }, 300);
  };

  const handlePrev = (): void => {
    setSlideDirection("left");
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? slideImages[selectedColor].length - 1 : prevIndex - 1
      );
      setSlideDirection("");
    }, 300);
  };

  const handleAddToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }
      const response = await axios.post(
        "http://localhost:3000/cart/add",
        {
          model: "Pixel",
          color: selectedColor.replace("Img", ""),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Item added to cart", response);
      setOpenSnackbar(true);
    } catch (error: any) {
      if (error.response && error.response.status === 401) {
        navigate("/login");
      }
      console.error("Error adding item to cart", error);
    }
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  return (
    <>
      <div className="p-container">
        <div className="p-head-wrapper">
          <div className="p-header">
            <div className="p-lefth">
              <h2>Pixel</h2>
              <h4>Overview</h4>
              <h4>Tech specs</h4>
              <h4>Compare</h4>
            </div>
            <div className="p-righth" onClick={handleAddToCart}>
              Add to cart
            </div>
          </div>
        </div>
        <div className="p-wrapper">
          <div className="p-left-container">
            <div className="p-header1">A phone full of firsts.</div>
            <div className="p-header2">
              All kinds of incredible. With Gemini, your built-in AI assistant.
            </div>
            <div className="p-button" onClick={handleAddToCart}>
              Add to cart
            </div>

            <div className="p-colors">
              {colorOptions.map((option) => (
                <div
                  key={option.id}
                  className={`p-color-outer ${
                    selectedColor === option.id ? "active" : ""
                  }`}
                  onClick={() => handleColorClick(option.id)}
                >
                  <div
                    className="p-color-inner"
                    style={{ backgroundColor: option.color }}
                  ></div>
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
                className={`p-image ${
                  slideDirection === "right" ? "slide-right" : ""
                } ${slideDirection === "left" ? "slide-left" : ""}`}
              />
              <div className="p-slide-navigation">
                <button className="p-arrow" onClick={handlePrev}>
                  <AiOutlineArrowLeft size={25} />
                </button>
                <span className="p-image-counter">
                  {currentImageIndex + 1} / {slideImages[selectedColor].length}
                </span>
                <button className="p-arrow" onClick={handleNext}>
                  <AiOutlineArrowRight size={25} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <Snackbar
          open={openSnackbar}
          autoHideDuration={1000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity="success"
            sx={{ width: "100%" }}
          >
            Item added to cart successfully!
          </Alert>
        </Snackbar>
      </div>
    </>
  );
};

export default Pixel;
