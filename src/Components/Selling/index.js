import React from "react";
import { Icon } from "@iconify/react";
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./selling.css";
export default function Selling() {
  return (
    <>
      <div className="selling-main mb-2">
        <div className="person d-flex align-items-center justify-content-between mb-4">
          <div className="d-flex align-items-center">
            <img src={"images/selling-icon.svg"} alt="img" />
            <div className="ms-2">
              <p className="name m-0">
                Andrey Zolutukhin<span className="time ms-2">10:35 AM</span>
              </p>
              <p className="two m-0">Styleeee!</p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Button className="selle bg-transparent d-flex align-items-center">
              Selling
              <Icon
                icon="ic:outline-sell"
                color="#4ad15f"
                width="16"
                height="16"
              />
            </Button>
            <Button className="bg-transparent">
              <Icon
                icon="clarity:bookmark-line"
                color="#9590d2"
                width="24"
                height="24"
              />
            </Button>
            <Button className="bg-transparent">
              <Icon
                icon="ph:dots-three-outline-vertical-light"
                color="#9590d2"
                width="24"
                height="24"
              />
            </Button>
          </div>
        </div>
        <div className="price-box">
          <Row className="mb-3">
            <Col xs={5}>
              <div className="price text-center">
                <h2>$3600</h2>
                <p className="tag">Price</p>
              </div>
            </Col>
            <Col xs={2}>
              <div className="horizentl-line"></div>
            </Col>
            <Col xs={5}>
              <div className="category text-center">
                <h2>TVs and Displays</h2>
                <p className="tag">Category</p>
              </div>
            </Col>
          </Row>
        </div>
        <div className="appliances mb-4">
          <img
            className="mb-3 w-100"
            src={"images/selling-img.png"}
            alt="img"
          />
          <p className="aplnce-content mb-3">
            <img
              className="me-2"
              src={"images/appliances-icon.svg"}
              alt="icon"
            />
            Home appliances
          </p>
          <div className="comment-emoji d-flex align-items-center mb-2">
            <Link>
              <img src={"images/flame-emoji.svg"} alt="emoji" />
              <span className="number">4</span>
            </Link>
            <Link>
              <img src={"images/congrats-emoji.svg"} alt="emoji" />
              <span className="number">2</span>
            </Link>
            <Link>
              <img src={"images/hand-emoji.svg"} alt="emoji" />
              <span className="number">1</span>
            </Link>
          </div>
          <div className="comment-person d-flex align-items-center mb-3">
            <img src={"images/comment-prsn-icon.svg"} alt="icon" />
            <img src={"images/comment-prsn-icon.svg"} alt="icon" />
            <img src={"images/comment-prsn-icon.svg"} alt="icon" />
            <img src={"images/comment-prsn-icon.svg"} alt="icon" />
            <Link>14 replies</Link>
            <span className="time">Last reply yesterday at 9:12 AM</span>
          </div>
          <input className="w-100" type="text" placeholder="Write a comment" />
        </div>
        <div className="comment-sec d-flex align-items-center">
          <Button className="bg-transparent">
            <Icon
              icon="ph:heart-straight-bold"
              color="#536471"
              width="20"
              height="20"
            />
            <span className="like-number">112</span>
          </Button>
          <Button className="bg-transparent">
            <Icon
              icon="mdi:comment-outline"
              color="#536471"
              width="20"
              height="20"
            />
            <span className="comment-number">123</span>
          </Button>
        </div>
      </div>
    </>
  );
}
