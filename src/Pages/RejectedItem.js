import React, { Component } from 'react'
import ItemList from '../Components/ItemList'
import Item from '../Components/Item';

// import { AppContext } from "./AppContext";
const axios = require('axios');

export default  class VerifyItems extends Component {

// static contextType = AppContext;
    state = {
        apiContent : [],   ///// ItemList
        shoppingCartItems : [],     //// Shopping Cart

    };
    constructor(props) {
      super(props)



    }


componentDidMount(){

  axios.get("https://mangakure.com/dummies")
  // axios.get('https://www.breakingbadapi.com/api/characters?limit=10&offset=10')
  .then((response) => {
    // handle success
    let data = response.data;
    // console.log(data);

    // this.setState({apiContent: response.data});

    let selectedItems = data.filter((item)=>   item.isRejected === true  );


    this.setState({apiContent : selectedItems});
  })
  .catch((error) => {
    // handle error
    console.log(error);
  });
  }


      
    
    


  

    render () {
        return (
       
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-6 mt-4">
                            
              {
              this.state.apiContent.map((item)=> 
               <Item
                product={item}
                onAction={this.onAction} 
                onSelect={(item)=>{console.log(item);}}
               
                />
                )}
              
              
  
           


          
            </div>
        )
    }
}




