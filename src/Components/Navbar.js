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
                <Link className="" to={"/createitem"}>
                   <button className="btn btn-sm btn-primary mr-3">
                  
                    <svg className="" width="1em" height="1em" viewBox="0 0 16 16" className="bi mb-1 mr-1 bi-plus-circle-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z"/>
</svg>Add Item</button></Link>
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