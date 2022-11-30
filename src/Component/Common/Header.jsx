import React from "react";
import { Container, Form, InputGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Icon } from "@iconify/react";
import image_url from "./images";



const Header = () => {

  return (
    <div className="header_bg_area">
      <Container fluid>
        <div className="d-flex justify-content-between header_top">
          <ul className="upperlist_show">
            <li className="nav_link">
              <img src={image_url.top_side} alt="" />
            </li>
            <li className="nav_link">Dashboard</li>
            <li className="nav_link">
            <Link to ="/listing/">
              <DropdownButton
                className="nav_list_dropdown"
                variant="red"
                id="dropdown-basic-button"
                title="Listing"
                menuVariant="dark"
              >
                <Dropdown.Item href="#/action-1">My Listing</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Add New Listing</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Approvals</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Inventory</Dropdown.Item>
                <Dropdown.Item href="#/action-5"></Dropdown.Item>
              </DropdownButton>
              </Link>
            </li>
            <li className="nav_link">
          
              <DropdownButton
                className="nav_list_dropdown"
                variant="red"
                id="dropdown-basic-button"
                title="Orders"
                menuVariant="dark"
              >
                <Dropdown.Item href="#/action-1">Return Orders</Dropdown.Item>
              </DropdownButton>
            </li>
            <li className="nav_link">
            <Link to="/payment/">Payment</Link>
          </li>
            <li className="nav_link">
              <Link to="/chat/">Chat</Link>
            </li>
            <li className="nav_link">
              <Link to="/comment/">Comments</Link>
            </li>
            <li className="nav_link">
              <Link to="coupon">Coupon</Link>
            </li>
          </ul>
          <div>
            <ul>
              <li>
              <InputGroup>
              <InputGroup.Text className="search_list"><Icon icon="il:search" fontSize="26px"></Icon></InputGroup.Text>
                <Form.Control
                  className="dashboard_nav_field"
                  type="text"
                  placeholder=""
                />
                </InputGroup>
              </li>
              <li>
                <Icon className="icv" icon="il:bell" />
              </li>
              <li>
                <div className="dropdown_pic" >
              <img src={image_url.profilecircle} alt="" />

                <DropdownButton
                  className="nav_list_dropdown"f
                  variant="red"
                  id="dropdown-basic-button"
                  title="Manpreet cloth store"
                  menuVariant="dark"
                >
                  <Dropdown.Item href="#/action-1">
                    Manage Account{" "}
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
                </DropdownButton>
            </div>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
