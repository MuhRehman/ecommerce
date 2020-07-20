import React, { Component } from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ShoppingCart from "./Components/ShoppingCart";
import UserInfo from "./Pages/UserInfo";
import Checkout from "./Pages/Checkout";
import Navbar from "./Components/Navbar";
import Cookies from "universal-cookie";
import Fruits from "./Pages/Fruits";
import Vegetables from "./Pages/Vegetables";
import AddItem from "./Pages/AddItem";
import ModifyItem from "./Pages/ModifyItem";
import VerifyItems from "./Pages/VerifyItems";
import RejectedItem from "./Pages/RejectedItem";
import { AppContext } from "./Components/AppContext";

class App extends Component {
  state = {
    shoppingCartItems: [],
    currentUser: {},
    isLoggedIn: false,
  };

  constructor(props) {
    super(props);

    this.cookies = new Cookies();

    this.state.onBuy = this.onBuy;
    this.state.onIncrease = this.onIncrease;
    this.state.onDelete = this.onDelete;
    this.state.onDecrease = this.onDecrease;
    this.state.login= this.login;

    
  }


  login =(user, jwt) =>{ 

  if (user != null && jwt!=""){
  this.setState ({currentUser:user, isLoggedIn:true});
this.cookies.set("currentUser",user);
this.cookies.set("jwt",jwt);

  }

  }





  componentDidMount() {
    //// check if Application reloaded ...

    // console.log("App ka didMount");

    if (this.cookies.get("shoppingCartItems") != null) {
      this.setState({
        shoppingCartItems: this.cookies.get("shoppingCartItems"),
      });
    }

    if (this.cookies.get("currentUser") != null) {
      this.setState({
        currentUser: this.cookies.get("currentUser"), isLoggedIn:true
      });
    }




    ///if yes then populate the the shoppingcart state variable from cookies
  }

  onBuy = (Item) => {
    let temp = this.state.shoppingCartItems;

    //  console.log(temp);

    ////1)  try to find if the item being clicked/bouhgt is already in the shopping cart ?
    let singleCartItem = temp.filter((itemCart) => itemCart.id === Item.id);

    if (singleCartItem[0]) {
      ////// 3) else if the item is already there in the shopping cart then we would only increment the quantity attribute by 1

      ////// Yes it is already in the shopping cart  ///. third Clause

      singleCartItem[0].quantity += 1;

      singleCartItem[0].totalCost =
        singleCartItem[0].price * singleCartItem[0].quantity;
      //singleCartItem[0].cost += singleCartItem[0].cost;

      this.setState({ shoppingCartItems: temp });

      /// also please update the cookie variable
      this.cookies.set("shoppingCartItems", temp);

      ///// Javascript objects are by reference. ---- not by value /////
    } else {
      //// no it is for the first time being pushed.   ////// Second Clause
      //// 2) if the item is not already in the shopping cart then we want to push the item in the shopping cart
      //// with quantity attribute set to 1
      Item.quantity = 1;
      Item.totalCost = Item.price;
      temp.push(Item);
      this.setState({ shoppingCartItems: temp });
      /// also please update the cookie variable
      this.cookies.set("shoppingCartItems", temp);
    }
  };

  onIncrease = (id) => {
    let temp = this.state.shoppingCartItems;

    //  console.log(temp);

    ////1)  try to find if the item being clicked/bouhgt is already in the shopping cart ?
    let singleCartItem = temp.filter((itemCart) => itemCart.id === id);

    if (singleCartItem[0]) {
      /// for unexpected situations

      singleCartItem[0].quantity += 1;

      singleCartItem[0].totalCost =
        singleCartItem[0].price * singleCartItem[0].quantity;
      //singleCartItem[0].cost += singleCartItem[0].cost;

      this.setState({ shoppingCartItems: temp });

      /// also please update the cookie variable
      this.cookies.set("shoppingCartItems", temp);

      ///// Javascript objects are by reference. ---- not by value /////
    }
  };
  onDecrease = (id) => {
    let temp = this.state.shoppingCartItems;

    let singleCartItem = temp.filter((item) => item.id == id);

    if (singleCartItem[0]) {
      singleCartItem[0].quantity -= 1;

      if (singleCartItem[0].quantity === 0) {
        this.onDelete(id);
        return;
      }

      singleCartItem[0].totalCost =
        singleCartItem[0].price * singleCartItem[0].quantity;
      //singleCartItem[0].cost += singleCartItem[0].cost;

      this.setState({ shoppingCartItems: temp });

      /// also please update the cookie variable
      this.cookies.set("shoppingCartItems", temp);
    }
  };

  onDelete = (id) => {
    let temp = this.state.shoppingCartItems;

    //  console.log(temp);

    ////1)  try to find if the item being clicked/bouhgt is already in the shopping cart ?
    let newCartItems = temp.filter((itemCart) => itemCart.id !== id);

    this.setState({ shoppingCartItems: newCartItems });

    /// also please update the cookie variable
    this.cookies.set("shoppingCartItems", newCartItems);
  };

  render() {
    // console.log("app ka render");
    return (
      <AppContext.Provider value={this.state}>
        <Router>
          <Navbar cart={<ShoppingCart />} />
          {this.state.isLoggedIn==true? <div> <h1> Welcome. Mr. {this.state.currentUser.FullName} </h1>  </div>:""}

          <Switch>
            <Route exact path="/">
              <Login></Login>{" "}
            </Route>
            <Route exact path="/updateitem">
              {" "}
              <ModifyItem />{" "}
            </Route>
            <Route exact path="/rejecteditem">
              {" "}
              <RejectedItem />{" "}
            </Route>
            <Route exact path="/additem">
              {" "}
              <AddItem />{" "}
            </Route>
            <Route exact path="/vegetables">
              {" "}
              <Vegetables />{" "}
            </Route>
            <Route exact path="/fruits">
              {" "}
              <Fruits onBuy={this.onBuy} />{" "}
            </Route>

            <Route path="/sign-in">
              {" "}
              <Login></Login>
            </Route>
            <Route path="/sign-up">
              {" "}
              <SignUp></SignUp>
            </Route>
            <Route path="/userinfo">
              {" "}
              <UserInfo></UserInfo>
            </Route>
            <Route path="/checkout">
              <Checkout></Checkout>
            </Route>
            <Route path="/verify">
              <VerifyItems></VerifyItems>
            </Route>
          </Switch>

          {/* <PageCom></PageCom> */}
        </Router>
      </AppContext.Provider>
    );
  }
}

export default App;
