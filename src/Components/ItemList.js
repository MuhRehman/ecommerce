import React, { Component } from "react";
// import QuoteItem from '../Components/QuoteItem'
import Item from "../Components/Item";
import DemoModal from "../Components/DemoModal";
import ItemDetail from "../Components/ItemDetail";
import { AppContext } from "../Components/AppContext";

const axios = require("axios");

class ItemList extends Component {
  static contextType = AppContext;
  state = {
    isLoading: false,
    modalAppear: false,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container-fluid">
        <DemoModal
          title={"Item Detail"}
          show={this.state.modalAppear}
          onClose={() => {
            this.setState({ modalAppear: false });
          }}
          content={<ItemDetail product={this.state.product}></ItemDetail>}
          footer={
            <div>
              <button
                className="btn btn-primary"
                onClick={() => {
                  this.setState({ modalAppear: false });
                }}
              >
                Close
              </button>
              <button
                onClick={() => {
                  this.context.onBuy(this.state.product);
                  this.setState({ modalAppear: false });
                }}
                className="btn btn-primary ml-1"
              >
                {" "}
                Buy Now
              </button>
            </div>
          }
        />
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-6 mt-4">
          {this.props.apiData.map((product) => {
            return (
              <Item
                key={product.id}
                product={product}
                onSelect={(product) => {
                  this.setState({ product, modalAppear: true });
                }}
              ></Item>
            );
          })}
        </div>
      </div>
    );
  }
}

export default ItemList;
