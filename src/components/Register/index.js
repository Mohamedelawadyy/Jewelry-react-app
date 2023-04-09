import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";
import "./index.css";

function Register() {

  
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <section className="Register">
      <div className="title">
        <h1>Register New Account</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container p-5">
          <div className="row">
            <div className="col-6">
              <div className="form-req">
                <label htmlFor="register first-name" className="first-name">
                  First Name
                </label>
                <small className="fname-error">Required</small>
              </div>
              <input
                type="text"
                className="form-input first-name"
                onKeyUp
              />
              <div className="form-req">
                <label htmlFor="register_email" className="email">
                  Email Address
                </label>
                <small>Required</small>
              </div>
              <input type="email" className="form-input email" />
              <div className="form-req">
                <label htmlFor="Password">Re-Password</label>
                <small>Required</small>
              </div>
              <input
                type="password"
                autoCapitalize="current-password"
                className="form-input re-password"
              />
            </div>
            <div className="col-6">
              <div className="form-req">
                <label htmlFor="register_lastname">Last Name</label>
                <small>Required</small>
              </div>
              <input type="text" className="form-input last-name" />
              <div className="form-req">
                <label htmlFor="register_fullname">Full Name</label>
                <small>Required</small>
              </div>
              <input type="text" className="form-input" />
              <div className="form-req">
                <label htmlFor="Password">Password</label>
                <small>Required</small>
              </div>
              <input type="password" className="form-input password" />
            </div>

            <div className="col-12">
              <input type={"submit"} value="Submit Form" className="btn-form" />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Register;
