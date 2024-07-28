

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";
import style from "./NavbarComp.module.css";
import { useRecoilState } from "recoil";
import { noteAtom } from "../../Atoms/noteAtom";

export default function NavbarComp() {
  let navigate = useNavigate();
  let [notesLength, setNotesLength] = useRecoilState(noteAtom);
  let userToken = localStorage.getItem("userToken");

  function logout() {
    localStorage.removeItem("userToken");
    navigate("/login");
  }

  return (
    <Navbar expand="lg" className="bg-primary">
      <Container>
        <Navbar.Brand>
          <div className="d-flex justify-content-center align-items-center">
            <i className="fa-solid fa-note-sticky text-white fa-xl me-3"></i>
            <h1 className="h3 text-white">Sticky App</h1>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {userToken ? (
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-center align-items-center">
                  <i className="fa-solid fa-box-open text-white position-relative"></i>
                  <h6 className={`position-absolute ${style.iconPos} text-white`}>
                    {notesLength}
                  </h6>
                </div>
                <Nav.Link className="text-white h6" onClick={logout}>
                  Logout
                </Nav.Link>
              </div>
            ) : (
              <>
                <Nav.Link as={Link} to="register" className="text-white h6">
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to="login" className="text-white h6">
                  Login
                </Nav.Link>
              </>
            )}

            <div className="ms-5 d-flex">
              <Nav.Link as={Link} to="#">
                <i className="fa-brands fa-facebook-f text-white"></i>
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                <i className="fa-brands fa-twitter text-white"></i>
              </Nav.Link>
              <Nav.Link as={Link} to="#">
                <i className="fa-brands fa-instagram text-white"></i>
              </Nav.Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
