/// will draw a menu... simple
import React, { Component } from 'react';
// import './App.css';
import {Link } from "react-router-dom";



class Navbar extends Component {
    render () {
        return (
         

      <nav className="navbar navbar-expand-lg  bg-primary">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}> </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="" to={"/products"}> <button className="btn btn-sm btn-primary mr-3"> Products</button></Link>
              </li>
              <li className="nav-item">
                <Link className="" to={"/sign-in"}> <button className="btn btn-sm btn-primary mr-3"> Login</button></Link>
              </li>
              <li className="nav-item">
                <Link className="" to={"/sign-up"}><button className="btn btn-sm btn-primary"> Sing Up</button></Link>
              </li>
              <li className="nav-item">
                <Link className="" to={"/userinfo"}><button className="btn btn-sm btn-primary">User Info</button></Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      
    
    
        )
    }
}

export default Navbar