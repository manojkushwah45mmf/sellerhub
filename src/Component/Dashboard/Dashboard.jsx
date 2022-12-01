import React from "react";
import Header from "../Common/Header";
import { Row, Col } from "react-bootstrap";
import Areachart from "./chart/Areachart";
import image_url from "../Common/images";
import Review from "./Review";
import ReactStars from "react-rating-stars-component";

import Dasboardlistcomponent from "./Dasboardlistcomponent";
const Dashboard = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div>
      <Header />
      <Row>
        <Col lg={9}>
          <div className="p-4">
            <Row className="mb-5 p-2 border_radius_line">
              <Col lg={4}>
                <div className="p-3">
                  <p className="order_text">Orders</p>
                  <div className="ms-3 d-flex justify-contnet -between">
                    <img src={image_url.order_new} width={70} alt="" />
                    <div className="ms-4 num_digit">
                      <h4>44125</h4>
                      <p>New Orders</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                <div className="p-3">
                  <div className="mt-5 ms-3 d-flex justify-contnet -between">
                    <img src={image_url.deliverreport} width={70} alt="" />
                    <div className="ms-4 num_digit">
                      <h4>44125</h4>
                      <p>In Transit</p>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4}>
                {" "}
                <div className="p-3">
                  <div className="mt-5 ms-3 d-flex justify-contnet -between">
                    <img src={image_url.service_provide} alt="" />
                    <div className="ms-4 num_digit">
                      <h4>44125</h4>
                      <p>Completed</p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Row className="p-2 border_radius_line">
                  <Col lg={6}>
                    <p className="ms-4 order_text">Returns</p>{" "}
                    <div className=" text-center p-3">
                      <img src={image_url.bagicon} width={70} alt="" />
                      <div className="">
                        <div className="num_digit">
                          <h4>44125</h4>
                          <p>Total Returns</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    {" "}
                    <div className="p-3">
                      <div className=" mt-5">
                        <img src={image_url.bagicon} width={70} alt="" />
                        <div className="num_digit">
                          <h4>44125</h4>
                          <p>Completed</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
              <Col lg={6}>
                <Areachart />
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <div className="p-4 border_radius_line">
                  <p className="payment-choice">Payments</p>

                  <div className="d-flex justify-content-between payment_list">
                    <div>
                      <span className="order_set">New Orders</span>
                      <br />
                      <span className="due_date">Due on Mar 23, 2020</span>
                    </div>
                    <div className="text-end">
                      <h5 className="fw-bold">₹44,125</h5>
                    </div>
                  </div>
                  <div className="mt-5 d-flex justify-content-between payment_list">
                    <div>
                      <span className="order_set">Previous Payments</span>
                      <br />
                      <span className="due_date">Due on Mar 23, 2020</span>
                    </div>
                    <div className="text-end">
                      <h5 className="fw-bold">₹44,125</h5>
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={6}>
                <div className="p-4 border_radius_line">
                  <p className="payment-choice">Seller Rating</p>
                  <div className="d-flex payment_list">
                    <h2 className="rating_show">4.5 </h2>
                    <div>
                      {" "}
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        activeColor="#ffd700"
                      />
                    </div>
                  </div>
                  <span className="due_date">Gold</span>
                  <div className="mt-3 d-flex justify-content-between payment_list">
                    <div>
                      <span className="measurement">Gold = 4.3 - 5.0</span>
                      <br />
                      <span className="measurement">Silver = 3.7 - 4.2</span>
                    </div>
                    <div>
                      <span className="measurement">Gold = 4.3 - 5.0</span>
                      <br />
                      <span className="measurement">Silver = 3.7 - 4.2</span>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="p-1">
            <Dasboardlistcomponent />
          </div>
        </Col>
        <Col lg={3}>
          <Review />
        </Col>
      </Row>
    </div>
  );
};

<Header />;

export default Dashboard;
