import React from "react"
import "../style/Login.css"
import { Link } from "react-router-dom";
import close from './close.png'

function eyeVisible() {
  var x = document.getElementById("password");
  var y = document.getElementById("hide1");
  var z = document.getElementById("hide2");

  if (x.type === 'password') {
    x.type = "text";
    y.style.display = "block";
    z.style.display = "none";
    
  } else {
    x.type = "password";
    y.style.display = "none";
    z.style.display = "block";
  }
}

function register() {
  
  document.getElementById("signup").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "flex";
  })
}


function closeForm() {
   document.querySelector(".close").addEventListener("click", function () {
    document.querySelector(".popup").style.display = "none";
  })
}

const Login = () => {
  return (
    <div className="back">
    <div className="form-box">
      <form className="formLogin">
      <h1>Login</h1>
      <div className="input-box">
        <i class="fa-solid fa-envelope"></i>
        <input type="email" placeholder="Email address" required id="username"/>
        </div>
      <div className="input-box">
        <i class="fa-solid fa-key"></i>
        <input type="password" placeholder="Password" required id="password" />
        <span className="eye" onClick={eyeVisible}>
          <i id="hide1" class="fa-solid fa-eye"></i>
          <i id="hide2" class="fa-solid fa-eye-slash"></i>
        </span>
      </div>
      <button type="submit" className="login-btn">Log in</button>
      </form>
       <div className="forgot-password">
        <Link to="/forgetPassword">Forgotten Password?</Link>
      </div>
      <hr></hr>
        <button type='button' className="register-btn" onClick={register} id="signup">Create new account</button>
        </div>
      <div className="popup">
        <div className="popup-content">
          <form className="formSign">
          <h2>Sign Up</h2><br/>
          <input type="text" placeholder="First name" required id="firstname"/>
          <input type="text" placeholder="Last name" required id="lastname"/>
          <input type="text" placeholder="Email address" required id="Email" />
          <input type="password" placeholder="New password" required id="signup_password" />
          <div className="radio-btns">
            <span class="_5k_3" data-type="radio" data-name="type_wrapper" id="u_s_o_1C">
              <span class="_5k_2 _5dba">
              <label class="_58mt" for="student">Student</label>
              <input type="radio" class="_8esa" name="type" value="student" id="student" /></span>
              <span class="_5k_2 _5dba">
                <label class="_58mt" for="teacher">Teacher</label>
                <input type="radio" class="_8esa" name="type" value="teacher" id="teacher" />
              </span>
              <span class="_5k_2 _5dba">
                <label class="_58mt" for="parent">Parent</label>
                <input type="radio" class="_8esa" name="type" value="parent" id="parent" />
              </span>
            </span>
          </div>
            <button type="submit" className="signup-btn">Sign Up</button>
            </form>
          <p>By clicking Sign Up button, your account will be created.<br/>You may recieve notifications from us at any time.</p>
          <img src={close} alt="close" className="close" onClick={closeForm} />
        </div>
      </div>
      </div>
  )
}

export default Login