import React from "react";
import "./footer.css"
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookBoxFill } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";

const Footer: React.FC = () => {
    return (
        <div className="footer-container" >

            <div className="footer-left">
                <div className="footer-icon"><FaXTwitter size={18} /></div>
                <div className="footer-icon"><FaInstagram size={18} /></div>
                <div className="footer-icon"><RiFacebookBoxFill size={18} /></div>
                <div className="footer-icon"><FaYoutube size={18} /></div>
                <div className="footer-icon"><IoLogoTiktok size={18} /></div>
            </div>
            <div className="footer-right">
                <div className="footer-text">  <img src="/images/india.png" alt="inidal png photo" style={{ width: "20px" }} /> India</div>
                <div className="footer-text">privacy</div>
                <div className="footer-text">Google Nest Commitment to Privacy</div>
                <div className="footer-text">Sales Terms</div>
                <div className="footer-text">Terms of services</div>

            </div>
        </div>
    )
}

export default Footer;