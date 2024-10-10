import React from "react";
import "./storePhoto.css";

const StorePhoto: React.FC = () => {
    return (
        <div className="sp-container" >
            
            <div className="sp-photo-container">
                <div className="sp-photo-wrapper">
                    <div className="sp-header1">New</div>
                    <div className="sp-header2">Pixel helps protect you<br />and your info. </div>
                    <div className="sp-header3"> Crisis alerts and Emergency SOS help to keep you one step <br/> ahead.2 And the Titan M2 security chip helps to keep your <br/>  personal info and data safe.
                    </div>
                    <div className="sp-button">Learn more</div>
                    <img src="/images/p28.jpg" alt="p9 photo" />
                </div>
                <div className="sp-photo-wrapper">
                <div className="sp-header1">New</div>
                    <div className="sp-header2">Built to last. And last. <br/> And last. </div>
                    <div className="sp-header3"> Pixel comes with seven years of OS and security updates, plus <br/>  regular Pixel Drops.4 And  it stands up to splashes, scratches and <br/>  drops.5
                    </div>  

                    <div className="sp-button">Learn more</div>
                    <img src="/images/p29.webp" alt="p9 photo" />
                </div>
            </div>
        </div>
    )
}

export default StorePhoto;