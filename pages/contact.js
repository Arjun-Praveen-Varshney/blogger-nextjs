import React, { useState } from "react";
import styles from "../styles/Home.module.css";

const Contact = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [desc, setdesc] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { name, email, phone, desc };
    fetch("http://localhost:3000/api/postcontact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.text())
      .then((data) => {
        alert("Thanks for contacting us");
        setphone("");
        setname("");
        setemail("");
        setdesc("");
      })
      .catch((err) => console.log("error: ", err));
  };

  const handleChange = (e) => {
    if (e.target.name == "name") {
      setname(e.target.value);
    } else if (e.target.name == "email") {
      setemail(e.target.value);
    } else if (e.target.name == "phone") {
      setphone(e.target.value);
    } else if (e.target.name == "desc") {
      setdesc(e.target.value);
    }
  };
  return (
    <div className={styles.containercontact}>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.mb3}>
          <label htmlFor="name" className={styles.formlabel}>
            Name
          </label>
          <input
            onChange={handleChange}
            value={name}
            type="name"
            className="form-control"
            id="name"
            name="name"
            aria-describedby="nameHelp"
          />
        </div>
        <div className={styles.mb3}>
          <label htmlFor="exampleInputEmail1" className={styles.formlabel}>
            Email address
          </label>
          <input
            onChange={handleChange}
            value={email}
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            name="email"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We will never share your email with anyone else.
          </div>
        </div>
        <div className={styles.mb3}>
          <label htmlFor="phone" className={styles.formlabel}>
            Phone
          </label>
          <input
            onChange={handleChange}
            value={phone}
            type="phone"
            className="form-control"
            id="phone"
            name="phone"
          />
        </div>
        <div className={styles.mb3}>
          <label className="form-check-label" htmlFor="desc">
            Description
          </label>
          <textarea
            onChange={handleChange}
            name="desc"
            value={desc}
            placeholder="Enter your concern here"
            id="desc"
            cols="30"
            rows="10"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
