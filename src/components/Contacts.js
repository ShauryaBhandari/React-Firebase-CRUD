// Firebase related operations are done here in the parent component
import React, { Fragment } from "react";
import ContactForm from "./ContactForm";

const Contacts = () => {
  return (
    <Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1>Contact Details</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm />
        </div>
        <div className="col-md-7">Contact lists</div>
      </div>
    </Fragment>
  );
};

export default Contacts;
