import React from "react";
import { Icon } from "@iconify/react";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";
import "./left-sdbar-two.css";

export default function Lefttwo() {
  return (
    <>
      <div className="left-two d-flex flex-column justify-content-between">
        <div className="categories-wrap">
          <div className="categories d-flex flex-column align-items-start ps-2">
            <h3 className="mb-3 ps-2">Categories</h3>

            <Accordion defaultActiveKey="1">
              <Accordion.Item eventKey="1">
                <Accordion.Body>
                  <button className="btn">
                    <img
                      className="me-2"
                      src={"images/gaming-console-icon.svg"}
                      alt="icon"
                    />{" "}
                    Gaming Consoles
                  </button>
                  <button className="btn active">
                    <img
                      className="me-2"
                      src={"images/gaming-console-icon.svg"}
                      alt="icon"
                    />{" "}
                    Mobile Phones
                  </button>
                  <button className="btn">
                    <img
                      className="me-2"
                      src={"images/gaming-console-icon.svg"}
                      alt="icon"
                    />{" "}
                    TV’s and Displays
                  </button>
                  <button className="btn">
                    <img
                      className="me-2"
                      src={"images/gaming-console-icon.svg"}
                      alt="icon"
                    />{" "}
                    Audio Systems
                  </button>
                  <button className="btn">
                    <img
                      className="me-2"
                      src={"images/gaming-console-icon.svg"}
                      alt="icon"
                    />{" "}
                    Home entertainment
                  </button>
                  <button className="btn">
                    <img
                      className="me-2"
                      src={"images/gaming-console-icon.svg"}
                      alt="icon"
                    />{" "}
                    Smart home devices
                  </button>
                  <button className="btn">
                    <img
                      className="me-2"
                      src={"images/gaming-console-icon.svg"}
                      alt="icon"
                    />{" "}
                    Office equipment
                  </button>
                  <button className="btn">
                    <img
                      className="me-2"
                      src={"images/gaming-console-icon.svg"}
                      alt="icon"
                    />{" "}
                    Wearables
                  </button>
                  <button className="btn">
                    <img
                      className="me-2"
                      src={"images/gaming-console-icon.svg"}
                      alt="icon"
                    />{" "}
                    Accessories
                  </button>
                </Accordion.Body>
                <Accordion.Header>
                  Expand
                  <span className="arrow-down mx-2">
                    <Icon
                      icon="ph:arrow-down"
                      color="#4e46b4"
                      width="10"
                      height="10"
                    />
                  </span>
                </Accordion.Header>
              </Accordion.Item>
            </Accordion>
          </div>
          <div className="trending ps-2">
            <h3 className="mb-3 ps-2">Trending</h3>
            <p className="one">
              <Icon
                icon="pepicons-pop:hash"
                color="#0bdac6"
                width="16"
                height="16"
              />
              DJI Mavic Pro 2
            </p>
            <p className="two">
              <Icon
                icon="pepicons-pop:hash"
                color="#c52cee"
                width="16"
                height="16"
              />
              Xiaomi Jetski Pack 3
            </p>
            <p className="three">
              <Icon
                icon="pepicons-pop:hash"
                color="#f2b05c"
                width="16"
                height="16"
              />
              Playstation 4 Limited
            </p>
            <p className="four">
              <Icon
                icon="pepicons-pop:hash"
                color="#52d858"
                width="16"
                height="16"
              />
              Gaming Chair, local pickup
            </p>
            <p className="five">
              <Icon
                icon="pepicons-pop:hash"
                color="#f7716e"
                width="16"
                height="16"
              />
              Heimer Miller Sofa
            </p>
          </div>
        </div>

        <div className="lead d-flex align-items-center justify-content-between">
          <div className="d-flex align-items-center position-relative">
            <img src={"images/spencercamp-icon.svg"} alt="icon" />
            <div className="content ms-2">
              <p className="name m-0">spencercamp</p>
              <p className="status m-0">Marketing Lead</p>
            </div>
            <div className="online-status"></div>
          </div>
          <Button className="border-0 bg-transparent">
            <Icon
              icon="icon-park-solid:setting"
              color="#4f5660"
              width="20"
              height="20"
            />
          </Button>
        </div>
      </div>
    </>
  );
}
