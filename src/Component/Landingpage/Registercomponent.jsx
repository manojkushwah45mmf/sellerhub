import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import count_info from "../images/circle_graph.png";




 const Registercomponent = () => {
 
 return (
    <div>
      <Container>
        <Row className="mt-4" >
      
          <Col lg={6}>
            <div className="mt-1 sellers_descriptions">
              <h3>Why Sell on Shawkeen?</h3>
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites the word in classical
                literature, discovered the undoubtable source. This book is a
                treatise on the theory of ethics, very popular during the
                Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor
                sit amet..", comes from a line in section 1.10.32.
              </p>
            </div>
            <Button className="mt-3 login_seller_btn">Register Now</Button>
          </Col>
          <Col lg={6}>
            <div className="text-center">
              <img src={count_info} width={400} alt="" />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registercomponent;
