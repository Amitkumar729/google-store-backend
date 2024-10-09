import React from "react";
import "./signup.css";

const Signup: React.FC = () => {
    return (
        <div className="singup-container" > 
        <div className="signup-wrapper">
            <div className="signup-logo">
                <img src="/images/tag-logo.svg" />
            </div>
            <div className="signup-text">

           <h3> Get news, offers, cart reminders, <br/> personalised emails, and surveys  <br/> from the Google Store.</h3>

            </div>
            <div className="signup-button">Sign up</div>
            </div> 
        </div>
    )
}



export default Signup;