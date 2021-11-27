import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";

import { FaAccusoft } from "react-icons/fa";

import SignUp from "../../pages/Signup/Signup";
import Login from "../../pages/Login/Login";

import Auth from "../../utils/auth";

const AppNavbar = () => {
  //  set modal display state
  const [showModal, setShowModal] = useState(false);
  const [click, setClick] = useState(false);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <Navbar className="navbar">
        <Container className="navbar-container">
          <Link to="/" className="navbar-logo">
            F<FaAccusoft />
            briVerse
          </Link>
          {/* <Navbar.Toggle aria-controls="navbar" /> */}
          {/* <Navbar.Collapse id="navbar"> */}
          <Nav className="navbar-links">
            <Link to="/">Make a Request</Link>
            {/* if user is logged in show saved books and logout */}
            {Auth.loggedIn() ? (
              <>
                <Link to="/saved">See Your Requests</Link>
                <Link onClick={Auth.logout}>Logout</Link>
              </>
            ) : (
              <Link onClick={() => setShowModal(true)}>Login/Sign Up</Link>
            )}
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
      {/* set modal data up */}
      <Modal
        size="lg"
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby="signup-modal"
      >
        {/* tab container to do either signup or login component */}
        <Tab.Container defaultActiveKey="login">
          <Modal.Header closeButton>
            <Modal.Title id="signup-modal">
              <Nav variant="pills">
                <Nav.Item>
                  <Link eventKey="login">Login</Link>
                </Nav.Item>
                <Nav.Item>
                  <Link eventKey="signup">Sign Up</Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <Login handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUp handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
