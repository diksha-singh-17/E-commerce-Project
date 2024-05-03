import React from "react";
import Button from "react-bootstrap/Button";
import CartComponent from "./CartComponent";
const Cart = () => {
  return (
    <div className="d-flex justify-content-end">
      {/* <Button>Cart</Button> */}
      <CartComponent />
    </div>
  );
};

export default Cart;
