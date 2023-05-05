import React from "react";
import { Icon } from "@iconify/react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./reset-password.css";

export default function Resetpasword() {
  return (
    <>
      <div className="mainReset">
        <div className="header mb-5">
          <Link className="web">Your Logo</Link>
          <Link to="/Forget-password" className="back-button">
            <Icon
              icon="material-symbols:arrow-back-ios-new-rounded"
              color="#9590d2"
              width="13"
              height="13"
            />
          </Link>
        </div>

        <div className="forget">
          <h2>Reset your password</h2>
          <p>Enter your email below to send your a reset password link</p>
          <Form>
            <div>
              <Form.Group className="mb-4 position-relative">
                <Form.Label>Reset password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="New password"
                  className="mb-3"
                />
                <Button className="show-hide one active bg-transparent border-0 position-absolute">
                  Show
                </Button>
                <Form.Control type="password" placeholder="Confirm password" />
                <Button className="show-hide two active bg-transparent border-0 position-absolute">
                  Show
                </Button>
              </Form.Group>
            </div>
            <div className="submition">
              <Button type="submit" className="submit">
                Reset
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}
