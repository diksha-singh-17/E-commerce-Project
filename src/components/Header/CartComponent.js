import React from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const CartComponent = (props) => {
  const cartElements = [
    {
      title: "Colors",
      id: 3,
      price: 100,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",

      quantity: 2,
    },

    {
      id: 2,
      title: "Black and white Colors",

      price: 50,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",

      quantity: 3,
    },

    {
      id: 1,
      title: "Yellow and Black Colors",

      price: 70,

      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",

      quantity: 1,
    },
  ];
  const [show, setShow] = useState(false);
  const [items, setItems] = useState(cartElements);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const removeItemsHandler = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        Cart
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>Item</Col>
            <Col>Price</Col>
            <Col>Quantity</Col>
          </Row>
          <Row>
            {items.map((i) => {
              return (
                <>
                  <Col
                    md={12}
                    key={i.id}
                    className="d-flex justify-content-around h-100 p-2"
                  >
                    <Image
                      src={i.imageUrl}
                      alt="not present"
                      className="w-25 h-25"
                    />
                    <h5>{i.title}</h5>
                    <h5>${i.price}</h5>
                    <h5>{i.quantity}</h5>
                    <div>
                      {" "}
                      <Button
                        variant="danger"
                        onClick={() => removeItemsHandler(i.id)}
                      >
                        Remove
                      </Button>
                    </div>
                  </Col>
                </>
              );
            })}
            <h4>Total:500$</h4>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Purchase
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default CartComponent;
