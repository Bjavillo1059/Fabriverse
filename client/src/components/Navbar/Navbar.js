import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../components/Navbar/Navbar.css";

import { FaAccusoft } from "react-icons/fa";

import { Modal, InputGroup, FormControl, Button } from "react-bootstrap";

// import Button from "../../components/Button/Button";
// import { LoginModal } from "../../components/Modal/Login/LoginModal";
import SignUp from "../../components/Signup/Signup";

import Auth from "../../utils/auth";

function AppNavbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/" className="navbar-logo">
            F<FaAccusoft />
            briVerse
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Make A Request
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/login"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Login                            
              </Link>
              </li>
              <li>             
              <Link
                to="/signup"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Sign Up                            
              </Link>
              </li>                
          </ul>
        </div>
      </nav>
    </>
  );
}

export default AppNavbar;
