import React, { Component } from "react";
import Toast from "react-bootstrap/Toast";

export default class Alert extends Component {
  render() {
    /// if appear prop is true. component should appear
    //  but only for the given "seconds" then the component should disappear

    return (
      // <div>
      //       <div className= {`alert alert-${this.props.type}
      //         ${this.props.appear === false ? "d-none": ""}` } style={{transition: "height 0.3s"}}

      //       role="alert"   >
      //       <button onClick={()=>{this.props.onDisappear()}} type="button" class="close" data-dismiss="alert" aria-label="Close">
      //                 <span aria-hidden="true">&times;</span>
      //                </button>
      //               {this.props.msg}
      //         </div>

      // </div>

      <Toast
        show={this.props.appear}
        onClose={this.props.onDisappear}
        delay={this.props.seconds * 1000}
        autohide
        style={{
          // position: "absolute",
          // top: 60,
          // right: 0,
          minWidth: "260px",
          backgroundColor: this.props.type,
        }}
      >
        <Toast.Header className="m-0 pl-3">
          {/* <img src="" className="rounded mr-2" alt="" /> */}
          <strong className="mr-auto">Notification</strong>
          <small className="ml-auto">Just Now</small>
        </Toast.Header>
        <Toast.Body
          className={`m-0 p-3 alert alert-${this.props.type}`}
          style={{ borderRadius: "0rem" }}
        >
          {this.props.msg}
        </Toast.Body>
      </Toast>
    );
  }
}
