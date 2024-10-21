import React from "react";
import "./aiPhoto.css"


const AiPhoto: React.FC = () => {
  return (
    <div className="ai-container">
      <div className="ai-header1">Ai photo editing</div>
      <div className="ai-header2">Make your photos <br/> extra extraordinary.</div>
      <div className="ai-header3">
        Take amazing photos with the Pixel 9 camera. And with AI, make them <br/>
        better than you can imagine, in ways that you can't believe.
      </div>

      <div className="ai-wrapper">
        <video autoPlay muted loop >
            <source src="/videos/v3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="ai-wrapper2">
            
        </div>
      </div>
    </div>
  );
};

export default AiPhoto;
