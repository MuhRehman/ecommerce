import React, { Component } from 'react'
import Cart from '../Cart'
import SmartTable from '../Lists/SmartTable'
import DemoModal from '../Components/DemoModal'
import mystyles from '../Components/mycss.css'
import ShoppingCartItem from '../Components/ShoppingCartItem'


class ShoppingCart extends Component {
state ={
    display : false,
    increaseQuantity :  "",
    decreaseQuantity :  "",

 };
  constructor(props){
      super(props);

      
  }

     modalHandler = () => {
      
         this.setState({display : true});
     }
     closeModalHandler = () => {
      
         this.setState({display : false});
     }
     onIncrease = (id) => {
 
        this.props.onIncrease(id);
        // console.log(this.props.cartItems[0].quantity);
    //  let    increaseQuantityValue  =  this.props.cartItems[0].quantity  += this.props.cartItems[0].quantity;
    //           this.setState({increaseQuantity:  increaseQuantityValue})
     }
     onDecrease = (id) => {


        this.props.onDecrease(id);

        // // console.log("Decrease");
        // let    decreaseQuantityValue  =  this.props.cartItems[0].quantity  += this.props.cartItems[0].quantity;
        // this.setState({increaseQuantity:  increaseQuantityValue})
      
     }
     onDelete = (id) => {
        this.props.onDelete(id);      
     }


    render () {

        // let cartItems = this.props.cartItems.map((item)=>{ 
        //     //    console.log(item);
               
        //     let row ={};
        //     row.title= item.title;
        //     row.UnitPrice = item.price;
        //     row.Quantity = item.quantity;
        //     row.total   = item.totalCost
        //     // row.totalCost = item.totalCost;

         
         
         

    //         /////// I dont know///

    // return  row;
    //     })

        return (
            <div>
             
{/* <ShoppingCartItem></ShoppingCartItem> */}

             <DemoModal 
             

             appear={this.state.display} 
             
             closeModal={this.closeModalHandler} title={"Shopping Cart"} 

             content={ this.props.cartItems.length < 1 ? "Shopping Cart Is Empty.." :this.props.cartItems.map(
                 (product)=>{
                  return <ShoppingCartItem onIncrease={this.onIncrease} onDecrease={this.onDecrease}
                  onDelete={this.onDelete} product={product} 
                />}
                 )}         
            //  content={<SmartTable content={cartItems} />}         
             footer={
                
                 <button onClick={this.closeModalHandler} className="btn bg-primary text-white ">Close</button>
             }
             />

            
            <a>
            <button onClick={this.modalHandler} className="btn btn-sm btn-primary p-1"  >
                <svg class="bi bi-cart-plus mb-1 mr-1" width="1.3rem" height="1.3rem" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"/>
                <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0v-2z"/>
                <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
           <span className=""><sup className="badge badge-light  mr-1">{this.props.cartItems.length}</sup> Shopping Cart  </span>
           
            </button>
            </a>

            </div>
        )
    }
}

export default ShoppingCart