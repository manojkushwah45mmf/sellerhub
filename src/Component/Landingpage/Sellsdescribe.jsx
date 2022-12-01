import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import image_url from "../Common/images";



const Sellsdescribe = () => {
  return (
    <div>
      <Container>
        <div className="mt-5">
          <Row>
            <Col lg={6}>
              <div className="sellers_descriptions">
                <h3>How to Sell on Shawkeen</h3>
              </div>
              <div className="mt-3">
                <img src={image_url.user_photo} alt="" />
              </div>
              <div className="mt-4">
                <Row>
                  <Col lg={3}>
                    <img src={image_url.digitone} alt="" />
                  </Col>
                  <Col lg={9}>
                    <div className="seller_services">
                      <h5>Become a seller</h5>
                      <p>
                        Create an account and list your products on Shawkeen.
                        All you need to set up your account is your GST/PAN
                        information and an active bank account.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6}>
              <div className="mt-5">
                <img src={image_url.customerorder} alt="" />
              </div>
              <div className="mt-4">
                <Row>
                  <Col lg={3}>
                    <img src={image_url.digittwo} alt="" />
                  </Col>
                  <Col lg={9}>
                    <div className="seller_services">
                      <h5>Customers place orders</h5>
                      <p>
                        Create an account and list your products on Shawkeen.
                        All you need to set up your account is your GST/PAN
                        information and an active bank account.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div className="mt-5 mb-5">
          <Row>
            <Col lg={6}>
              <div className="mt-3">
                <img src={image_url.deliverproduct} alt="" />
              </div>
              <div className="mt-4">
                <Row>
                  <Col lg={3}>
                    <img src={image_url.digitthree} alt="" />
                  </Col>
                  <Col lg={9}>
                    <div className="seller_services">
                      <h5>Deliver your product</h5>
                      <p>
                        Create an account and list your products on Shawkeen.
                        All you need to set up your account is your GST/PAN
                        information and an active bank account.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={6}>
              <div className="mt-5">
                <img src={image_url.paid_sells} alt="" />
              </div>
              <div className="mt-4">
                <Row>
                  <Col lg={3}>
                    <img src={image_url.digitfour} alt="" />
                  </Col>
                  <Col lg={9}>
                    <div className="seller_services">
                      <h5>You get paid for your sales</h5>
                      <p>
                        Create an account and list your products on Shawkeen.
                        All you need to set up your account is your GST/PAN
                        information and an active bank account.
                      </p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Sellsdescribe;
