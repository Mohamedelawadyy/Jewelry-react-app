import React from "react";
import "./index.css";

function ContactUs() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <section className="contact">
      <div className="title">
        <h1>Contact Us</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="container p-5">
          <p className="text-left w-50">
            We're happy to answer questions or help you with returns. Please
            fill out the form below if you need assistance.
          </p>
          <div className="row">
            <div className="col-6">
              <label htmlFor="contact_fullname">Full Name</label>
              <br />
              <input type="text" className="form-input" />
              <br />
              <label htmlFor="contact_email">
                Email Address
                <small>Required</small>
              </label>
              <br />
              <input type="email" className="form-input" />
              <br />
              <label htmlFor="contact_companyname">Company Name</label>
              <br />
              <input type="text" className="form-input" />
            </div>
            <div className="col-6">
              <label htmlFor="contact_phone">Phone Number</label>
              <br />
              <input type="text" className="form-input" />
              <br />
              <label htmlFor="contact_order">
                Order Number
                <small>Required</small>
              </label>
              <br />
              <input type="email" className="form-input" />
              <br />
              <label htmlFor="contact_rma">RMA Number</label>
              <br />
              <input type="text" className="form-input" />
            </div>
            <div className="col-12">
              <label className="d-block mt-5 mb-2">Comments/Questions</label>
              <textarea
                name="contact-question"
                rows={5}
                cols={50}
                className="form-input w-100"
              ></textarea>
              <input type={"submit"} value="Submit Form" className="btn-form" />
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}

export default ContactUs;
