import React, { Component } from 'react'
import ItemList from './ItemList'
import ShoppingCart from './ShoppingCart'

class componentName extends Component {


    state = {
        content : {},
        apiContent : [],
        shoppingCartItems : []
    };
    constructor(props) {
      super(props)
    }
componentDidMount(){

    const axios = require('axios');
 
// Make a request for a user with a given ID
axios.get('https://mangakure.com/dummies')
  .then((response)=> {
    // handle success
    // console.log(response.data);
    this.setState({apiContent: response.data});
  })
  .catch((error)=>{
    // handle error
    console.log(error);
  })
  .finally(()=>{
    // always executed
  });

 
}



    onBuy = (Item)=>{
  
    let  temp = this.state.shoppingCartItems;

    let singleCartItem =  temp.filter((itemCart)=>  itemCart.uId === Item.uId)

if (singleCartItem[0]) {
  
} else {
 temp.push(Item);
}
 
// ////////// BASIC  ....BASIC ... ...BASIC.... /////

// ////  1) declare 2) access /Use  3) assign

// //////   OBJECTS    ---- Key --- Value

// let obj ={};  ///// Declare

// obj={name:"ubaid"};      //////  {name:"ubaid"} assign

// obj.lastName="Rehman"   //// console.log(obj);  //////  {name:"ubiad, lastName:"Rehman"} assign

// obj = {age:25, height:"5 feet"};   ///////  {age:25, height:"5 feet"}  //// Over-write /// Assign

// obj.age=30;    //////{age:30, height:"5 feet"}

// obj.age1=0 //////{age:30, age1:0, height:"5 feet"}
// console.log( obj["age"] );  ///////// 30  ////// yaaaaad kar lo  Acccess ....
// obj.age  //// obj["age"]
// obj.age = obj.age1*2; //////{age:0  ,age1:0, height:"5 feet"}
// obj.item={name:"James", lastName:"bond"};///{age:0,age1:0, height:"5 feet" ,item:{name:"James", lastName:"bond"}}



// Object.keys(obj);  //////////  return the array of keys inside the object ["age","age1","height", "item"]

// Object.keys(obj.item);  //////////  return the array of keys inside the object//  ["name", "lastName"]

// Object.keys({casual:"", namname:""});  ////////// ["casual", "namname"]





// /////////////////////////// ARRAYS /////////////////////////////////


// let collection =[];     //////// declare

// collection[0]="koibhe"    ///// assing

// let var1 = "value" + "kuchBhe";    /////  valuekuchBhe

// collection.push(var1);  ///      [koibhe","valueKuchBhe"]

// collection.push({name:"james", lastname:"bond"}); // [koibhe","valueKuchBhe",{name:"james", lastname:"bond"}]

// collection.pop();  /////  removes the last element.. ///// [koibhe","valueKuchBhe"]

// let whatType = collection.map((item)=>item);  //// returns all the elements of the array. 

// ///ARRaY /// [koibhe","valueKuchBhe"]

// let myType = whatType.filter((item)=> item ==="koibhe" );

// let myType = whatType.map((item)=>{ 

//   if (item=="koibhie") return item;
//   } ); 

// ///// mytype //// ["koibhe"]




      












//////////////////  

     
    this.setState({  shoppingCartItems : temp});

       
      
    }
    render () {
        return (
            <div>
                <ShoppingCart   modalData={this.state.shoppingCartItems}  ></ShoppingCart>
              <ItemList      apiData={this.state.apiContent} onMeraJahezWalaFunction={this.onBuy}></ItemList>
            </div>
        )
    }
}

export default componentName