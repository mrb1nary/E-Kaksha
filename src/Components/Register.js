import React, { useState } from "react";
import "../CSS/Register.css";


function Register() {

  //Regex to validate email
  const validEmail = new RegExp(
    "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
  );


  //State to manage form input
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
    id: "",
  });



  //Function to update the state according to user input
  function handleChange(event) {
    setFormData((prevFromData) => {
      return {
        ...prevFromData,
        [event.target.name]: event.target.value,
      };
    });
  }



  //Function to push data to backend
  function sendData() {
    console.log("Backend magic happens inside this function");
  }



  //Function to validate form data
  function formSubmit() {
    if (formData.username.length<3) {
      alert("Username should be greater than 3");
      return;
    }

    if (formData.password.length<5 ) {
      alert("Password length must be greater than 5");
      return;
    }

    if (formData.password !== formData.cpassword) {
      alert("Password mismatch");
      return;
    }

    if (formData.id.length < 9 || formData.id.length > 10) {
      alert("Incorrect ID");
      return;
    }

    if (!validEmail.test(formData.email)) {
      console.log("Inside");
      return;
    }
    sendData();
  }



  return (
    <div className="body-container">
      <div className="login-box">
        <h2 id="register">Register</h2>
        <form>
          <div className="user-box">
            <input onChange={handleChange} type="text" name="username" />
            <label>Username</label>
          </div>

          <div className="user-box">
            <input onChange={handleChange} type="email" name="email" />
            <label>Email</label>
          </div>

          <div className="user-box">
            <input onChange={handleChange} type="id" name="id" />
            <label>Student/Teacher ID</label>
          </div>

          <div className="user-box">
            <input onChange={handleChange} type="password" name="password" />
            <label>Password</label>
          </div>

          <div className="user-box">
            <input onChange={handleChange} type="password" name="cpassword" />
            <label>Confirm Password</label>
          </div>

          <div className="btn">
            <a onClick={formSubmit}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
