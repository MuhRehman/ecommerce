import React, { Component } from 'react'
// import QuoteItem from '../Components/QuoteItem'   
import Item from '../Components/Item'   
import QuoteList from './___DeadList/QuoteList'   
import DemoModal from '../Components/DemoModal';
import ItemDetail from '../Components/ItemDetail';
const axios = require('axios');

class ItemList extends Component {
   state = {
       showModal : false,
       selectItem : [],
       collectionOfQuotes : [],
       isLoading: false,
       modalData: [],
       msg :""
   };



constructor(props){
super(props);
    this.cardContent = [];
    this.renderCount =0;
    console.log("List item ka Constructor");
      
  
  

    
};


componentDidMount ()
{

    console.log("ListItem ka didMount")


}



onBuy = (id)=> {

   let modalContent = [];

   modalContent = this.props.apiData.filter((product)=> product.id === id  );


   
   
// console.log(modalContent[0]);
// this.setState({ showModal : true});
this.props.onBuy(modalContent[0]);

}
onDetail = (id) => { 




this.setState({ showModal : true, isLoading:false }); 

let selectedContent = this.props.apiData.filter((item)=>item.id == id);
this.setState({ modalData : selectedContent }); 
    //  console.log(selectedContent);
     
    // axios.get(`https://www.breakingbadapi.com/api/characters?name=${authorName}`)
//     axios.get(`https://www.breakingbadapi.com/api/quote?author=${authorName}`)
//     .then((response)=>{
// console.log(response.data);


// this.setState({ collectionOfQuotes : response.data, isLoading:false } );

// //   this.collectionOfQuotes = response.data;
// })
// .catch((error)=>{
//     console.log(error);    
// });

// console.log(author);

// cardList = this.props.apiData.filter((data)=> data.char_id  === char_id1 );
// this.selectedItem = cardList[0];


}

closeHandler = () => {
    // console.log("rehman");
    
    this.setState({ showModal : false });
     
}

buyNowHandler = (id) => {

    this.onBuy(id);
 
    
     
}
    
// modelContentPrinter = ()=> {
//     //  console.log(this.state.modalData);

//      return this.state.isLoading == true? (<div class="d-flex justify-content-center">
//     <div class="spinner-border" role="status">
//       <span class="sr-only">Loading...</span>
//     </div>
//     </div> )
//      : this.state.modalData.length <=0 ? "there is no data available": 
    
    

// }




    

///// Jitni dafa render .. utni dafa apka function


//// render ko kon trigger karta hey.. ?


    render () {
        // console.log("ListItem ka render");
        // this.renderCount +=this.renderCount;
        return (
            <div className="container-fluid">

                {/* Render count = {this.renderCount} */}
                {/* <img src="images/card11.png" /> */}
                {/* <h1> {this.modalContent.cardText}</h1> */}
                <DemoModal  title={"Item Detail"} appear={this.state.showModal} closeModal={this.closeHandler}
                 content={<ItemDetail  product={this.state.modalData[0]} onBuy={
    ()=>{this.onBuy(this.state.modalData[0].id);
     this.setState({ showModal : false });
     }
                 } ></ItemDetail>}
                footer={<div>
                <button onClick={()=>{this.closeHandler()}} className="btn btn-primary"> Close</button>
                <button onClick={()=>{this.onBuy(this.state.modalData[0].id);
                                   this.setState({ showModal : false });
                }} className="btn btn-primary ml-1"> Buy Now</button>
                </div>
                 }
                >

                    
                </DemoModal>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-6 mt-4">

              {/* {
             
                this.props.apiData.length == 0 ? 
                <div style={{margin:"200px auto"}} class="d-flex  justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="sr-only">Loading...</span>
                </div>
              </div> : ""
            } */}

             {

              
            this.props.apiData.map((product)=>{
                       return    <Item
                        
                           product= {product}     
                           onBuy = {this.onBuy}
                           onDetail = {this.onDetail}
                       > 
                      </Item>
                 }  
                )}
            </div>
            </div>
        )
    }
}

export default ItemList