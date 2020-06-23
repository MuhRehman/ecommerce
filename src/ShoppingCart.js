import React, { Component } from 'react'
import Cart from './Cart'
import DemoModal from './DemoModal'

class ShoppingCart extends Component {
state ={
    display : false,
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


    render () {
        return (
            <div>
             


             <DemoModal  appear={this.state.display}  closeModal={this.state.display} 

             content={
                <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">quantity</th>
                     <th scope="col">Cost</th>
                     {/* <th scope="col">Total</th> */}
                   
               </tr>
               </thead>
                <tbody>
                   {this.props.modalData.map((buyItem)=>{
                     return   <tr>
                        <td scope="col">{buyItem.uId}</td>
                        <td scope="col">{buyItem.title}</td>
                        <td scope="col">{buyItem.}</td>
                        <td scope="col">{buyItem.cost}</td>
                        </tr>
                   })
                   }
                </tbody>
                    </table>
            }         
             footer={
                
                 <button onClick={this.closeModalHandler} className="btn bg-primary text-white ">Close</button>
             }
             ></DemoModal>

             <div onClick= {this.modalHandler} className="bg-primary mb-3 text-center p-2" >
                <span class="badge badge-danger">12</span>
                <svg class="bi bi-cart-plus" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8.5 5a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 .5-.5z"/>
                <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0v-2z"/>
                <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg>
                    {/* <h2>Shopping Cart</h2> */}
                    </div>
            </div>
        )
    }
}

export default ShoppingCart