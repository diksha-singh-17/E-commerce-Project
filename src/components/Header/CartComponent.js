import React, { useContext } from "react";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import CartContext from "../../store/CartContext";

const CartComponent = (props) => {
  const cartCntxt = useContext(CartContext);
  const [cartNewData, setCartNewData] = useState([]);
  const [show, setShow] = useState(false);
  // const [items, setItems] = useState(cartElements);
  const emailId = localStorage.getItem("email-ecom");
  const regex = /([A-Z a-z 0-9])/g;

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
    const extractedData = emailId.match(regex);
    const newEmail = extractedData.join("");
    fetch(
      `https://crudcrud.com/api/8e1de02ebe554c8b9155338b80d82ee1/cart${newEmail}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setCartNewData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //  using the filter method to create a new array excluding the item with the provided id, and then updates the state with the new array.

  const removeItemsHandler = (id) => {
    cartCntxt.deleteItem(id);
    const extractedData = emailId.match(regex);
    const newEmail = extractedData.join("");
    // setCartItems(cartCntxt.items.filter((item) => item.id !== id));
    fetch(
      `https://crudcrud.com/api/8e1de02ebe554c8b9155338b80d82ee1/cart${newEmail}/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => {
        setCartNewData(cartNewData);
      })
      .catch((error) => console.log(error.message));
  };

  const lengthOfArray = cartNewData.length;
  return (
    <>
      <div className="d-flex justify-content-end">
        <Button variant="outline-info" onClick={handleShow}>
          Cart
        </Button>
        <p className="text-info">{lengthOfArray}</p>
      </div>

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
            {cartNewData.map((i) => {
              return (
                <>
                  <Col
                    md={12}
                    key={i._id}
                    className="d-flex justify-content-around h-100 p-2"
                  >
                    <Image
                      src={i.url}
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
                        onClick={() => removeItemsHandler(i._id)}
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
