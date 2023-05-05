import React from "react";
import { Button } from "react-bootstrap";
import { Icon } from "@iconify/react";
import "./Spencercamp.css";

export default function Spencercamp() {
  return (
    <>
      <div className="camp mb-3">
        <h2 className="my-3">
          Good morning, <span>spencercamp</span>
        </h2>
        <div className="profile-completed mb-3">
          <div>
            <h3>80% Profile completed</h3>
            <p>Complete your profile and enjoy using app</p>
          </div>
          <div className="profile-action-btn d-flex align-items-center">
            <Button className="open bg-transparent border-0">Open</Button>
            <Button className="close">
              <Icon
                icon="ic:round-close"
                color="#4e46b4"
                width="13"
                height="13"
              />
            </Button>
          </div>
        </div>
        <div className="main d-flex align-items-center justify-content-between">
          <div className="creat-post d-flex align-items-center">
            <img src={"images/spencercamp-icon.svg"} alt="img" />
            <p>What are you planning to post today?</p>
          </div>
          <Button className="btn-primary">Create Post</Button>
        </div>
      </div>
    </>
  );
}
