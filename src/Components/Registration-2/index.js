import React from "react";
import { Icon } from "@iconify/react";
import { Button, Col, Form, ProgressBar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./registration2.css";

export default function Registration2() {
  return (
    <>
      <div className="regitration2-box">
        <div className="header d-flex align-items-center justify-content-between mb-3 mb-lg-5">
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
            <p>80% Complete</p>
            <ProgressBar now={80} />
          </div>
        </div>
        <div className="registration2">
          <div className="content mb-2 mb-md-4">
            <h2>Contact Person</h2>
            <p>
              Fill in the form for your contact details for future
              correscorrespondence
            </p>
          </div>
          <Form>
            <div className=" ">
              <Row className="mb-2 mb-lg-4">
                <Col xs={12} md={6}>
                  <Form.Group className="mb-2 mb-md-0">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group>
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Last Name" />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-2 mb-lg-4">
                <Col xs={12} md={6}>
                  <Form.Group className="mb-2 mb-md-0">
                    <Form.Label>Designation</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your designation"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group>
                    <Form.Label>Country</Form.Label>
                    <Form.Select aria-label="Default select example">
                      <option>United States</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-2 mb-md-4">
                <Col xs={12} md={6}>
                  <Form.Group className="mb-2 mb-md-0">
                    <Form.Label>State</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your state name"
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group>
                    <Form.Label>City</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter your city name"
                    />
                  </Form.Group>
                </Col>
              </Row>
            </div>
            <div className="chose-type mb-2 mb-md-0">
              <Button type="submit" className="step">
                Submit
              </Button>
            </div>
          </Form>
        </div>
        <div className="progres-bar">
          <div className="d-flex align-items-center justify-content-between">
            <Button className="bg-transparent border-0 p-0">
              Skip this step
            </Button>
            <p>40% Complete</p>
          </div>

          <ProgressBar now={40} />
        </div>
      </div>
    </>
  );
}
