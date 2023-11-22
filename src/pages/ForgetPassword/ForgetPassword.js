import React from 'react'
import '../style/ForgetPassword.css'
import main from '../../assets/main.png'
import { Link } from 'react-router-dom'

const ForgetPassword = () => {
  return (
     <div class="container pt-5">
        <div class="row">
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 text-center">
                <img src={main} alt="Main IMG" class="img-fluid"/>
            </div>
            <div class="col-12 col-sm-12 col-md-12 col-lg-6 pt-5">
                <h2 class="main-text pt-5 mt-5">Forgot <br/> Your Password</h2>
                <input type="e-mail" placeholder="Enter Your E-mail" class="form-control main-input mt-5"/>
                <div class="row">
                    <div class="col-3">
                        <button type='button' class="btn btn-sz-primary mt-5">Reset</button>
                    </div>
                    <div class="col-6 pt-5">
                        <Link to="/login" className='back-to-login'>Back to login page</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForgetPassword;