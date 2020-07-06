import React, { Component } from 'react'
import ItemList from '../Lists/ItemList'
import ShoppingCart from '../Lists/ShoppingCart';

const axios = require('axios');

class Products extends Component {


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
    let data = response.data;
   console.log(data);
   
     
    // this.setState({apiContent: response.data});
    this.setState({apiContent:data.map((item)=>{ item.src="logo192.png"; return item})}); 


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


    // secondDogApiCall = () => {
     
   
    //   axios.get('https://dog.ceo/api/breeds/image/random/100')
    //   .then((response)=> {
   
    //     let dogImages = response.data.message;
    //     let apitextContent = this.state.apiContent;
    
        
         
    //    this.setState({apiContent:apitextContent.map((item,index) => {

    //           item.src = dogImages[index];
    //           // console.log(cardContent);
              
    //           return item
    //    })}); 
    
    //   })
    //   .catch((error)=>{
    //     // handle error
    //     console.log(error);
    //   })
    //   ;
    //   }
    




    onBuy = (Item)=>{    
      ////// who calls this function  .... ITEM-LIST
      // console.log(Item);
      

      this.props.onBuy(Item);

      
    }

    render () {
        return (
            <div>
             



            <ItemList   apiData={this.state.apiContent} onBuyItem={this.onBuy}></ItemList>
            </div>
        )
    }
}

export default Products


