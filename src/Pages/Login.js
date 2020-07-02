//// will draw a form. username and password.
import React, { Component } from 'react'
import "./css/Style.css";
    
class componentName extends Component {
    render () {
        return (
            <div style={{
                
                width: "450px",
                margin: "auto",
                background: "#ffffff",
                boxShadow: "0px 1px 5px rgba(34, 35, 58, 0.2)",
                padding: "40px 55px 45px 55px",
                borderRadius: "15px",
                marginTop:"130px"
             
              }}>
            {/* <div className="col-4"></div> */}
            <div className="">

            <form>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                    Forgot <a href="#">password?</a>
                </p>
            </form>
            </div>
            </div>
        )
    }
}

export default componentName