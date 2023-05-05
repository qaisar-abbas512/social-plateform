import React from "react";

import { Icon } from "@iconify/react";
import { Button, Dropdown, Form, Navbar, NavbarBrand } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./header.css";
export default function Header() {
  return (
    <>
      <Navbar className="nave justify-content-between d-flex align-items-center">
        <NavbarBrand to="/" className="text-white d-flex align-items-center">
          Brand name
          <Dropdown className="dropdown text-white ms-3">
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Link Button
            </Dropdown.Toggle>

            <Dropdown.Menu className="drpdown d-flex flex-column align-items-start">
              <Link to="/Sign-in">Sign in</Link>
              <Link to="/Forget-password">Forget password</Link>
              <Link to="/Reset-password">Reset password</Link>
              <Link to="/Sign-up">Sign up</Link>
              <Link to="/Registration-1">Registration-1</Link>
              <Link to="/Registration-2">Registration-2</Link>
            </Dropdown.Menu>
          </Dropdown>
        </NavbarBrand>
        <div className="d-flex align-items-center">
          <Link to="/">
            <img
              className="me-3 d-flex"
              src={"images/header-scrn-icon.svg"}
              alt="icon"
            />
          </Link>

          <Form className="me-3 position-relative">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 py-1 px-2 text-white bg-dark border-0"
              aria-label="Search"
            />
            <Button className="srch position-absolute border-0 bg-transparent">
              <img src={"images/header-serch-icon.svg"} alt="icon" />
            </Button>
          </Form>
          <Link to="/">
            <Icon
              className="d-flex"
              icon="eva:question-mark-circle-fill"
              color="white"
              width="14"
            />
          </Link>
        </div>
      </Navbar>
    </>
  );
}
