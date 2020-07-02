/// will draw a form for signup. ... bla bla


import React, { Component } from 'react'

class componentName extends Component {
    render () {
        return (
            <div className ="mt-3 mr-5" style={{
               
                
                width: "450px",
                // margin: "auto",
                float:"right",
                background: "#ffffff",
                boxShadow: "0px 1px 5px rgba(34, 35, 58, 0.2)",
                padding: "40px 55px 45px 55px",
                borderRadius: "15px",
                           
              }}>
            <form>
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>First name</label>
                <input type="text" className="form-control" placeholder="First name" />
            </div>

            <div className="form-group">
                <label>Last name</label>
                <input type="text" className="form-control" placeholder="Last name" />
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="#">sign in?</a>
            </p>
        </form>
        </div>
        )
    }
}

export default componentName