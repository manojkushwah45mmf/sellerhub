import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import count_info from "../images/circle_graph.png";
import user_photo from "../images/seller_girl_image.png";
import customerorder from "../images/customer_placeorder.png";
import deliverproduct from "../images/deliver_product.png";
import paid_sells from "../images/seller_2.png";
import digitone from "../images/digit_1.png";
import digittwo from "../images/digit_2.png";
import digitthree from "../images/digit_3.png";
import digitfour from "../images/digit_four.png";



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
                <img src={user_photo} alt="" />
              </div>
              <div className="mt-4">
                <Row>
                  <Col lg={3}>
                    <img src={digitone} alt="" />
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
                <img src={customerorder} alt="" />
              </div>
              <div className="mt-4">
                <Row>
                  <Col lg={3}>
                    <img src={digittwo} alt="" />
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
        <div className="mt-5">
          <Row>
            <Col lg={6}>
              <div className="mt-3">
                <img src={deliverproduct} alt="" />
              </div>
              <div className="mt-4">
                <Row>
                  <Col lg={3}>
                    <img src={digitthree} alt=""/>
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
                <img src={paid_sells} alt="" />
              </div>
              <div className="mt-4">
                <Row>
                  <Col lg={3}>
                    <img src={digitfour} alt="" />
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
