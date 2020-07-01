import React, { Component } from "react";

/////// how to Use  ////

{
  /*

    <Stars
        likes={4}     // print 4 golden stars 
        outOf ={10}   // Number of total stars--- Optional prop.. if not provided --default value 5
    />

*/
}

export default class Stars extends Component {
  constructor(props) {
    super(props);

    this.goldenStar = (
      <svg
        className="bi bi-star-fill"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="gold"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
    );

    this.greyStar = (
      <svg
        className="bi bi-star-fill"
        width="1em"
        height="1em"
        viewBox="0 0 16 16"
        fill="grey"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
      </svg>
    );
  }

  helperRender = () => {
    let unlikes = this.props.outOf
      ? this.props.outOf - this.props.likes
      : 5 - this.props.likes;

    let Ui = [];

    for (let index = 0; index < this.props.likes; index++) {
      Ui.push(this.goldenStar);
    }

    for (let index = 0; index < unlikes; index++) {
      Ui.push(this.greyStar);
    }

    return Ui;
  };

  render() {
    //// To draw as many start as provided in the prop 'likes'

    return <div>{this.helperRender()}</div>;
  }
}
