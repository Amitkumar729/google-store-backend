import React from "react";
import "./homeAbout.css"

const HomeAbout: React.FC = () => {
    return (
        <div className="home-about-container" >

            <div className="hb-left-container">
                <div className="hb-text">Country Availability</div>
                <div className="hb-text">Disability support</div>
                <div className="hb-text">Repairs</div>
            </div>
            <div className="hb-right-container">
                <div className="hb-text">Help Center</div>
                <div className="hb-text">Contact us</div>
                <div className="hb-text">Device recycling</div>
            </div>

        </div>
    )
}

export default HomeAbout;