import React from "react"
import "../style/Login.css"
import { Link, useNavigate } from "react-router-dom";
import close from './close.png'
import { useState } from "react";
import axios from 'axios'
import { Alert } from "bootstrap";
import { setAuthUser } from "../../helper/Storage";

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
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
    loading: false,
    err: []
  })

  const [registration, setRegistration] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    role: "",
    loading: false,
    err: []
  })


  const LoginFun = (e) => {
    e.preventDefault();
    setLogin({ ...login, loading: true, err: [] })
    axios.post("http://localhost:4000/users", {
      email: login.email,
      password: login.password,
    }).then(resp => {

      setLogin({ ...login, loading: false, err: [] })
      setAuthUser(resp.data)
      navigate("/")
      
    }).catch(errors => {

      console.log(errors);
      setLogin({...login, loading: false, err: errors.response.data})
      
    });
  }

  const RegisterationFun = (e) => {
    e.preventDefault();
    setRegistration({ ...registration, loading: true, err: [] });
    axios.post("http://localhost:4000/users", {
      email: registration.email,
      password: registration.password,
      firstName: registration.firstName,
      lastName: registration.lastName,
      role: registration.role
    }).then((resp) => {
      setRegistration({ ...registration, loading: false, err: [] })
      setAuthUser(resp.data)
      navigate("/")
    }).catch((errors) => {
      setRegistration({
        ...registration,
        loading: false,
        err:errors.response.data.errors
      })
    })
  }


  return (
    <div className="back">
      <div className="form-box">
        {login.err.map((error, index) => (
          <Alert key={index} variant="danger" className="p-2">
            {error.msg}
          </Alert>
        ))

        }
      <form className="formLogin" onSubmit={LoginFun}>
      <h1>Login</h1>
      <div className="input-box">
        <i class="fa-solid fa-envelope"></i>
            <input type="email" placeholder="Email address" required id="username"
              value={login.email} onChange={(e) => setLogin({ ...login, email: e.target.value })} />
        </div>
      <div className="input-box">
        <i class="fa-solid fa-key"></i>
            <input type="password" placeholder="Password" required id="password"
              value={login.password} onChange={(e) => setLogin({ ...login, password: e.target.value })} />
        <span className="eye" onClick={eyeVisible}>
          <i id="hide1" class="fa-solid fa-eye"></i>
          <i id="hide2" class="fa-solid fa-eye-slash"></i>
        </span>
      </div>
      <button type="submit" className="login-btn" disabled={login.loading === true}>Log in</button>
        </form>
        


       <div className="forgot-password">
        <Link to="/forgetPassword">Forgotten Password?</Link>
      </div>
      <hr></hr>
        <button type='button' className="register-btn" onClick={register} id="signup">Create new account</button>
      </div>

      



      <div className="popup">
        <div className="popup-content">
          <form className="formSign" onSubmit={RegisterationFun}>
          <h2>Sign Up</h2><br/>
            <input type="text" placeholder="First name" required id="firstname"
              value={registration.firstName} onChange={(e) => setRegistration({ ...registration, firstName: e.target.value })} />
            
            <input type="text" placeholder="Last name" required id="lastname"
              value={registration.lastName} onChange={(e) => setRegistration({ ...registration, lastName: e.target.value })} />
            
            <input type="email" placeholder="Email address" required id="Email" 
              value={registration.email} onChange={(e) => setRegistration({ ...registration, email: e.target.value })} />
            
            <input type="password" placeholder="New password" required id="signup_password" 
              value={registration.password} onChange={(e) => setRegistration({...registration, password: e.target.value})} />
              
          <div className="radio-btns">
            <span class="_5k_3" data-type="radio" data-name="type_wrapper" id="u_s_o_1C">
              <span class="_5k_2 _5dba">
                  <label class="_58mt" for="student">Student</label>
                  <input type="radio" class="_8esa" name="type" value="student" id="student" 
                    
                  />
                </span>
              <span class="_5k_2 _5dba">
                <label class="_58mt" for="teacher">Teacher</label>
                  <input type="radio" class="_8esa" name="type" value="teacher" id="teacher"
                    
                />
              </span>
              <span class="_5k_2 _5dba">
                <label class="_58mt" for="parent">Parent</label>
                  <input type="radio" class="_8esa" name="type" value="parent" id="parent"
                    
                />
              </span>
            </span>
          </div>
            <button type="submit" className="signup-btn" disabled={registration.loading === true}>Sign Up</button>
            </form>
          <p>By clicking Sign Up button, your account will be created.<br/>You may recieve notifications from us at any time.</p>
          <img src={close} alt="close" className="close" onClick={closeForm} />
        </div>
      </div>
      </div>
  )
}

export default Login