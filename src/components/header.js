import React from "react";
// import "../styles/navbar.css";
import { BsCart4 } from "react-icons/bs";
import { Container, Nav, Navbar, Badge } from "react-bootstrap";
import logo from "../assets/img/logo.png";

const Header = ({ setShow, size }) => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      bg="light"
      data-bs-theme="light"
    >
      <Container>
        <Navbar.Brand onClick={() => setShow(true)}>
          <img
            alt="logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          MERCADO PRAIA DO SONO
        </Navbar.Brand>
        <Nav>
          <div onClick={() => setShow(false)}>
            <span>
              <BsCart4 size="2rem" />
            </span>
            <Badge bg="danger">{size}</Badge>
          </div>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
