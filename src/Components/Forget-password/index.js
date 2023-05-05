import React from "react";
import { Icon } from "@iconify/react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./forget-password.css";

export default function Forgetpasword() {
  return (
    <>
      <div className="header mb-5">
        <Link className="web">Your Logo</Link>
        <Link to="/sign-in" className="back-button">
          <Icon
            icon="material-symbols:arrow-back-ios-new-rounded"
            color="#9590d2"
            width="13"
            height="13"
          />
        </Link>
      </div>

      <div className="forget-one">
        <h2>Forgot your password?</h2>
        <p>
          Don’t worry! It happens. Please enter the email associated with your
          account.
        </p>
        <Form>
          <div>
            <Form.Group className="mb-4">
              <Form.Label>Email Address</Form.Label>
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>
          </div>
          <div className="submition">
            <Button type="submit" className="submit">
              Request
            </Button>
            <div className="an-account mt-3 d-flex align-items-center justify-content-center d-block d-md-none">
              <p>Remember password?</p>
              <Link>Log in</Link>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}
