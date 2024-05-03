import React from "react";
import Card from "react-bootstrap/Card";
import MusicComponent from "../UI/MusicComponent";
import Footer from "./Footer";

const Title = () => {
  return (
    <>
      <Card className="text-center bg-secondary p-4">
        <Card.Body className="text-white">
          <h1>The Generics.</h1>
        </Card.Body>
      </Card>
      <MusicComponent />
      <Footer />
    </>
  );
};

export default Title;
