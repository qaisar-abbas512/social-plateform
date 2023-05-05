import React from "react";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import "./left-sdbar-one.css";

export default function Leftone() {
  return (
    <>
      <div className="left-one d-flex flex-column align-items-center justify-content-between bg-white h-100 pb-2">
        <div className=" d-flex flex-column align-items-center">
          <Link className="p-2 mb-3" to="/">
            <img src={"images/Logo.svg"} alt="icon" />
          </Link>
          <Link className="home active p-2 mb-3" to="/">
            <Icon
              icon="mdi:home-analytics"
              color="#bfbcde"
              width="24"
              height="24"
            />
          </Link>
          <Link className="chat position-relative p-2 mb-3" to="/">
            <Icon
              icon="ic:baseline-voice-chat"
              color="#bfbcde"
              width="24"
              height="24"
            />
            <span className="position-absolute">2</span>
          </Link>
          <Link className="contact p-2 mb-3" to="/">
            <Icon
              icon="ic:baseline-account-circle"
              color="#bfbcde"
              width="24"
              height="24"
            />
          </Link>
        </div>
        <div>
          <Link className="logout p-2" to="/">
            <Icon
              icon="mdi:logout-variant"
              color="#bfbcde"
              width="24"
              height="24"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
