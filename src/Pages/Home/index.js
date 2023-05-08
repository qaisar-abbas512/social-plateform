import React from "react";
import Header from "../../Components/Header";
import Leftone from "../../Components/Left-sdbar-one";
import { Col, Row } from "react-bootstrap";
import Lefttwo from "../../Components/Left-sdbar-two";
import Spencercamp from "../../Components/Spencercamp";
import Activfeed from "../../Components/Activ-feed/Activ-feed";
import Selling from "../../Components/Selling";
import Buying from "../../Components/Buying";
import Profile from "../../Components/Spencercamp-profile";
import "./style.css";
import Addfriends from "../../Components/Add-friends";

export default function Home() {
  return (
    <>
      <div className="wrap">
        <Header />
        <Row className="gx-4">
          <Col lg={3}>
            <div className="d-flex bg-gray">
              <Leftone />
              <Lefttwo />
            </div>
          </Col>
          <Col lg={6}>
            <div className="main-box">
              <Spencercamp />
              <Activfeed />
              <Selling />
              <Buying />
            </div>
          </Col>
          <Col lg={3}>
            <div className="profile-main">
              <Profile />
              <Addfriends />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
