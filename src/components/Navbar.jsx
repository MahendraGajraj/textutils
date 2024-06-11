import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = ({ title, mode, toggleMode }) => {
  return (
    <>    
      <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" style={{fontSize:"30px"}} to="/">{title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" style={{fontSize:"30px"}}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" style={{fontSize:"30px"}} aria-current="page" to="/"><strong>Home</strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{fontSize:"30px"}} to="/about"><strong>Kids GK</strong></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" style={{fontSize:"30px"}} to="/calculator"><strong>Calculator</strong></Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" style={{fontSize:"30px"}} to="/clock"><strong>Digital Clock</strong></Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" style={{fontSize:"30px"}} to="/music"><strong>Music Player</strong></Link>
          </li>
            </ul>
            {/*<form className="d-flex" role="search">
         <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
         <button className="btn btn-primary" type="submit">Search</button>
  </form>*/}
            <div className={`form-check form-switch text-${mode === 'light' ? 'dark' : 'light'}`} style={{fontSize:"30px"}}>
              <input className="form-check-input" onClick={toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
              <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
          </div>
        </div>
      </nav>
     </>
  )
}

export default Navbar

