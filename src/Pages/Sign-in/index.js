import React from "react";
import { Col, Row } from "react-bootstrap";
import Login from "../../Components/Sign-in";
import Geather from "../../Components/Geather-for-change";
import "./style.css";

export default function Signin() {
  return (
    <>
      <div className="main-boxx">
        <Row className="w-100 g-0">
          <Col lg={6} xs={12}>
            <div className="left-box">
              <Login />
            </div>
          </Col>
          <Col md={6} className="d-none d-lg-block">
            <div className="right-box">
              <Geather />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
