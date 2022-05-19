import React from 'react'
import '../CSS/LoginCard.css'
import {Link} from "react-router-dom"



function LoginCard() {
  return (
    <div className='body-container'>
      <div className="login-box">
      <h2>Login</h2>
      <form>
        <div className="user-box">
          <input type="text" name="" required=""/>
          <label>Username</label>
        </div>
        <div className="user-box">
          <input type="password" name="" required=""/>
          <label>Password</label>
        </div>
        <div className='btn'>
        <a href="#">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </a>
        
          <a className='register' href="/register">
            New User?
          </a>
        
        </div>
      </form>
    </div>
  </div>

  )
}

export default LoginCard