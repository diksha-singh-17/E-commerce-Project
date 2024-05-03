import React from "react";
import Nav from "react-bootstrap/Nav";
import Cart from "./Cart";

const Header = () => {
  return (
    <>
      <Nav
        className="justify-content-center bg-dark fw-bold p-2"
        activeKey="/home"
        as="ul"
      >
        <Nav.Item>
          <Nav.Link href="/home" as="li" className="text-white ">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1" as="li" className="text-white">
            Store
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2" as="li" className="text-white">
            About
          </Nav.Link>
        </Nav.Item>
        <Cart />
      </Nav>
    </>
  );
};

export default Header;
