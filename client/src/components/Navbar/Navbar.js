import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../components/Navbar/Navbar.css";

import { FaAccusoft } from "react-icons/fa";

import SignUp from "../../pages/Signup/Signup";

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

  // handles login and logout
  function appLogout() {
    if (Auth.loggedIn()) {
      return (
        <Link to="#" className="nav-links" onClick={Auth.logout}>
          Logout
        </Link>
      );
    } else {
      return (
        <Link to="/login" className="nav-links">
          Login
        </Link>
      );
    }
  }

  return (
    <>
      <div class="custom-shape-divider-top-1638499114">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div>
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
                About Us
              </Link>
            </li>
            <li className="nav-item">
              {appLogout()}
              {/* create method for logout */}
            </li>
            <li>
              {Auth.loggedIn() ? (
                ""
              ) : (
                <Link
                  to="/signup"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Sign Up
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default AppNavbar;
