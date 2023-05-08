import React, { useState } from "react";
import "./left-sdbar-one.css";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";

export default function App() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className={`app ${isActive ? "left-nav" : ""}`}>
      <button
        className="d-lg-none closs bg-transparent border-0"
        onClick={handleToggle}
      >
        <Icon
          icon="ion:reorder-three-outline"
          color="#100e24"
          width="13"
          height="13"
        />
      </button>
      <div className="left-one d-flex flex-column align-items-center justify-content-between bg-white pb-2 vh-100">
        <div className=" d-flex flex-column align-items-center p-3 w-100">
          <div className="header d-flex align-items-center justify-content-between d-lg-none pb-3 w-100">
            <div className="single-profile d-flex align-items-center">
              <img src={"images/profile-img.png"} alt="image" />
              <div className="ms-1">
                <p>Good morning,</p>
                <h3>Kat Williams</h3>
              </div>
            </div>
            <button
              className="cross bg-transparent border-0"
              onClick={handleToggle}
            >
              <Icon
                icon="ic:round-close"
                color="#9590d2"
                width="20"
                height="20"
              />
            </button>
          </div>

          <Link className="p-2 mb-3 d-flex align-items-center " to="/">
            <img
              className="d-none d-lg-block"
              src={"images/Logo.svg"}
              alt="icon"
            />
            <Icon
              className="home d-lg-none"
              icon="mdi:home-analytics"
              color="#9590D2"
              width="24"
              height="24"
            />
            <p className="d-lg-none">Home</p>
          </Link>
          <Link
            className="home active p-2 mb-3 d-flex align-items-center"
            to="/"
          >
            <Icon
              className="d-none d-lg-block"
              icon="mdi:home-analytics"
              color="#bfbcde"
              width="24"
              height="24"
            />
            <Icon
              className="d-lg-none"
              icon="material-symbols:search"
              color="#9590d2"
              width="24"
              height="24"
            />

            <p className="d-lg-none">Search</p>
          </Link>
          <Link
            className="chat position-relative p-2 mb-3 d-flex align-items-center"
            to="/"
          >
            <Icon
              icon="ic:baseline-voice-chat"
              color="#9590d2"
              width="24"
              height="24"
            />
            <p className="d-lg-none">Chat</p>
            <span className="position-absolute">2</span>
          </Link>
          <Link className="contact p-2 mb-3 d-flex align-items-center" to="/">
            <Icon
              icon="ic:baseline-account-circle"
              color="#9590d2"
              width="24"
              height="24"
            />
            <p className="d-lg-none">Profile</p>
          </Link>
        </div>
        <div className="logout-sec px-3 pt-3 p-lg-0">
          <Link className="logout p-2 d-flex align-items-center" to="/">
            <Icon
              icon="mdi:logout-variant"
              color="#9590d2"
              width="24"
              height="24"
            />
            <p className="d-lg-none">Log out</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
