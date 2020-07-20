/// will draw a form for signup. ... bla bla


import React, { Component } from 'react'
import Form  from 'react-bootstrap/Form'
import axios from "axios";

class componentName extends Component {

 state = {
        validation : false,
     }

 postData = () => {
   
    let data = {username:this.state.username,FullName:this.state.FullName,password:this.state.password,email:this.state.email};
    
    axios({
      method: "post",
      url: "https://mangakure.com/auth/local/register",
      data
    })
      .then((success) => {
        
        // let newObj =this.stateReset();
        
        // newObj.alertMsg ="Record has been successfully created";
        // newObj.alertType= "success";
        // newObj.alertAppear= true;
        
        // this.setState(newObj);

        console.log(success);
          
        })
        /// display that record has been uploaded.
      
      .catch((err) => {
       

        console.log(err);

        ////  display the error msg
      });
  };





onSubmit = (e) => {
 
        e.preventDefault();
        let form = e.currentTarget;

        if (form.checkValidity())
       this.postData();
       
        this.setState({ validation : true });
}

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
            <Form  
            noValidate 
            validated = {this.state.validation}
            

            onSubmit={this.onSubmit}       
                >
            <h3>Sign Up</h3>

            <div className="form-group">
                <label>Full Name</label>
                <input type="text" required name="FullName" className="form-control" onChange={(e)=>{this.setState({[e.target.name] : e.target.value})}} placeholder="First name" />
                <Form.Control.Feedback type="valid">
   
   Very Good
 </Form.Control.Feedback>

 <Form.Control.Feedback type="invalid">
  First Name is mandatory
 </Form.Control.Feedback>
            </div>

            <div className="form-group">
                <label>Username</label>
                <input type="input" required className="form-control" name="username" onChange={(e)=>{this.setState({[e.target.name] : e.target.value})}} placeholder="Username" />
                <Form.Control.Feedback type="valid">
   
   Very Good
 </Form.Control.Feedback>

 <Form.Control.Feedback type="invalid">
  Last Name is mandatory
 </Form.Control.Feedback>
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" required className="form-control" name="email" onChange={(e)=>{this.setState({[e.target.name] : e.target.value})}} placeholder="Enter email" />
                <Form.Control.Feedback type="valid">
   
   Very Good
 </Form.Control.Feedback>

 <Form.Control.Feedback type="invalid">
  Username is mandatory
 </Form.Control.Feedback>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" required className="form-control" name="password" onChange={(e)=>{this.setState({[e.target.name] : e.target.value})}} placeholder="Enter password" />
                <Form.Control.Feedback type="valid">
   
   Very Good
 </Form.Control.Feedback>

 <Form.Control.Feedback type="invalid">
 Password is mandatory
 </Form.Control.Feedback>
            </div>

            <button type="submit"  className="btn btn-primary btn-block">Sign Up</button>
            <p className="forgot-password text-right">
                Already registered <a href="sign-in">sign in?</a>
            </p>
        </Form>
        </div>
       
        )
    }
}

export default componentName