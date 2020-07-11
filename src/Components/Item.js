import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Stars from "./Stars";

import { AppContext } from "./AppContext";

class Item extends Component {
  static contextType = AppContext;

  state = {
    mode: {},
  };

  constructor(props) {
    super(props);

    this.normal = {
      boxShadow:
        "rgba(135, 133, 137, 0.45) 0px 0px 0px 0px, rgba(50, 48, 35, 0.53) 0px 0px 0px 0px",
    };
    this.hyper = {
      boxShadow:
        "rgba(135, 133, 137, 0.45) 10px 12px 12px 8px, rgba(50, 48, 35, 0.53) 0px 0px 0px 0px",
    };

    this.state.mode = this.normal;
  }

  render() {
    return (
      <div
        className="col mt-3"
        onClick={() => {
          this.props.onSelect(this.props.product);
        }}
      >
        <div
          className="card"
          style={this.state.mode}
          onMouseEnter={() => {
            this.setState({ mode: this.hyper });
          }}
          onMouseLeave={() => {
            this.setState({ mode: this.normal });
          }}
        >
          <img
            src={`https://mangakure.com/${this.props.product.image.url}`}
            style={{ height: "190px", margin: "auto", objectFit: "cover" }} //// explanation  udhaar/////
            className="card-img-top"
            alt="..."
          />
          <div className="p-3">
            <h5>{this.props.product.title} </h5>
            <Stars likes={this.props.product.likes}></Stars>

            <p className="card-text ">
              Price: {this.props.product.price} {this.props.product.currency}
              {" per "}
              {this.props.product.unit}{" "}
            </p>
            <p>{this.props.product.description} </p>

            <button
              onClick={(e) => {
                e.stopPropagation();
                this.context.onBuy(this.props.product);
              }}
              className="btn btn-sm btn-primary mt-3"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
