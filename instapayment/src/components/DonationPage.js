import React from "react";
import Container from "react-bootstrap/esm/Container";
import Carousel from "react-bootstrap/Carousel";
import donate from "../assests/donate.jpg";
import quote3 from "../assests/quote3.png";
import quote2 from "../assests/modifiedquote2.png";
import "../modules/module.donationpage.css";

function DonationPage() {
  return (
    <>
      <Container>
        <br />
        <h1>Welcome to The Sparks Foundation Donation Page</h1>
        <div className="imgwrap">
          <Carousel fade data-bs-theme="dark" >
            <Carousel.Item interval={200}>
              <img
                className="d-block w-100 donate"
                src={donate}
                alt="First slide"
              />
            </Carousel.Item>

            <Carousel.Item interval={1000}>
              <img 
                className="d-block w-100" 
                src={quote2} 
                alt="second slide" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
              <img 
                className="d-block w-100"
                src={quote3} 
                alt="Third slide" />
            </Carousel.Item>
          </Carousel>
        </div>
      </Container>
    </>
  );
}

export default DonationPage;
