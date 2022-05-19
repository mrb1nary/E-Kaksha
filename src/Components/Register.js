import React from 'react'
import '../CSS/Register.css'




function Register() {
  return (
    <div className='body-container'>
      <div className="login-box">
      <i class="fa-solid fa-angle-left"></i>
      <h2>Register</h2>
      <form>


        <div className="user-box">
          <input type="text" name="" required=""/>
          <label>Username</label>
        </div>

        
        <div className="user-box">
          <input type="id" name="" required=""/>
          <label>Student/Teacher ID</label>
        </div>

        <div className="user-box">
          <input type="password" name="" required=""/>
          <label>Password</label>
        </div>
        <div className="user-box">
          <input type="cpassword" name="" required=""/>
          <label>Confirm Password</label>
        </div>

        <div className='btn'>
        <a href="#">
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
  )
}

export default Register