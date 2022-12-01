import React, { useState } from "react";
import { Table, InputGroup } from "react-bootstrap";
import { Icon } from "@iconify/react";
import image_url from "../Common/images";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Listdelete from "./modal/Listdelete";

const Listingtable = () => {
  const [openModal, setOpenModal] = useState(false);
  const handleClose = () => setOpenModal(false);
  // const handleShow = () => setOpenModal(true);

  return (
    <div className="p-4">
      <Table responsive className="tb1">
        <thead>
          <tr>
            <th>
              <InputGroup className="ms-2">
                <InputGroup.Checkbox />
              </InputGroup>
            </th>
            <th>
              <DropdownButton
                className="table_header_dropdown"
                variant="red"
                id="dropdown-basic-button"
                title="Product"
                menuVariant="dark"
              >
                <Dropdown.Item href="#/action-1">Return Orders</Dropdown.Item>
              </DropdownButton>
            </th>
            <th>
              {" "}
              <DropdownButton
                className="table_header_dropdown"
                variant="red"
                id="dropdown-basic-button"
                title="Original Price"
                menuVariant="dark"
              >
                <Dropdown.Item href="#/action-1">Return Orders</Dropdown.Item>
              </DropdownButton>
            </th>
            <th>
              <DropdownButton
                className="table_header_dropdown"
                variant="red"
                id="dropdown-basic-button"
                title="Indivisual Price"
                menuVariant="dark"
              >
                <Dropdown.Item href="#/action-1">Return Orders</Dropdown.Item>
              </DropdownButton>
            </th>
            <th>
              {" "}
              <DropdownButton
                className="table_header_dropdown"
                variant="red"
                id="dropdown-basic-button"
                title="Team Price"
                menuVariant="dark"
              >
                <Dropdown.Item href="#/action-1">Return Orders</Dropdown.Item>
              </DropdownButton>
            </th>
            <th>
              {" "}
              <DropdownButton
                className="table_header_dropdown"
                variant="red"
                id="dropdown-basic-button"
                title="Stock"
                menuVariant="dark"
              >
                <Dropdown.Item href="#/action-1">Return Orders</Dropdown.Item>
              </DropdownButton>
            </th>
            <th>
              <DropdownButton
                className="table_header_dropdown"
                variant="red"
                id="dropdown-basic-button"
                title="Category"
                menuVariant="dark"
              >
                <Dropdown.Item href="#/action-1">Return Orders</Dropdown.Item>
              </DropdownButton>
            </th>
            <th>
              {" "}
              <DropdownButton
                className="table_header_dropdown"
                variant="red"
                id="dropdown-basic-button"
                title="Orders"
                menuVariant="dark"
              >
                <Dropdown.Item href="#/action-1">Return Orders</Dropdown.Item>
              </DropdownButton>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <InputGroup>
                <InputGroup.Checkbox />
              </InputGroup>
            </td>
            <td>
              <div className="d-flex user_op">
                <img
                  src={image_url.dress_design}
                  className="me-2"
                  width={50}
                  alt=""
                />
                <div className="name_de">
                  <h5>Red Kurti </h5>
                  <span>SKU ID:</span>
                </div>
              </div>
            </td>
            <td onClick={() => setOpenModal(true)}>₹ 449</td>
            <td> ₹ 549</td>
            <td>₹ 449</td>
            <td>200</td>
            <td>Kurta</td>
            <td> Active</td>
            <td>
              {" "}
              <img
                className="me-2"
                src={image_url.eye_logo}
                width={28}
                alt=""
              />
              <img
                className="me-2"
                src={image_url.three_layer}
                width={28}
                alt=""
              />
              <Icon className="me-2 icv2" icon="fluent:delete-24-filled" />
              <Icon className="me-2 icv2" icon="fe:pencil" />
            </td>
          </tr>
        </tbody>
      </Table>
      <Listdelete show={openModal} onHide={handleClose} />
    </div>
  );
};

export default Listingtable;
