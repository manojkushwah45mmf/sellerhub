import React from "react";
import Header from "../Common/Header";
import { Row, Col } from "react-bootstrap";
import Areachart from "./chart/Areachart";
import image_url from "../Common/images";

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Row>
        <Col lg={9}>
          <div className="p-3">
            <Row className="border_radius_line">
              <Col lg={4}>
                <div className="p-3">
                  <p className="order_text">Orders</p>
                  <div className=" ms-3 d-flex justify-contnet -between">
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
                 <img src={image_url.service_provide} alt=""/>
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
                <Row className="border_radius_line">
                  <Col lg={6}>
                    {" "}
                    <div className=" text-center p-3">
                      <div className="mt-5">
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
                      <div className="mt-5">
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
          </div>
        </Col>
        <Col lg={3}> visit this area</Col>
      </Row>
    </div>
  );
};

<Header />;

export default Dashboard;
