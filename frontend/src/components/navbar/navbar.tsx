import React, { useState, useEffect } from 'react';
import "./navbar.css";
import { IoIosSearch } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineCancel } from "react-icons/md";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);

  const handleNavigation = () => {
    navigate("/");
  };
  const handleStoreNavigation = () => {
    navigate("/store");
  };

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 600 && showNav) {
        setShowNav(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showNav]);

  return (
    <div className='navbar-component'>
      <div className="navbar-wrapper">
        <div className="navbar-left-container">
          <div className="hamburger-icon" onClick={toggleNav}>
            {showNav ? <MdOutlineCancel size={28} /> : <RxHamburgerMenu size={28} />}
          </div>
          <div className="google-icon" onClick={handleNavigation}>
            <img src='/images/google.png' style={{ width: "25px" }} alt="Google" />
          </div>
          <div className="navbar-text" onClick={handleStoreNavigation}>Store</div>
        </div>
        <div className="navbar-right-container">
          <div className="nav-icons">
            <div className="nav-icon"><IoIosSearch size={23} /></div>
            <div className="nav-icon"><FaShoppingCart size={23} /></div>
            <div className="nav-icon"><img src='/images/user.png' style={{ width: "25px" }} alt="User " /></div>
          </div>
        </div>
      </div>
      {showNav && (
        <div className="responsive-nav">
          <div className="responsive-nav-wrapper">
            <img src='/images/p1.webp' />
            <div className="navbar-responsive-text" onClick={handleNavigation}>Store</div>
          </div> <div className="responsive-nav-wrapper">
            <img src='/images/p5.webp' />
            <div className="navbar-responsive-text" onClick={handleNavigation}>Earbuds</div>
          </div> <div className="responsive-nav-wrapper">
            <img src='/images/p4.webp' />
            <div className="navbar-responsive-text" onClick={handleNavigation}>Watches & trackers</div>
          </div> <div className="responsive-nav-wrapper">
            <img src='/images/p1.webp' />
            <div className="navbar-responsive-text" style={{ marginLeft: "7px" }} onClick={handleNavigation}>Accessories</div>
          </div> <div className="responsive-nav-wrapper">
            <img src='/images/google.png' style={{ width: "29px", marginLeft: "15px", marginTop: "9px" }} />
            <div className="navbar-responsive-text" style={{ marginLeft: "13px" }} onClick={handleNavigation}>Support</div>
          </div>
          <div className="break-line"></div>
          <div className="responsive-order">
            <FaShoppingCart size={25} />
            <h3>Orders</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;