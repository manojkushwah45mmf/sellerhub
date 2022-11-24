import React from "react";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import Registercomponent from "./Registercomponent";
import "./Home.css";
import Sellsdescribe from "./Sellsdescribe";
import Footer from "../Common/Footer";
import image_url from "../Common/images";




const Home = () => {
  return (
    <div className="mt-3">
      <div className="banner_show">
        <Container>
          <div className="p-0 top_header">
            <img src={image_url.side_logo} alt="" width={130} />
            <div>
              <Button className="login_seller_btn_1" size="lg">
                Login for Existing Sellers{" "}
              </Button>
            </div>
          </div>
          <div className="mt-5 position-relative">
            <Container>
              <Row>
                <Col lg={8}>
                  <div className="bg-box">
                    <h1 className="shopping_app">
                      Sell your products on India's <br></br>
                      Best Team-Shopping App
                    </h1>
                    <h3 className="mt-3 shwakeen_today">
                      Become a seller on Shawkeen today !
                    </h3>
                    <Form.Group
                      className="mt-5 pass_value"
                      controlId="formBasicEmail"
                    >
                
                      <Form.Control
                        type="text"
                        size="lg"
                        placeholder="Enter 10-digit mobile number here"
                      />
                    
                      <div className="register_click">
                        <Button className="regis_btn">REGISTER NOW</Button>
                      </div>
                    </Form.Group>
                  </div>
                </Col>
                <Col lg={4}></Col>
              </Row>
            </Container>
          </div>
        </Container>
      </div>
      <Registercomponent />
      <Sellsdescribe />
      <Footer />
    </div>
  );
};

export default Home;
