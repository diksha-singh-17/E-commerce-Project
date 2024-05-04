import React, { useContext } from "react";
import Card from "react-bootstrap/card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import CartContext from "../../store/CartContext";

const MusicComponent = () => {
  const modalCntxt = useContext(CartContext);
  const productsArr = [
    {
      id: 12,
      quantity: 2,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
      id: 23,
      quantity: 3,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
      id: 34,
      quantity: 1,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
      id: 56,
      quantity: 5,
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  const addItemToCartHandler = (title, price, url, quantity, id) => {
    modalCntxt.addItem({
      title: title,
      price: price,
      imageUrl: url,
      quantity: quantity,
      id: id,
    });
  };

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
                        <Button
                          onClick={() => {
                            addItemToCartHandler(
                              i.title,
                              i.price,
                              i.imageUrl,
                              i.quantity,
                              i.id
                            );
                          }}
                        >
                          Add to Cart
                        </Button>
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
