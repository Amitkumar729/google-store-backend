import React from 'react';
import "./faq.css"
import { FaAngleDown } from "react-icons/fa";

const Faq: React.FC = () => {
    return (
        <div className="faq-container">
            <div className="faq-title">
                Frequently asked <br />
                questions.
            </div>
            <div className="faq-questions">
                <div className="faq-question">
                    <p>What can I transfer from my old phone to my new Pixel phone?</p>
                    <FaAngleDown />
                </div>
                <div className="faq-question">
                    <p>Is it easy to transfer data from my old phone to my new Pixel phone?</p>
                    <FaAngleDown />
                </div>
                <div className="faq-question">
                    <p>Are Google apps better on a Pixel phone?</p>
                    <FaAngleDown />
                </div>
            </div>
        </div>
    )
}

export default Faq;