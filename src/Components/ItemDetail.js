import React, { Component } from "react";
import Stars from "./Stars";
import { AppContext } from "./AppContext";

class ItemDetail extends Component {
  static contextType = AppContext;

  render() {
    return (
      <div>
        <div className="col mt-3">
          <div className="card">
            <img
              className=""
              src={`https://mangakure.com/${this.props.product.image.url}`}
              style={{ objectFit: "contain" }} //// explaination  udhaar/////
              alt="..."
            />
            <div className="p-3 text-center">
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
      </div>
    );
  }
}

export default ItemDetail;
