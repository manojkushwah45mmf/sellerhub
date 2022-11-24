import React from "react";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import image_url from "./images";



const Header = () => {
  return (
    <div>
      <Navbar className="header_bg" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={image_url.logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/dashboard" className="nav_link_cl">
                Dashboard
              </Nav.Link>
              <Nav.Link href="#action2" className="nav_link_cl">
                Listing
              </Nav.Link>
              <NavDropdown id="navbarScrollingDropdown" className="nav_link_cl">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" className="nav_link_cl">
                Payment
              </Nav.Link>
              <Nav.Link href="#" className="nav_link_cl">
                Chat
              </Nav.Link>
              <Nav.Link href="#" className="nav_link_cl">
                Comments
              </Nav.Link>
              <Nav.Link href="#" className="nav_link_cl">
                Coupon
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                className="header_search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
