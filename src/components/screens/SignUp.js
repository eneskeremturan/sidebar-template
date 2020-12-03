import React, { Component } from "react";
import InputMask from "react-input-mask";
import { Container, Row, Col } from "react-bootstrap";

export default class SignUp extends Component {
  render() {
    return (
      <Container className="mt-3">
        <form>
          <h3>Sign Up</h3>

          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              placeholder="UserName"
            />
          </div>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label>First name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="First name"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label>Last name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Last name"
                />
              </div>
            </Col>
          </Row>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>
          <Row>
            <Col md={6}>
              <div className="form-group">
                <label>Phone Number</label>
                <InputMask
                  mask="\(020)\ 9999 9999"
                  type="text"
                  className="form-control"
                  placeholder="Phone Number"
                />
              </div>
            </Col>
            <Col md={6}>
              <div className="form-group">
                <label>Department</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Department"
                />
              </div>
            </Col>
          </Row>

          <button type="submit" className="btn btn-primary btn-block">
            Sign Up
          </button>
          <p className="forgot-password text-right">
            Already registered <a href="/sign-in">sign in?</a>
          </p>
        </form>
      </Container>
    );
  }
}
