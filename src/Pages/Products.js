import React, { Component } from 'react'
import ItemList from '../Lists/ItemList'
import ShoppingCart from '../Lists/ShoppingCart'
const axios = require('axios');

class Products extends Component {


    state = {
        content : {},
        apiContent : [],
        shoppingCartItems : [],
        itemCount : 0,
        quantity : 0
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
    this.secondDogApiCall();

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


    secondDogApiCall = () => {
     console.log("rega");
   
      axios.get('https://dog.ceo/api/breeds/image/random/100')
      .then((response)=> {
   
        let dogImages = response.data.message;
        let apitextContent = this.state.apiContent;
    
        
         
       this.setState({apiContent:apitextContent.map((item,index) => {

              item.src = dogImages[index];
              // console.log(cardContent);
              
              return item
       })}); 
    
      })
      .catch((error)=>{
        // handle error
        console.log(error);
      })
      ;
      }
    




    onBuy = (Item)=>{
      // console.log(Item);
      
    let  temp = this.state.shoppingCartItems;
    
      //  console.log(temp);
       
    ////1)  try to find if the item being clicked/bouhgt is already in the shopping cart ?
    let singleCartItem =  temp.filter((itemCart)=>  itemCart.uId === Item.uId)
      
        
if (singleCartItem[0]) {
      ////// 3) else if the item is already there in the shopping cart then we would only increment the quantity attribute by 1

////// Yes it is already in the shopping cart  ///. third Clause

singleCartItem[0].quantity += 1;

singleCartItem[0].totalCost = singleCartItem[0].cost * singleCartItem[0].quantity;
//singleCartItem[0].cost += singleCartItem[0].cost;

this.setState({shoppingCartItems : temp });

///// Javascript objects are by reference. ---- not by value /////



  
} else {

  //// no it is for the first time being pushed.   ////// Second Clause
   //// 2) if the item is not already in the shopping cart then we want to push the item in the shopping cart
    //// with quantity attribute set to 1
  Item.quantity=1;
  Item.totalCost =Item.cost;
 temp.push(Item);
 this.setState({itemCount:temp.length, shoppingCartItems : temp});

}
 


       
      
    }

    render () {
        return (
            <div>
            <ShoppingCart   modalData={this.state.shoppingCartItems}     count={this.state.itemCount} ></ShoppingCart>
            <ItemList      apiData={this.state.apiContent} onBuyItem={this.onBuy}></ItemList>
            </div>
        )
    }
}

export default Products


