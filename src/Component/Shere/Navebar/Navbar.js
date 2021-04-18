import React from "react";
import "./Navbar.css";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../setting.svg"
import { UserContext } from "../../../App";

const Navbar = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <div className='border border-danger'>
      <nav className="navbar navbar-expand-lg container-fluid " style={{backgroundColor:'#353535'}}>
        <Link className="navbar-brand d-flex align-items-center " style={{padding:'0',margin:'0'}} to="/">
          <img style={{ width: "15%" }} src={logo} alt="" className="img-fluid"/>
          <div className='align-items-center pl-3'>
          <h4 style={{color:"red"}}>Restore</h4>
          <p style={{color:'white'}}><small> Repair <span style={{color:'yellow'}}>Services</span></small></p>
          </div>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{backgroundColor:"blue",color:'yellow'}}
        >
          <span className="navbar-toggler-icon" style={{color:"red !important"}}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto  align-items-center">
             <a className="nav-link ml-2" href="#home" style={{color:"white"}}>Home</a>
             <a className="nav-link ml-2" href="#service" style={{color:"white"}}>Service</a>
             <a className="nav-link ml-2" href="#member" style={{color:"white"}}>Member</a>
                        <a className="nav-link ml-2" href="makeadmin" style={{color:"white"}}>Admin</a>
                        <a className="nav-link ml-2" href="order" style={{color:"white"}}>Dashboard</a>
                        
                        <a className="nav-link ml-2" href="#contact" style={{color:"white"}}>Contact Us</a>
            <Link className="ml-2" to="/login">
              <button className="btn btn-danger nav-link text-light p-3">
                 Login
              </button>
            </Link>
            {loggedInUser.userExist && (
              <button
                onClick={() => setLoggedInUser({})}
                className="btn btn-dark nav-link text-light ml-2"
              >
                Log-Out
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
