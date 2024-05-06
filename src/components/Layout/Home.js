import React from "react";
import Button from "react-bootstrap/esm/Button";
import Header from "../Header/Header";
import Title from "./Title";
import Footer from "./Footer";

const Home = () => {
  const musicElements = [
    { date: "Jul16", place: "DETROIT, MI", stage: "DTE ENERGY MUSIC THEATRE" },
    { date: "JUL19", place: "TORONTOON", stage: "BUDWEISER STAGE" },
    { date: "JUL22", place: "BRISTOW, VA", stage: "JIGGY LUBE LIVE" },
    { date: "AUG 1", place: "PHOENIX, AZ", stage: "AK-CHIN PAVILION" },
    { date: "AUG 2", place: "LAS VEGAS, NV", stage: "T-MOBILE ARENA" },
    { date: "AUG 7", place: "CONCORD, CA", stage: "CONCORD PAVILION" },
  ];
  return (
    <>
      <Header />
      <Title />
      <div className="text-center">
        <h1>Tours</h1>
        <div>
          {musicElements.map((i) => {
            return (
              <div className="d-flex justify-content-around m-2  border-bottom">
                <h2>{i.date}</h2>
                <p>{i.place}</p>
                <p>{i.stage}</p>
                <Button variant="info" className="text-white">
                  Buy Tickets
                </Button>
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
