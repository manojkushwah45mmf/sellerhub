import React from "react";
import { Row, Col } from "react-bootstrap";

const Dasboardlistcomponent = () => {
  return (
    <div className=" border_radius_line">
      <div className="p-4 ms-3">
        <p className="order_text">Listings</p>
        <Row>
        
          <Col lg={{ span: 2, offset: 1 }} >
            <h1 className="list_digit">46</h1>
            <span>Active</span>
          </Col>
          <Col lg={2}>
            {" "}
            <h1 className="list_digit">500</h1>
            <span>Ready for Activation</span>
          </Col>
          <Col lg={2}>
            {" "}
            <h1 className="list_digit">300</h1>
            <span>Inactive</span>
          </Col>
          <Col lg={2}>
            {" "}
            <h1 className="list_digit">44125</h1>
            <span>Out of Stock</span>
          </Col>
          <Col lg={2}>
          {" "}
          <h1 className="list_digit">90</h1>
          <span>Out of Stock</span>
        </Col>
         
        </Row>
      </div>
    </div>
  );
};

export default Dasboardlistcomponent;
