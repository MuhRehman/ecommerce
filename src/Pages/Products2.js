import React, { Component } from 'react'
import QuoteList from '../Lists/QuoteList'
import ShoppingCart from '../Lists/ShoppingCart'
const axios = require('axios');

class Products extends Component {


    state = {
      apiContent : [],  
      shoppingCartItems : [], 
    dataApi : {},
    apiData : []
    };
    constructor(props) {
      super(props)
    }
componentDidMount(){

    
 
// Make a request for a user with a given ID
 








  
  axios.get('https://www.breakingbadapi.com/api/quote?author=Jesse+Pinkman')
  .then((response)=> {
    // handle success
    let data = response.data;

      // let objData = Object.keys(data);
      
      // console.log(data[0].quote);
   
     
    this.setState({apiData:data});
    // this.setState({apiContent:data.map((item)=>{ item  return item})}); 


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


    




    onBuy = (Item)=>{        
        this.props.onBuy(Item);
          }
 

    

    render () {
        return (
            <div className="container-fluid">
             
            <QuoteList      apiData={this.state.apiData} onBuyItem={this.onBuy}></QuoteList>
            </div>
        )
    }
}

export default Products

