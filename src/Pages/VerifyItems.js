import React, { Component } from 'react'
import ItemList from '../Lists/ItemList'
import ShoppingCart from '../Lists/ShoppingCart';

const axios = require('axios');

export default  class VerifyItems extends Component {


    state = {
        apiContent : [],   ///// ItemList
        shoppingCartItems : [],     //// Shopping Cart

    };
    constructor(props) {
      super(props)


      // console.log("Product1 ka Constructor");

    }


componentDidMount(){

  // console.log("Product1 ka didMount");
 
// Make a request for a user with a given ID
 
// https://www.breakingbadapi.com/api/characters
  // axios.get('https://www.breakingbadapi.com/api/characters')
  axios.get('https://mangakure.com/dummies')
  // axios.get('https://www.breakingbadapi.com/api/characters?limit=10&offset=10')
  .then((response)=> {
    // handle success
  //   let data = response.data;
  //  console.log(data);
   
     
    this.setState({apiContent: response.data});
    // this.setState({apiContent: data); 


    

  })
  .catch((error)=>{
    // handle error
    console.log(error);
  })
  ;
  }


      
    
    



    onBuy = (Item)=>{    
      
      

      this.props.onBuy(Item);

      
    }

    render () {
        return (
            <div>
             



            <ItemList   apiData={this.state.apiContent} onBuy={this.onBuy}
             btnContent={
               <div>
<button className="btn btn-sm btn-primary mt-3">Verify this Items</button>
<button className="btn btn-sm btn-primary mt-3">Reject</button>
</div>     }></ItemList>
            </div>
        )
    }
}




