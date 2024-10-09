import React from "react";
import "./newNow.css";

const NewNow: React.FC = () => {
    return (
        <div className="new-container" >
            <div className="new-header">New. Now. Wow.</div>
            <div className="new-photo-container">
                <div className="new-photo-wrapper">
                    <div className="new-header1">Pixel 9 pro and Pro XL</div>
                    <div className="new-header2">All pro. <br /> Pure magic. </div>
                    <div className="new-header3"> (Stock subject to availability with the retailer) </div>
                    <div className="new-button">Learn more</div>
                    <img src="/images/p9.webp" alt="p9 photo" />
                </div>
                <div className="new-photo-wrapper">
                    <div className="new-header1">Pixel 9</div>
                    <div className="new-header2">A phonr full <br /> of firsts. </div>

                    <div className="new-button">Learn more</div>
                    <img src="/images/p10.webp" alt="p9 photo" />
                </div>
            </div>
            <div className="new-photo-container2">
                <div className="new-header1">Pixel 9 Pro Fold</div>
                <div className="new-header2">An epic display of <br /> Google AI. </div>

                <div className="new-button">Learn more</div>
                <img src="/images/p11.jpg" alt="p9 photo" />
            </div>
            <div className="new-photo-container">
                <div className="new-photo-wrapper">
                    <div className="new-header1">Pixel Watch 3</div>
                    <div className="new-header2">Goals. Guidance.<br />Gorgeous. </div>
                    <div className="new-header3"> (Stock subject to availability with the retailer) </div>
                    <div className="new-button">Learn more</div>
                    <img src="/images/p12.webp" alt="p9 photo" />
                </div>
                <div className="new-photo-wrapper">
                    <div className="new-header1">Pixel Buds Pro 2</div>
                    <div className="new-header2">Light ears ahead.</div>

                    <div className="new-button">Learn more</div>
                    <img src="/images/p13.webp" alt="p9 photo" />
                </div>
            </div>
            <div className="new-photo-container3">
                <div className="new-left-container">
                    <div className="new-left-header1">Nest Cam (battery)</div>
                    <div className="new-left-header2"> Peace of mind in <br /> more places. </div>
                    <div className="new-left-button">Learn more</div>
                </div>

                <img src="/images/p14.png" alt="p9 photo" />
            </div>
            <div className="new-photo-container">
                <div className="new-photo-wrapper">
                    <div className="new-header1">Nest Mini (2nd gen)</div>
                    <div className="new-header2">Still mini. Even <br />more mighty. </div>
                    <div className="new-button">Learn more</div>
                    <img src="/images/p9.webp" alt="p9 photo" />
                </div>
                <div className="new-photo-wrapper">
                    <div className="new-header1">Nest Audio</div>
                    <div className="new-header2">Amazing sound. At <br/> your command.</div>

                    <div className="new-button">Learn more</div>
                    <img src="/images/p10.webp" alt="p9 photo" />
                </div>
            </div>
        </div>
    )
}

export default NewNow;