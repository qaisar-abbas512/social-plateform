import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "react-bootstrap";
import "./activ.css";

export default function Activfeed() {
  return (
    <>
      <div className="feeds mb-2">
        <h2>Activity Feed</h2>
        <div className="main">
          <div className="actv-feed d-flex align-items-center">
            <img
              className="me-2"
              src={"images/Active-feed-icon.svg"}
              alt="img"
            />
            <h3>TV’s and Displays</h3>
          </div>
          <div className="d-flex align-items-center">
            <Button className="bg-transparent">
              <Icon
                icon="clarity:bookmark-line"
                color="#9590d2"
                width="20"
                height="20"
              />
            </Button>
            <Button className="bg-transparent">
              <img src={"images/export-media.svg"} alt="icon" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
