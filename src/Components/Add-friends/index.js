import React from "react";
import { Icon } from "@iconify/react";
import { Button } from "react-bootstrap";
import "./add-friends.css";

export default function Addfriends() {
  return (
    <>
      <div className="add-friends">
        <h3>Add friends</h3>
        <div className="search-sec d-flex align-items-center justify-content-between mb-2">
          <p>Search now</p>
          <Button className="border-0 bg-transparent p-0">
            <img
              className="text-center"
              src={"images/three-down-line.svg"}
              alt="icon"
            />
          </Button>
        </div>
        <form className="position-relative">
          <input type="search" placeholder="Search" />
          <Button className="search position-absolute border-0 bg-transparent">
            <Icon
              icon="teenyicons:search-outline"
              color="#999ca0"
              width="13"
              height="13"
            />
          </Button>
        </form>
        <div className="friends-box">
          <div className="friends d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <img src={"images/friend-1.png"} alt="img" />
              <div className="ms-2">
                <h4 className="name">Wade Warren</h4>
                <p className="email">ervin.welch@hotmail.com</p>
              </div>
            </div>
            <Button className="active">Add</Button>
          </div>
          <div className="friends d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <img src={"images/friend-1.png"} alt="img" />
              <div className="ms-2">
                <h4 className="name">Wade Warren</h4>
                <p className="email">ervin.welch@hotmail.com</p>
              </div>
            </div>
            <Button className="active">Add</Button>
          </div>
          <div className="friends d-flex align-items-center justify-content-between mb-3">
            <div className="d-flex align-items-center">
              <img src={"images/friend-1.png"} alt="img" />
              <div className="ms-2">
                <h4 className="name">Wade Warren</h4>
                <p className="email">ervin.welch@hotmail.com</p>
              </div>
            </div>
            <Button className="active">Add</Button>
          </div>
          <div className="friends d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <img src={"images/friend-1.png"} alt="img" />
              <div className="ms-2">
                <h4 className="name">Wade Warren</h4>
                <p className="email">ervin.welch@hotmail.com</p>
              </div>
            </div>
            <Button className="active">Add</Button>
          </div>
          <div className="search-result d-flex align-items-center justify-content-between">
            <p>8459 People</p>
            <p className="text-body">Search People</p>
          </div>
        </div>
      </div>
      <div className="live-chat">
        <Button className="live-cht-btn active">
          <Icon
            icon="material-symbols:voice-chat"
            color="#4e46b4"
            width="23"
            height="23"
          />
        </Button>
        <div className="online-status"></div>
      </div>
    </>
  );
}
