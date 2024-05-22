import React, { useContext } from "react";
import Card from "react-bootstrap/card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import CartContext from "../../store/CartContext";
import { Link, Navigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import Login from "./Login";

const MusicComponent = () => {
  const modalCntxt = useContext(CartContext);

  const tokenId = localStorage.getItem("token-ecom");
  const productsArr = [
    {
      id: 23,
      quantity: 3,
      title: "Hoodie",
      price: 12,
      imageUrl:
        "https://rukminim2.flixcart.com/image/832/832/kf0087k0/sweatshirt/u/g/p/xl-hoodsweat-feather-black-smartees-original-imafvk3zzzmbz3p8.jpeg?q=70&crop=false",
    },

    {
      id: 34,
      quantity: 1,
      title: "Blue shirt",
      price: 6,
      imageUrl:
        "https://rukminim2.flixcart.com/image/832/832/xif0q/shirt/k/h/k/40-11895996-roadster-original-imafvtvzncggbsvk-bb.jpeg?q=70&crop=false",
    },

    {
      id: 56,
      quantity: 5,
      title: "Yellow Cotton ",
      price: 5,
      imageUrl:
        " https://rukminim2.flixcart.com/image/832/832/l4d2ljk0/shirt/e/h/d/-original-imagfaekytkyxjhg.jpeg?q=70&crop=falseg",
    },
    {
      id: 12,
      quantity: 2,
      title: "Marron Shirt",
      price: 7.5,
      imageUrl:
        "https://assets.ajio.com/medias/sys_master/root/20240319/L2zt/65f9128d05ac7d77bbc43f15/-473Wx593H-467162071-maroon-MODEL.jpg",
    },
  ];
  let id = 1;

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

                      <Image
                        src={i.imageUrl}
                        alt="not present"
                        className="w-50 mb-2"
                      />

                      <div className="d-flex justify-content-around">
                        <h5>${i.price}</h5>

                        {!tokenId && (
                          <Link to={"/login"}>
                            {" "}
                            <p>Login to view more</p>
                          </Link>
                        )}
                        {tokenId && (
                          <Link to={"/product/" + id++}>
                            <p>View More</p>
                          </Link>
                        )}
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
