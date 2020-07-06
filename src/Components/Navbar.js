/// will draw a menu... simple
import React, { Component } from 'react';
// import './App.css';
import Button from 'react-bootstrap';
import {Link } from "react-router-dom";



class Navbar extends Component {
    render () {
        return (
         

      <nav className="navbar navbar-expand-sm   bg-primary">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}> </Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="" to={"/createitem"}> <button className="btn btn-sm btn-primary mr-3">Creat Item</button></Link>
              </li>
              <li className="nav-item">
                <Link className="" to={"/products1"}> <button className="btn btn-sm btn-primary mr-3">Actors</button></Link>
              </li>
              <li className="nav-item">
                <Link className="" to={"/products2"}><button className="btn btn-sm btn-primary">Quotes</button></Link>
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
              <li className="nav-item">
                <Link className="" to={"/checkout"}><button className="btn btn-sm btn-primary">Check Out</button></Link>
              </li>
              <li className="nav-item">
                {this.props.cart}
              </li>
             
            </ul>
          </div>
        </div>
      </nav>

      
    
    
        )
    }
}

export default Navbar