import React from "react";
import "./storeNewNow.css";

const NNStore: React.FC = () => {
    return (
        <div className="new-container" >
            <div className="new-photo-container3">
                <div className="new-left-container">
                    <div className="new-left-header1">New</div>
                    <div className="new-left-header2"> Pixel 9 Pro <br />with Gemini</div>
                    <div className="new-left-header1">All pro. Pure magic. Now in two sizes.</div>
                    <div className="new-left-header1">(Stock subject to availability with the retailer)</div>
                    <div className="new-left-button">Learn more</div>
                </div>

                <img src="/images/p24.webp" alt="p9 photo" />
            </div>
            <div className="new-photo-container3">
                <div className="new-left-container">
                    <div className="new-left-header1">New</div>
                    <div className="new-left-header2">Pixel 9<br /> with Gemini </div>
                    <div className="new-left-header1">A phone full of firsts.</div>
                    <div className="new-left-button">Learn more</div>
                </div>

                <img src="/images/p25.webp" alt="p9 photo" />
            </div>
            <div className="new-photo-container">
                <div className="new-photo-wrapper">
                    <div className="new-header1">New</div>
                    <div className="new-header2">Pixel 9 Pro Fold<br />with Gemini </div>
                    <div className="new-header3"> An epic display of Google AI.
                    </div>
                    <div className="new-button">Learn more</div>
                    <img src="/images/p27.webp" alt="p9 photo" />
                </div>
                <div className="new-photo-wrapper">
                <div className="new-header1">New</div>
                    <div className="new-header2">Pixel 8a <br/> with Gemini </div>
                    <div className="new-header3"> Delightful. Powerful. AI-full. <br/> (Stock subject to availability with the retailer)
                    </div>  

                    <div className="new-button">Learn more</div>
                    <img src="/images/p26.webp" alt="p9 photo" />
                </div>
            </div>
        </div>
    )
}

export default NNStore;