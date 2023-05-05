import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import "./sign-in.css";

export default function Login() {
  return (
    <>
      <div className="header mb-4 d-none d-md-block">
        <Link to="/Home">Your Logo</Link>
      </div>
      <div className="login-box">
        <div>
          <div className="welcom-back mb-4 mb-md-5">
            <img
              className="mob-saly d-block d-md-none m-auto"
              src={"images/mob-Saly-1.png"}
              alt="img"
            />
            <h2>Welcome back!</h2>
            <p className="d-none d-md-block">
              Fill form below to sign you back in
            </p>
          </div>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label className="fs-6 d-none d-md-block">
                Email Address
              </Form.Label>
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>
            <Form.Group className="mb-3 position-relative">
              <Form.Label className="fs-6 d-none d-md-block">
                Password
              </Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Button className="show-hide active bg-transparent border-0 position-absolute">
                Show
              </Button>
            </Form.Group>
            <div class="d-flex justify-content-between align-items-center mb-md-5 d-none d-md-flex">
              <Form.Check
                type="checkbox"
                label="Remember me"
                id="disabled-default"
              />
              <Button className="forgt bg-transparent border-0 text-body">
                Forgot Password ?
              </Button>
            </div>
            <Button type="submit" className="submit w-100 mb-0 mb-md-5">
              Log in
            </Button>
          </Form>
          <div className="social-box d-none d-md-block">
            <p className="text-center mb-2">or continue with</p>
            <div className="d-flex align-items-center justify-content-center">
              <Link>
                <Icon icon="logos:facebook" width="37" height="37" />
              </Link>
              <Link>
                <Icon icon="logos:google-icon" width="37" height="37" />
              </Link>
            </div>
          </div>
        </div>
        <div className="an-account d-flex align-items-center">
          <p>Don’t have an account?</p>
          <Link>Sign up</Link>
        </div>
      </div>
    </>
  );
}
