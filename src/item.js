import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class Item extends Component {


state = {
    mode:{}
};
    
constructor(props){

    super(props); 


this.NoShadow =  {boxShadow:"rgba(135, 133, 137, 0.45) 0px 0px 0px 0px, rgba(50, 48, 35, 0.53) 0px 0px 0px 0px"};
this.Shadow = {boxShadow:"rgba(135, 133, 137, 0.45) 10px 12px 12px 8px, rgba(50, 48, 35, 0.53) 0px 0px 0px 0px"};

//   this.state.mode = {border:"2px solid red"};
  this.setState({mode:this.Shadow});
};
    render () {
        return (

            <div className="col" onClick={()=>{this.props.CardDetail(this.props.cardId)}} >
              <div   className="card"style={this.state.mode}
              onMouseEnter={()=>{this.setState({mode:this.Shadow})}}
              onMouseLeave={()=>{this.setState({mode:this.NoShadow})}}
             >
  <img src={this.props.imgSrc} style={{width:"120px",height:"190px",margin:"auto"}}
   className="card-img-top" alt="..."/>
  <div className="card-body text-center">
        <h5 className="card-title">{this.props.cardTitle}</h5>
        <p className="card-text">{this.props.cardText}</p>
        <p className="card-text">{this.props.cardId}</p>
    <button onClick={
    (e)=>{
        e.stopPropagation();
        this.props.onBuyClickItem(this.props.cardId);
     
    }

    } className="btn btn-sm btn-primary">Buy Now</button>
  </div>
</div>
        
            </div>
        )
    }
}

export default Item