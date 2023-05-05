import React from "react";
import { Icon } from "@iconify/react";
import { Button, Col, Row } from "react-bootstrap";
import "./spencercamp-profile.css";

export default function Profile() {
  return (
    <div>
      <div className="profile-box mb-3">
        <div className="profile-person text-center">
          <img
            className="mb-3"
            src={"images/profile-person-img.png"}
            alt="img"
          />
          <h3>spencercamp</h3>
          <p>Marketing Lead</p>
          <div className="follower d-flex align-items-center justify-content-center">
            <div className="follower-img">
              <img src={"images/follower-1.png"} alt="img" />
              <img src={"images/follower-1.png"} alt="img" />
              <img src={"images/follower-1.png"} alt="img" />
              <img src={"images/follower-1.png"} alt="img" />
            </div>
            <p>Sofia, Jon and 12+ others</p>
          </div>
        </div>
        <div className="profile-status">
          <Row className="mb-3">
            <Col xs={5}>
              <div className="ads text-center">
                <h2>10</h2>
                <p className="tag">Total Ads</p>
              </div>
            </Col>
            <Col xs={2}>
              <div className="horizentl-line"></div>
            </Col>
            <Col xs={5}>
              <div className="visitor text-center">
                <h2>210</h2>
                <p className="tag">Visitors</p>
              </div>
            </Col>
          </Row>
          <div className="view-profile d-flex align-items-center justify-content-between">
            <Button className="btn active">View Profile</Button>
            <Button className="border-0 bg-transparent p-0">
              <Icon
                icon="ph:dots-three-outline-vertical-light"
                color="#9590d2"
                width="24"
                height="24"
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
