import React from "react";
import { Button } from "react-bootstrap";
import Header from "../Common/Header";

import "./listing.css";

const Listing = () => {
  return (
    <div>
      <Header />
      <div className="p-4 list_filtr_top">
        <h3>Listing</h3>

        <div>
          <Button variant="outline-danger" className="me-3 filtr_btn">
            FILTER
          </Button>
          <Button variant="primary" className="add_list_btn">
            ADD LISTING
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Listing;
