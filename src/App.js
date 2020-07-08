import React,{Component} from 'react';


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp  from "./Pages/SignUp";
import ShoppingCart from "./Lists/ShoppingCart";
import Products1 from "./Pages/Vegetables";
import CreateItem from "./Pages/AddItem";
import Products2 from "./Pages/Fruits";
import UserInfo from "./Pages/UserInfo";
import ItemList from './Lists/ItemList';
import Checkout from './Pages/Checkout';
import PageCom from './Pages/Vegetables';
import Navbar from './Components/Navbar';
import Cookies from  "universal-cookie";
import Fruits from './Pages/Fruits';
import Vegetables from './Pages/Vegetables';
import AddItem from './Pages/AddItem';




/////// Remove mangakure and dog apis.  rather load the actors API








class App extends Component {

  state ={shoppingCartItems : []}
    
  constructor (props){

  super (props);

  this.cookies = new Cookies();

  // console.log("App ka constructor");

   
  }

componentDidMount () {

  //// check if Application reloaded ... 

  // console.log("App ka didMount");

  // if (this.cookies.get("shoppingCartItems") != null)
  // {
   
  //   this.setState({shoppingCartItems: this.cookies.get("shoppingCartItems")});


  // }

  
  
  /////if yes then populate the the shoppingcart state variable from cookies




}






onBuy=(Item)  =>{

  let  temp = this.state.shoppingCartItems;
    
  //  console.log(temp);
   
////1)  try to find if the item being clicked/bouhgt is already in the shopping cart ?
let singleCartItem =  temp.filter((itemCart)=>  itemCart.id === Item.id)
  
    
if (singleCartItem[0]) {
  ////// 3) else if the item is already there in the shopping cart then we would only increment the quantity attribute by 1

////// Yes it is already in the shopping cart  ///. third Clause

singleCartItem[0].quantity += 1;

singleCartItem[0].totalCost = singleCartItem[0].price * singleCartItem[0].quantity;
//singleCartItem[0].cost += singleCartItem[0].cost;

this.setState({shoppingCartItems : temp });  

/// also please update the cookie variable 
this.cookies.set("shoppingCartItems", temp);

///// Javascript objects are by reference. ---- not by value /////




} else {

//// no it is for the first time being pushed.   ////// Second Clause
//// 2) if the item is not already in the shopping cart then we want to push the item in the shopping cart
//// with quantity attribute set to 1
Item.quantity=1;
Item.totalCost =Item.price;
temp.push(Item);
this.setState({shoppingCartItems : temp});
  /// also please update the cookie variable 
this.cookies.set("shoppingCartItems", temp);
}



}



onIncrease=(id)  =>{

  let  temp = this.state.shoppingCartItems;
    
  //  console.log(temp);
   
////1)  try to find if the item being clicked/bouhgt is already in the shopping cart ?
let singleCartItem =  temp.filter((itemCart)=>  itemCart.id === id)
  
    
if (singleCartItem[0]) {   /// for unexpected situations
  

singleCartItem[0].quantity += 1;

singleCartItem[0].totalCost = singleCartItem[0].price * singleCartItem[0].quantity;
//singleCartItem[0].cost += singleCartItem[0].cost;

this.setState({shoppingCartItems : temp });  

/// also please update the cookie variable 
this.cookies.set("shoppingCartItems", temp);

///// Javascript objects are by reference. ---- not by value /////


}
}
onDecrease=(id)=>{


  let  temp = this.state.shoppingCartItems;
    
let singleCartItem =  temp.filter((item)=> item.id == id)
 
if (singleCartItem[0]) {   
  

  singleCartItem[0].quantity -= 1;

  if(singleCartItem[0].quantity === 0) {
    this.onDelete(id);
    return 
  }
  
  
  singleCartItem[0].totalCost = singleCartItem[0].price * singleCartItem[0].quantity;
  //singleCartItem[0].cost += singleCartItem[0].cost;
    
    
  
  this.setState({shoppingCartItems : temp });  
  
  /// also please update the cookie variable 
  this.cookies.set("shoppingCartItems", temp);



}
}

onDelete =(id)  =>{


  let  temp = this.state.shoppingCartItems;
    
  //  console.log(temp);
   
////1)  try to find if the item being clicked/bouhgt is already in the shopping cart ?
let newCartItems =  temp.filter((itemCart)=>  itemCart.id !== id)
  



this.setState({shoppingCartItems : newCartItems });  

/// also please update the cookie variable 
this.cookies.set("shoppingCartItems", newCartItems);




}











render ()
{

  // console.log("app ka render");
  return (
    <div>
    <Router>
  <Navbar cart ={<ShoppingCart onIncrease= {this.onIncrease}  onDecrease= {this.onDecrease} onDelete={this.onDelete} cartItems={this.state.shoppingCartItems}/>}  />


    {/*         
    
      router - AppLayout component 
            
      <switch> 
      all the pages are inside the switch Tag 

      </switch>
  
        </appLayoutComponet>
        </router>
  
    */}


<Switch>
            <Route exact path='/'><Login></Login> </Route> 
            <Route exact path='/additem'>  <AddItem />  </Route> 
            <Route exact path='/vegetables'>  <Vegetables onBuy={this.onBuy} />  </Route> 
            <Route exact path='/fruits'>  <Fruits onBuy={this.onBuy} />  </Route> 
            
           
            <Route path="/sign-in"    > <Login></Login></Route> 
            <Route path="/sign-up"  > <SignUp></SignUp></Route> 
            <Route path="/userinfo" > <UserInfo></UserInfo></Route> 
            <Route path="/checkout"  ><Checkout></Checkout></Route> 
          </Switch>




     {/* <PageCom></PageCom> */}  
     </Router>
     </div>
     
  );
}
}

export default App;
