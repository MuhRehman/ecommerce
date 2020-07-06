import React, { Component } from 'react'
// import QuoteItem from '../Components/QuoteItem'   
import Item from '../Components/Item'   
import QuoteList from '../Lists/QuoteList'   
import DemoModal from '../Components/DemoModal';
const axios = require('axios');

class ItemList extends Component {
   state = {
       showModal : false,
       selectItem : [],
       collectionOfQuotes : [],
       isLoading: false,
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



cardBuyHandler = (cardId1)=> {

   let modalContent = [];

   modalContent = this.props.apiData.filter((product)=> product.char_id === cardId1  );


   
   
// console.log(modalContent[0]);
// this.setState({ showModal : true});
this.props.onBuyItem(modalContent[0]);

}
cardDetailHandler = (authorName) => { 
    // let cardList =[];
// console.log(authorName);

  ;

console.log(authorName)

this.setState({ showModal : true, isLoading:true }); 

    // axios.get(`https://www.breakingbadapi.com/api/characters?name=${authorName}`)
    axios.get(`https://www.breakingbadapi.com/api/quote?author=${authorName}`)
    .then((response)=>{
console.log(response.data);


this.setState({ collectionOfQuotes : response.data, isLoading:false } );

//   this.collectionOfQuotes = response.data;
})
.catch((error)=>{
    console.log(error);    
});

// console.log(author);

// cardList = this.props.apiData.filter((data)=> data.char_id  === char_id1 );
// this.selectedItem = cardList[0];


}

closeHandler = () => {
    // console.log("rehman");
    
    this.setState({ showModal : false });
     
}

buyNowHandler = (uId) => {

    this.cardBuyHandler(uId);
 
     this.setState({ showModal : false });
     
}
    
modelContentPrinter = ()=> {
     console.log(this.state.collectionOfQuotes);

     return this.state.isLoading ==true? (<div class="d-flex justify-content-center">
    <div class="spinner-border" role="status">
      <span class="sr-only">Loading...</span>
    </div>
    </div> ) : this.state.collectionOfQuotes.length <=0? "there is no data available": <QuoteList apiData={this.state.collectionOfQuotes} ></QuoteList>

}




    

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
                <DemoModal appear={this.state.showModal} closeModal={this.closeHandler}
                 content={this.modelContentPrinter()}
                header1={"Rehman"}
                footer={<div>
                <button onClick={()=>{this.closeHandler()}} className="btn btn-primary"> Close</button>
                <button onClick={()=>{this.buyNowHandler(this.selectedItem.uId)}} className="btn btn-primary ml-1"> Buy Now</button>
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

              
            this.props.apiData.map((saleItem)=>{
                       return    <Item
                           char_Id = {saleItem.char_id}
                           imgSrc = {saleItem.src}
                           cardTitle = {saleItem.title}
                           id = {saleItem.uId}
                       
                           descriptionText = {saleItem.description}
                          
                           cardCost = {saleItem.cost}
                           cardLikes = {saleItem.likes}
                           onBuyClickItem = {this.cardBuyHandler}
                           CardDetail = {this.cardDetailHandler}
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