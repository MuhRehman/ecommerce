import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Stars from './Stars';

class Item extends Component {


state = {
    mode:{},
    onText:false,
    descriptionText :"Show"
};
    
constructor(props){

    super(props); 


this.NoShadow =  {boxShadow:"rgba(135, 133, 137, 0.45) 0px 0px 0px 0px, rgba(50, 48, 35, 0.53) 0px 0px 0px 0px"};
this.Shadow = {boxShadow:"rgba(135, 133, 137, 0.45) 10px 12px 12px 8px, rgba(50, 48, 35, 0.53) 0px 0px 0px 0px"};

//   this.state.mode = {border:"2px solid red"};
  this.setState({mode:this.Shadow});
};


textToggle = () => {

   

    
}
    render () {
        return (

            <div className="col mt-3"
             onClick={()=>{this.props.CardDetail(this.props.cardId)}} 
             >
              <div   className="card"style={this.state.mode}
              onMouseEnter={()=>{this.setState({mode:this.Shadow})}}
              onMouseLeave={()=>{this.setState({mode:this.NoShadow})}}
             >
  <img src={this.props.imgSrc} style={{height:"190px",margin:"auto",objectFit:"cover"}}
   className="card-img-top" alt="..."/>
  <div className="card-body text-center">
        <h5 className="card-title">{this.props.cardTitle}</h5>
        <div 
         onClick={
            (e)=>{  
                e.stopPropagation();
                this.setState({ descriptionText :this.state.descriptionText=="Show"? "Hide":"Show"})
                }
        
            }
         className="card-text text-danger"> 
         <p style={{display:this.state.descriptionText=="Show"? "none":"block"}}> Description {this.props.cardText} </p>
        <a style={{fontSize: "13px", textColor: "blue"}}
       
        >{this.state.descriptionText} </a>
        </div>
        
        <p className="card-text">{this.props.cardText}</p>
        <p className="card-text">{this.props.cardId}</p>
        <p className="card-text ">{this.props.cardCost}</p>
        <Stars likes={this.props.cardLikes}  ></Stars>
   
    <button onClick={
    (e)=>{
        e.stopPropagation();
        this.props.onBuyClickItem(this.props.cardId);
     
    }
    

    } className="btn btn-sm btn-primary mt-3">Buy Now</button>
  </div>
</div>
        
            </div>
        )
    }
}

export default Item