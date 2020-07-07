import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Stars from '../Stars';

class Item extends Component {


state = {
    mode:{},
    onText:false,
    descriptionText :"Show More"
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
             onClick={()=>{this.props.cardDetail(this.props.title)}}>
              <div   className="card"style={this.state.mode}
              onMouseEnter={()=>{this.setState({mode:this.Shadow})}}
              onMouseLeave={()=>{this.setState({mode:this.NoShadow})}}
             >
  
  <div className="p-3">
        <h5>{this.props.quote}</h5>
        <p>{this.props.title}</p>
        <p>{this.props.cardDetail}</p>
     
  </div>
</div>
        
            </div>
        )
    }
}

export default Item