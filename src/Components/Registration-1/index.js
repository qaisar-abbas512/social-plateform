import React from "react";
import { Icon } from "@iconify/react";
import { Button, Col, Form, ProgressBar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./registration-1.css";

export default function Registration1() {
  return (
    <>
      <div className="regitration1-box">
        <div className="header d-flex align-items-center justify-content-between mb-3 mb-md-5">
          <div>
            <Link className="web">Your Logo</Link>
            <Link to="/Forget-password" className="back-button">
              <Icon
                icon="material-symbols:arrow-back-ios-new-rounded"
                color="#9590d2"
                width="13"
                height="13"
              />
            </Link>
          </div>
          <div className="progresbar-top">
            <p>40% Complete</p>
            <ProgressBar now={40} />
          </div>
        </div>
        <div className="registration1">
          <div className="content mb-2 mb-md-4">
            <h2>Business Info</h2>
            <p>Tell us about your business and its details in the form below</p>
          </div>
          <Form>
            <div className=" ">
              <Row className="mb-4">
                <Col xs={12} md={6}>
                  <Form.Group className="mb-3 mb-md-0">
                    <Form.Label>Business Name</Form.Label>
                    <Form.Control type="text" placeholder="Business name" />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control type="email" placeholder="Email Address" />
                  </Form.Group>
                </Col>
              </Row>
              <p>Choose Business Type</p>
              <div className="chose-type">
                <Row className="mb-4">
                  <Col>
                    {" "}
                    <Form.Check
                      type="checkbox"
                      label="Exporter"
                      id="disabled-default"
                    />
                  </Col>
                  <Col>
                    {" "}
                    <Form.Check
                      type="checkbox"
                      label="Importer"
                      id="disabled-default"
                    />
                  </Col>
                  <Col>
                    {" "}
                    <Form.Check
                      type="checkbox"
                      label="Retailer"
                      id="disabled-default"
                    />
                  </Col>
                  <Col>
                    {" "}
                    <Form.Check
                      type="checkbox"
                      label="Label"
                      id="disabled-default"
                    />
                  </Col>
                </Row>
                <Button className="step d-none d-md-block">Next</Button>
              </div>
            </div>
            <div className="step2 d-block d-md-none">
              <Button className="step">Next</Button>
            </div>
          </Form>
        </div>
        <div className="progres-bar">
          <p>40% Complete</p>
          <ProgressBar now={40} />
        </div>
      </div>
    </>
  );
}
