import React from "react";
import "../../styles/main.scss";

function Contact() {
  return (
    <div className="container mb-3">
      <section>
        <div className="form-group">
          <label for="FullName">Full Name</label>
          <input
            required
            type="fullname"
            className="form-control"
            id="exampleInputFullName"
          />
        </div>

        <div className="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            required
            type="email"
            className="form-control"
            id="Email"
          />
        </div>

        <div className="form-group">
          <label for="exampleFormControlMessage">Content</label>
          <input
            required
            className="form-control"
            id="Content"
          ></input>
        </div>

        <button
          type="submit"
          className="btnct"
        >
          Submit
        </button>
      </section>
    </div>
  );
}

export default Contact;