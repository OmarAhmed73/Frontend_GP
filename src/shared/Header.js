import React, { useState} from 'react'
import image from '../assets/logo2.png'
import { Link, NavLink } from 'react-router-dom'
import '../pages/style/Header.css'


const Header = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        <img
              alt="logo"
              src={image}
              width="60"
              height="33"
              className="d-inline-block align-top"
            />
        Science
      </Link>
      <div className="menu" onClick={() => {
        setMenuOpen(!menuOpen)
      }}>
        <span></span>
        <span></span>
        <span></span>
    </div>
      <ul className={menuOpen ? "open" : ""}>
        <li><NavLink to="/">Home</NavLink> </li>
        <li><NavLink to="/account">Account</NavLink> </li>
        <li><NavLink to="/quizzes">Quizzes</NavLink> </li>
        <li><NavLink to="/lessons">Lessons</NavLink> </li>
        <li><NavLink to="/report">Report</NavLink> </li>
        <li><NavLink to="/contact">Contact</NavLink> </li>
        <li><NavLink to="/login">Login</NavLink> </li>
        <li><button type="button" class="btn btn-outline-danger">Log Out</button> </li>
      </ul>
    </nav>
  )
}

export default Header