import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Modal, Tab } from "react-bootstrap";

import '../Navbar/Navbar.css'

import SignUpForm from "../SignupForm/SignupForm";
import LoginForm from "../LoginForm/LoginForm";
import Button from "../Button/Button";

import Auth from "../../utils/auth";

const AppNavbar = () => {
  // set modal display state
  const [showModal, setShowModal] = useState(false);
  const [button, setButton] = useState(true);

  return (
    <>
      <Navbar className="navbar" bg="dark" variant="dark" expand="lg">
        <Container fluid className="navbar-container">
          <Navbar.Brand as={Link} to="/">
            FabriVerse
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse id="navbar">
            <Nav className="ml-auto">
              <Nav.Link className="nav-item"  as={Link} to="/">
                Home
              </Nav.Link>
              {/* if user is logged in show saved books and logout */}
              {Auth.loggedIn() ? (
                <>
                  <Nav.Link className="nav-item" as={Link} to="/saved">
                    See Your Saved Request
                  </Nav.Link>
                  <Nav.Link className="nav-item"  onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link className="nav-item"  onClick={() => setShowModal(true)}>
                  Login/Sign Up
                </Nav.Link>
              )}
              {button && <Button buttonStyle="btn--outline">Login/Signup</Button>}
            </Nav>
          </Navbar.Collapse>
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
                  <Nav.Link eventKey="login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="signup">Sign Up</Nav.Link>
                </Nav.Item>
              </Nav>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <LoginForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
              <Tab.Pane eventKey="signup">
                <SignUpForm handleModalClose={() => setShowModal(false)} />
              </Tab.Pane>
            </Tab.Content>
          </Modal.Body>
        </Tab.Container>
      </Modal>
    </>
  );
};

export default AppNavbar;
