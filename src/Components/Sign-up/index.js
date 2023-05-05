import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";
import { useState } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import "./style.css";

export default function Signnup() {
  const [] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Person", value: "1" },
    { name: "Business", value: "2" },
  ];

  return (
    <>
      <div className="header mb-3 d-none d-md-block">
        <Link to="/Home">Your Logo</Link>
      </div>
      <div className="sign-box">
        <div>
          <div className="welcom-back mb-3 mb-md-5">
            <img
              className="mob-saly-1 d-block d-md-none m-auto"
              src={"images/mob-Saly-1.png"}
              alt="img"
            />
            <h2>Create account</h2>
            <p className="d-none d-md-block m-0">
              Fill form below to register your account
            </p>
          </div>
          <ButtonGroup className="mb-3 switch-btn p-1">
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                id={`radio-${idx}`}
                type="radio"
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
          <Form>
            <Form.Group className="mb-2 mb-md-3">
              <Form.Label className="fs-6 d-none d-md-block">
                Email Address
              </Form.Label>
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>
            <Form.Group className="mb-2 mb-md-3 position-relative">
              <Form.Label className="fs-6 d-none d-md-block">
                Password
              </Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Button className="show-hide one active bg-transparent border-0 position-absolute">
                Show
              </Button>
            </Form.Group>
            <Form.Group className="mb-2 mb-md-3 position-relative">
              <Form.Label className="fs-6 d-none d-md-block">
                Password
              </Form.Label>
              <Form.Control type="password" placeholder="Password" />
              <Button className="show-hide two active bg-transparent border-0 position-absolute">
                Show
              </Button>
            </Form.Group>
            <div className="order d-flex flex-column flex-md-column-reverse">
              <div class="policy d-flex align-items-center mb-md-3">
                <Form.Check
                  className="m-0"
                  type="checkbox"
                  label="I accept the "
                  id="disabled-default"
                />
                <Link className="terms bg-transparent border-0">
                  terms and privacy policy
                </Link>
              </div>
              <Button type="submit" className="submit w-100 mb-3">
                Sign up
              </Button>
            </div>
          </Form>
          <div className="social-box d-none d-lg-block">
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
          <p>Already have an account?</p>
          <Link>Log in</Link>
        </div>
      </div>
    </>
  );
}
