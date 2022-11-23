import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import play_store from "../images/playstore.png";
import app_store from "../images/appstore.png";
import { Icon } from "@iconify/react";
import logo_set from "../images/whiteset_logo.png";





const Footer = () => {


 
 
 
  return (
   <div>
      <div className="mb-3 footer_bg">
        <Container>
          <Row>
            <Col lg={3}>
              <div className="mt-5 white_logo">
                <h4 className="mb-4">shawkeen</h4>
                <span className="text-light fw-bold"> Address :</span>
                <span className=" text-light ms-2">
                  2972 Westheimer Rd. Santa Ana, Illinois 85486{" "}
                </span>
                <div className="mt-4">
                  <span className="text-light fw-bold">Mobile :</span>
                  <span className=" text-light ms-2">999999999999 </span>
                </div>
                <div className="mt-4">
                  <span className="text-light fw-bold">Email :</span>
                  <span className=" text-light ms-2">example@gmail.com </span>
                </div>
              </div>
            </Col>

            <Col lg={3}>
              <div className="mt-5 footer_link">
                <p>Useful links</p>
                <ul>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              {" "}
              <div className="mt-5 footer_link">
                <p>Useful links</p>
                <ul>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                  <li>Lorem Ipsum</li>
                </ul>
              </div>
            </Col>
            <Col lg={3}>
              <div className="mt-5 footer_link">
                <p>Download Our App</p>
                <div className="link_detail d-flex justify-content-between">
                  <img src={app_store} alt="" width={130} />
                  <div>
                    <img src={play_store} alt="" width={130} />
                  </div>
                </div>
                <div className="mt-4 social_link_detail">
                  <p>Social Media platform</p>
                 <ul>
                    <li>
                      <Icon className="icv" icon="ri:facebook-box-fill" />
                    </li>
                    <li>
                      <li>
                        <Icon
                          className="icv"
                          icon="ant-design:twitter-square-filled"
                        />
                      </li>
                    </li>
                    <li>
                      <Icon className="icv" icon="teenyicons:instagram-solid" />
                    </li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="py-2 text-center">
        ©2021 Shawkeen | All rights reserved
      </div>
    </div>
  );
};

export default Footer;
