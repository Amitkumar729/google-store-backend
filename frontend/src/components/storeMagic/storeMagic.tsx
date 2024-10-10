import React from "react";
import "./storeMagic.css";

const StoreMagic: React.FC = () => {
    return (
        <div className="sm-parent-container">
            <div className="sm-container" >
                <div className="sm-wrapper">
                    <div className="sm-headers">
                        <div className="sm-header1">Make magic happen with Pixel.</div>
                        <div className="sm-header2">Pixel phones have advanced AI features that make it easy to  create amazing photos and  <br /> videos, get more done and keep your info safe.
                        </div>
                    </div>
                    <div className="sm-video-container">
                        <div className="sm-video-left">
                            <div className="sm-video-text1">
                                Extraordinary camera. Effortless editing.</div>
                            <div className="sm-video-text2">The award-winning Pixel Camera reveals vibrant detail in any light, and helps you make custom edits with a few taps.</div>
                        </div>
                        <div className="sm-video-wrapper">
                            <video width="800" autoPlay muted loop >
                                <source src="/videos/v1.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>


                    <div className="sm-video-container2">
                        <div className="sm-video-wrapper2">
                            <video className="sm-video" autoPlay muted loop>
                                <source src="/videos/v2.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className="sm-video-right">
                                <div className="sm-video2-text1">Extraordinary camera. Effortless editing.</div>
                                <div className="sm-video2-text2">The award-winning Pixel Camera reveals vibrant detail in any light, and helps you make custom edits with a few taps.</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default StoreMagic;