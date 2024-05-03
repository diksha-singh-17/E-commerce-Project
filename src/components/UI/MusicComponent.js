import React from "react";
import Card from "react-bootstrap/card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

const MusicComponent = () => {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  return (
    <>
      <Card className="text-center p-4">
        <Card.Body>
          <h1>Music</h1>
          <Container>
            <Row className="p-4">
              {productsArr.map((i) => {
                return (
                  <>
                    <Col md={6} key={i.title}>
                      <h1>{i.title}</h1>
                      <Image src={i.imageUrl} alt="not present" />
                      <div className="d-flex justify-content-around">
                        <h5>${i.price}</h5>
                        <Button>Add to Cart</Button>
                      </div>
                    </Col>
                  </>
                );
              })}
            </Row>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default MusicComponent;
