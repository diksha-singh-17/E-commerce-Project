import React from "react";
import Nav from "react-bootstrap/Nav";
import Cart from "./Cart";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Nav
        className="justify-content-center bg-dark fw-bold p-2"
        activeKey="/home"
        as="ul"
      >
        <Nav.Item>
          <Nav.Link href="/home" as="li">
            <NavLink to="/home" className="text-decoration-none text-white">
              Home
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="/store" as="li">
            <NavLink className="text-decoration-none text-white" to="/store">
              Store
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link as="li">
            <NavLink to="/about" className="text-decoration-none text-white">
              About
            </NavLink>
          </Nav.Link>
        </Nav.Item>
        <Cart />
      </Nav>
    </>
  );
};

export default Header;
