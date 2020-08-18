import React, { useState, useEffect } from "react";

const ContactForm = () => {
  const initValues = {
    name: "",
    mobile: "",
    email: "",
    address: "",
  };

  const [values, setValues] = useState(initValues);
  return (
    <div>
      <form
        autoComplete="off"
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i class="fa fa-user" aria-hidden="true"></i>
            </div>
          </div>
          <input
            type="text"
            placeholder="Full Name"
            className="form-control"
            name="name"
            value={values.name}
            onChange={(e) => {
              setValues({ ...values, name: e.target.value });
            }}
          />
        </div>
        <div className="form-row">
          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i class="fa fa-phone" aria-hidden="true"></i>
              </div>
            </div>
            <input
              type="number"
              placeholder="Phone Number"
              className="form-control"
              name="number"
              value={values.mobile}
              onChange={(e) => {
                setValues({ ...values, mobile: e.target.value });
              }}
            />
          </div>
          <div className="form-group input-group col-md-6">
            <div className="input-group-prepend">
              <div className="input-group-text">
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </div>
            </div>
            <input
              type="email"
              placeholder="E-mail"
              className="form-control"
              name="email"
              value={values.email}
              onChange={(e) => {
                setValues({ ...values, email: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i class="fa fa-location-arrow" aria-hidden="true"></i>
            </div>
          </div>
          <textarea
            type="text"
            placeholder="Address"
            className="form-control"
            name="address"
            value={values.address}
            onChange={(e) => {
              setValues({ ...values, address: e.target.value });
            }}
          />
        </div>
        <div className="text-center">
          <input
            type="submit"
            value="Save"
            className="btn btn-outline-dark btn-block"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
