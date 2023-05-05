import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./buying.css";

export default function Buying() {
  return (
    <>
      <div className="buy-main mb-3">
        <div className="person d-flex align-items-center justify-content-between mb-3">
          <div className="d-flex align-items-center">
            <img src={"images/selling-icon.svg"} alt="img" />
            <div className="ms-2">
              <p className="name m-0">
                Andrey Zolutukhin<span className="time ms-2">10:35 AM</span>
              </p>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <Button className="buy d-flex align-items-center">
              Buying
              <Icon
                icon="mdi:shopping-outline"
                color="#3448f0"
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
        <div className="new-product mb-4">
          <h2>
            Check out to this new product
            <Link to="/" className="ms-2">
              https://newproduct.com
            </Link>
          </h2>
        </div>
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
        <div className="comment-person d-flex align-items-center mb-4">
          <img src={"images/comment-prsn-icon.svg"} alt="icon" />
          <img src={"images/comment-prsn-icon.svg"} alt="icon" />
          <img src={"images/comment-prsn-icon.svg"} alt="icon" />
          <img src={"images/comment-prsn-icon.svg"} alt="icon" />
          <Link>14 replies</Link>
          <span className="time">Last reply yesterday at 9:12 AM</span>
        </div>
        <div className="comment-sec d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center">
            <Button className="btn">
              <Icon
                icon="ph:heart-straight-bold"
                color="#536471"
                width="20"
                height="20"
              />
              <span className="like-number">112</span>
            </Button>
            <Button className="btn">
              <Icon
                icon="mdi:comment-outline"
                color="#536471"
                width="20"
                height="20"
              />
              <span className="comment-number">123</span>
            </Button>
          </div>
          <div>
            <Button className="btn">
              <Icon
                icon="clarity:bookmark-line"
                color="#9590d2"
                width="24"
                height="24"
              />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
