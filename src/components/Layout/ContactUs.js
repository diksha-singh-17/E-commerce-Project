import React, { useRef } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Header from "../Header/Header";
import Footer from "./Footer";

const ContactUs = () => {
  const nameInput = useRef();
  const emailInput = useRef();
  const numberInput = useRef();

  const handleFormData = async (e) => {
    e.preventDefault();
    const usersInfo = {
      name: nameInput.current.value,
      email: emailInput.current.value,
      phoneNumber: numberInput.current.value,
    };
    console.log(nameInput.current.value);
    const response = await fetch(
      "https://sharpener-project-d2242-default-rtdb.firebaseio.com/userInfo.json",
      {
        method: "POST",
        body: JSON.stringify(usersInfo),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <Header />

      <div className="d-flex  align-items-center flex-column mb-4">
        <div>
          <h1 className="mb-4">
            For any query, <b>Contact Us!</b>
          </h1>
        </div>

        <div>
          <Form>
            <Form.Group className="mb-4" controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                ref={nameInput}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailInput}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPhone">
              <Form.Label>Phone No.</Form.Label>
              <Form.Control
                type="number"
                placeholder="Phone No."
                ref={numberInput}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleFormData}>
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
