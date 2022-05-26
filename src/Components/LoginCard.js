import React, { useState } from "react";
import "../CSS/LoginCard.css";

function LoginCard() {

  //State to manage form input
  const [formData, setFormData] = useState({
    username: "",
    password: "",
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
  function sendData(){
   console.log("Backend magic happens inside this function")
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
    
    sendData()
  }

  return (
    <div className="body-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              onChange={handleChange}
              type="text"
              name="username"
              required={true}
            />
            <label>Username</label>
          </div>

          <div className="user-box">
            <input
              onChange={handleChange}
              type="password"
              name="password"
              required={true}
            />
            <label>Password</label>
          </div>

          <div className="btn">
            <a onClick={formSubmit}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </a>

            <a className="register" href="/register">
              New User?
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginCard;
