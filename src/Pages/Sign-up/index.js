import React from "react";
import { Col, Row } from "react-bootstrap";
import Geather from "../../Components/Geather-for-change";
import Signnup from "../../Components/Sign-up";
import "./style.css";

export default function Signup() {
  return (
    <>
      <div className="signup-box">
        <Row className="w-100 g-0">
          <Col lg={6} xs={12}>
            <div className="left-box">
              <Signnup />
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
