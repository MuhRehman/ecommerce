import React, { Component } from 'react'
import ItemList from './ItemList'
import ShoppingCart from './ShoppingCart'
const axios = require('axios');

class componentName extends Component {


    state = {
        content : {},
        apiContent : [],
        shoppingCartItems : [],
        itemCount : 0
    };
    constructor(props) {
      super(props)
    }
componentDidMount(){

    
 
// Make a request for a user with a given ID
 

  
  axios.get('https://mangakure.com/dummies')
  .then((response)=> {
    // handle success
    let data = response.data;

    
     
    // this.setState({apiContent: response.data});
    this.setState({apiContent:data.map((item)=>{ item.src="logo192.png"; return item})}); 

    this.callSecondApi();

    // let temp = this.state.apiContent;

    // temp.push(response.data.message);
    //   this.setState({apiContent: response.data.message});

  })
  .catch((error)=>{
    // handle error
    console.log(error);
  })
  ;
  }




callSecondApi =()=>{ 

  axios.get('https://dog.ceo/api/breed/boxer/images/random/100')
  .then((response)=> {
    // handle success

    // console.log(response.data.message);
    // this.setState({apiContent: response.data});
    let dogies = response.data.message;

      let temp = this.state.apiContent;

     

     
      this.setState({apiContent: temp.map((item, index)=>{
        item.src= dogies[index]; 
          return item;
      })});

  })
  .catch((error)=>{
    // handle error
    console.log(error);
  });


}


    onBuy = (Item)=>{
  
    let  temp = this.state.shoppingCartItems;

    let singleCartItem =  temp.filter((itemCart)=>  itemCart.uId === Item.uId)
        this.setState({itemCount:temp.length});
        
if (singleCartItem[0]) {
  
} else {
 temp.push(Item);
}
 


     
    this.setState({  shoppingCartItems : temp});

       
      
    }
    render () {
        return (
            <div>
                <ShoppingCart   modalData={this.state.shoppingCartItems}     count={this.state.itemCount} ></ShoppingCart>
              <ItemList      apiData={this.state.apiContent} onMeraJahezWalaFunction={this.onBuy}></ItemList>
            </div>
        )
    }
}

export default componentName


