import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Button, Form, InputGroup, Row, Col } from "react-bootstrap";
import Header from "../Common/Header";
import "./listing.css";
import Listingtable from "./Listingtable";
import Addfilter from "./modal/Addfilter";


const Listing = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div>
      <Header />
      <div>
        <div className="p-4 list_filtr_top">
          <h3>Listing</h3>
          <div>
            <ul className="filtr_add_detail">
              <li className="me-2">
                <InputGroup>
                  <InputGroup.Text className="search_list">
                    <Icon icon="il:search" fontSize="26px"></Icon>
                  </InputGroup.Text>
                  <Form.Control
                    className="dashboard_nav_field"
                    type="text"
                    placeholder="Search Something.."
                  />
                </InputGroup>
              </li>
              <li>
                <Button
                  onClick={() => setShow(true)}
                  variant="outline-danger"
                  className="me-3 filtr_btn"
                >
                  FILTER
                </Button>
              </li>
              <li>
                <Button variant="primary" className="add_list_btn">
                  ADD LISTING
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <Row>
          <Col lg="9">
            <div className="p-4 border_radius_line">
              <Row>
                <Col lg={2}>
                  <h1 className="list_digit">46</h1>
                  <span>Active</span>
                </Col>
                <Col lg={3}>
                  {" "}
                  <h1 className="list_digit">500</h1>
                  <span>Ready for Activation</span>
                </Col>
                <Col lg={2}>
                  {" "}
                  <h1 className="list_digit">300</h1>
                  <span>Inactive</span>
                </Col>
                <Col lg={3}>
                  {" "}
                  <h1 className="list_digit">44125</h1>
                  <span>Out of Stock</span>
                </Col>
                <Col lg={2}>
                  {" "}
                  <h1 className="list_digit">90</h1>
                  <span>Low Stock</span>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg="3"></Col>
        </Row>
        <Listingtable />
        <Addfilter show={show} onHide={handleClose} />
       
      </div>
    </div>
  );
};

export default Listing;
