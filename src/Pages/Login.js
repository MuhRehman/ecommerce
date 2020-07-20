//// will draw a form. username and password.
import React, { Component } from "react";
import "./css/Style.css";
import { Form, Spinner } from "react-bootstrap";
import axios from "axios";
import Alert from "../Components/Alert";
import { AppContext } from "../Components/AppContext";
import { Redirect } from "react-router-dom";

class componentName extends Component {
  static contextType = AppContext;

  state = {
    validation: false,
    isLoading: false,
    alertAppear: false,
    alertType: "",
    alertMsg: "",
    login: "",
  };

  postData = () => {
    this.setState({ isLoading: true });

    let data = {
      identifier: this.state.username,
      password: this.state.password,
    };

    console.log(data);

    /////// 1) Display a spinner so that user knows k us ka process chal raha hey.......

    axios({
      method: "post",
      url: "https://mangakure.com/auth/local",
      data,
    })
      .then((success) => {
        ///// Stop the spinner

        this.setState({
          isLoading: false,
          alertAppear: true,
          alertMsg: "Welcome you Login Successfully.!",
          alertType: "success",
        });

        // we rather chose to inform the APP
        this.context.login(success.data.user, success.data.jwt);

        //// Take the user to the profile page.
      })
      /// display that record has been uploaded.

      .catch((err) => {
        console.log(err);
        this.setState({ isLoading: false });
        this.setState({ alertAppear: true });
        this.setState({ alertMsg: "Sorry you wrong Info" });

        this.setState({ alertType: "danger" });
        ////  display the error msg
      });
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ validation: true });

    let form = e.currentTarget;

    if (form.checkValidity()) this.postData();
    /// this is a comment
  };

  render() {
    if (this.context.isLoggedIn == true) return <Redirect to="/userinfo" />;

    if (this.state.isLoading == true)
      return (
        <center className="mt-4">
          {" "}
          <Spinner animation="grow" size={"lg"} variant="primary"></Spinner>
        </center>
      );
    return (
      <div
        style={{
          width: "450px",
          margin: "auto",
          background: "#ffffff",
          boxShadow: "0px 1px 5px rgba(34, 35, 58, 0.2)",
          padding: "40px 55px 45px 55px",
          borderRadius: "15px",
          marginTop: "130px",
        }}
      >
        {/* <div className="col-4"></div> */}
        <div className="">
          <Alert
            msg={this.state.alertMsg}
            seconds={5}
            type={this.state.alertType}
            appear={this.state.alertAppear}
            onDisappear={() => {
              this.setState({
                alertAppear: false,
                alertMsg: "",
                alertType: "",
              });
            }}
          ></Alert>

          {this.state.alertAppear == false ? (
            <Form
              noValidate
              validated={this.state.validation}
              onSubmit={this.onSubmit}
            >
              <h3>Sign In</h3>

              <Form.Group>
                <label>Username</label>
                <input
                  required
                  type="input"
                  className="form-control"
                  name="username"
                  onChange={(e) => {
                    this.setState({ [e.target.name]: e.target.value });
                  }}
                  placeholder="Enter email"
                />

                <Form.Control.Feedback type="valid">
                  Very Good
                </Form.Control.Feedback>

                <Form.Control.Feedback type="invalid">
                  Username is mandatory
                </Form.Control.Feedback>
              </Form.Group>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  required
                  name="password"
                  onChange={(e) => {
                    this.setState({ [e.target.name]: e.target.value });
                  }}
                  className="form-control"
                  placeholder="Enter password"
                />

                <Form.Control.Feedback type="valid">
                  Very Good
                </Form.Control.Feedback>

                <Form.Control.Feedback type="invalid">
                  Password is required
                </Form.Control.Feedback>
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="customCheck1"
                  />
                  <label
                    className="custom-control-label"
                    htmlFor="customCheck1"
                  >
                    Remember me
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-block">
                Submit
              </button>
              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
            </Form>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default componentName;
