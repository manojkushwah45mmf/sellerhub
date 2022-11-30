import React from "react";
import { Modal, Button, Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";



const Addfilter = (props) => {
  return (
    <div>
      <Modal {...props}>
        <Modal.Header closeButton className="more_header_list">
          <Modal.Title>More Filters</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Accordion>
            <Accordion.Item eventKey="0" className="acc_collapse_list">
              <Accordion.Header>Status</Accordion.Header>
              <Accordion.Body>
                <Form>
                  {["checkbox"].map((type) => (
                    <div key={`block-${type}`} className="mb-4">
                      <Form.Check
                        label="Active"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        label="Inactive"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        label="Draft"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />

                      <p className="mt-3">Clear</p>
                    </div>
                  ))}
                </Form>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1" className="acc_collapse_list">
              <Accordion.Header>Amount</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2" className="acc_collapse_list">
              <Accordion.Header>Category</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>

            <Accordion.Item eventKey="3" className="acc_collapse_list">
              <Accordion.Header>Colour</Accordion.Header>
              <Accordion.Body></Accordion.Body>
            </Accordion.Item>   
          </Accordion>
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
  );
};

export default Addfilter;
