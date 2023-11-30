import React, { useState} from 'react'
import image from '../assets/logo2.png'
import { Link, NavLink } from 'react-router-dom'
import '../pages/style/Header.css'


const Header = () => {


  return (
    // <nav>
    //   <Link to="/" className="title">
    //     <img
    //           alt="logo"
    //           src={image}
    //           width="60"
    //           height="33"
    //           className="d-inline-block align-top"
    //         />
    //     Science
    //   </Link>
    //   <div className="menu" onClick={() => {
    //     setMenuOpen(!menuOpen)
    //   }}>
    //     <span></span>
    //     <span></span>
    //     <span></span>
    // </div>
    //   <ul className={menuOpen ? "open" : ""}>
    //     <li><NavLink to="/">Home</NavLink> </li>
    //     <li><NavLink to="/account">Account</NavLink> </li>
    //     <li><NavLink to="/quizzes">Quizzes</NavLink> </li>
    //     <li><NavLink to="/lessons">Lessons</NavLink> </li>
    //     <li><NavLink to="/report">Report</NavLink> </li>
    //     <li><NavLink to="/contact">Contact</NavLink> </li>
    //     <li><NavLink to="/login">Login</NavLink> </li>
    //     <li><button type="button" class="btn btn-outline-danger">Log Out</button> </li>
    //   </ul>
    // </nav>


    <div className='nav-container'>
      <nav className='main-nav'>
       <input type="checkbox" id='check' className='check-input-nav'/>
        <label for="check" id='checkbtn-nav'>
          <i className='fas fa-bars'></i>
        </label>
        <label id='logo' href='/'>
          <img
               alt="logo"
               src={image}
               width="60"
               height="35"
            className='photo-logo'/>
          Learning picnic
        </label>
      <ul className='unorderd-list-nav'>
        <li className='list-item-nav'><a className='link-list-item-nav' href='/'>Home</a></li>
        <li className='list-item-nav'><a className='link-list-item-nav' href='/lessons'>Lessons</a></li>
        <li className='list-item-nav'><a className='link-list-item-nav' href='/quizzes'>Quizzes</a></li>
        <li className='list-item-nav'><a className='link-list-item-nav' href='/report'>Report</a></li>
        <li className='list-item-nav'><a className='link-list-item-nav' href='/account'>Account</a></li>
        <li className='list-item-nav'><a className='link-list-item-nav' href='/contact'>Contact</a></li>
        <li className='list-item-nav'><a className='link-list-item-nav' href='/login'>Login</a></li>
        <li className='list-item-nav'><button type="button" class="btn btn-outline-danger">Log Out</button></li>
      </ul>
    </nav>
    </div>
   
  )
}

export default Header