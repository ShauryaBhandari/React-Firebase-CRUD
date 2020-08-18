// Firebase related operations are done here in the parent component
import React, { Fragment, useState, useEffect } from "react";
import ContactForm from "./ContactForm";
import fireDb from "../firebase";

const Contacts = () => {
  const [details, setDetails] = useState([]);

  useEffect(() => {
    fireDb.child("contacts").on("value", (snapshot) => {
      if (snapshot.val() != null) {
        setDetails({ ...snapshot.val() });
      }
    }); //on change in the contacts object, callback function will be invoked. This is similar to the component did mount lifecycle hook in class based components

    return () => {};
  }, []);

  const addEdit = (obj) => {
    fireDb.child("contacts").push(obj, (err) => {
      if (err) {
        console.log(err);
      }
    });
  };
  return (
    <Fragment>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1>Contact Details</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <ContactForm addEdit={addEdit} />
        </div>
        <div className="col-md-7">
          <table className="table table-borderless table-striped">
            <thead className="thead-light">
              <tr>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>E-mai</th>
                <th>Address</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(details).map((id) => {
                return (
                  <tr ky={id}>
                    <td>{details[id].name}</td>
                    <td>{details[id].mobile}</td>
                    <td>{details[id].email}</td>
                    <td>{details[id].address}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </Fragment>
  );
};

export default Contacts;
