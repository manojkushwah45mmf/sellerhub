import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';





const Listdelete = (props) => {


  return (
    <div>
    <Modal {...props}>
    <Modal.Header closeButton className="more_header_list">
      <Modal.Title>More Filters</Modal.Title>
    </Modal.Header>
    <Modal.Body>
   
    </Modal.Body>
    <div className="mb-3 text-center">
      <Button variant="outline-danger" className="me-4 filtr_btn" onClick={props.onHide}>
        CLEAR ALL FILTER
      </Button>
      <Button variant="danger" className="add_list_btn" onClick={props.onHide}>
        DONE
      </Button>
    </div>
  </Modal>

    </div>
  )
}

export default Listdelete
