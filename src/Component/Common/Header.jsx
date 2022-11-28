import React from "react";
import Container from "react-bootstrap/Container";
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
            </li>
            <li className="nav_link">
              <DropdownButton
                className="nav_list_dropdown"
                variant="red"
                id="dropdown-basic-button"
                title="Orders"
                menuVariant="dark"
              >
                <Dropdown.Item href="#/action-1">First List</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Second List</Dropdown.Item>
                <Dropdown.Item href="#/action-3">third list</Dropdown.Item>
                <Dropdown.Item href="#/action-4">fourth list</Dropdown.Item>
                <Dropdown.Item href="#/action-5"></Dropdown.Item>
              </DropdownButton>
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
              <li></li>
              <li>
                <Icon className="icv" icon="il:bell" />
              </li>
              <li>
                <DropdownButton
                  className="nav_list_dropdown"
                  variant="red"
                  id="dropdown-basic-button"
                  title="Manpreet cloth store"
                  menuVariant="dark"
                >
                  <Dropdown.Item href="#/action-1">First review </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Second Review</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">third Review</Dropdown.Item>
                </DropdownButton>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
