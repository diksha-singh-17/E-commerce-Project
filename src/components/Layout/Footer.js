import React from "react";
import Nav from "react-bootstrap/Nav";
const Footer = () => {
  return (
    <>
      <div className="bg-primary text-white d-flex justify-content-between p-4">
        <h1>The Generics</h1>
        <Nav activeKey="/home">
          <Nav.Item>
            <Nav.Link href="https://www.youtube.com/" className="text-white">
              YouTube
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://open.spotify.com/" className="text-white">
              Spotify
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://www.facebook.com/" className="text-white">
              FaceBook
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </>
  );
};

export default Footer;
