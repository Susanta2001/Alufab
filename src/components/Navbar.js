import React from 'react'
import {Link} from 'react-router-dom';
import alufabLogo from './Images/ALUFAB_Final 1.png'

function Navbar() {
  return (
    // <div className='container'>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <Link className="navbar-brand" to="/">
      <img src={alufabLogo} alt=""/>
    </Link>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to='/home'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/services">Services</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/insights">Insights</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/blogs">Blogs</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/careers">Careers</Link>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn btn-outline-success" id='contact-btn' type="submit" style={{backgroundColor: "#003459", color: "#fff"}}>Contact Us</button>
      </form>
    </div>
  </div>
</nav>
    // </div>
  )
}

export default Navbar
