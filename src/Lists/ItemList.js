import React, { Component } from 'react'
import Item from '../Components/Item'   
import DemoModal from '../Components/DemoModal';


class ItemList extends Component {
   state = {
       showModal : false,
   };

constructor(props){
super(props);
    this.cardContent = [];
      
    

    this.selectedItem = {};
};
cardBuyHandler = (cardId)=> {

   let modalContent = [];

   modalContent = this.props.apiData.filter((product)=> product.uId === cardId  );


   
   
// console.log(modalContent[0]);
// this.setState({ showModal : true});
this.props.onBuyItem(modalContent[0]);

}
cardDetailHandler = (cardId) => { 
    let cardList =[];


    cardList = this.props.apiData.filter((data)=> data.uId  === cardId );
    this.selectedItem = cardList[0];
    //  console.log(this.selectedItem.title);
     this.setState({ showModal : true });
     
}
closeHandler = () => {
    this.setState({ showModal : false });
     
}

buyNowHandler = (uId) => {

    this.cardBuyHandler(uId);
 
     this.setState({ showModal : false });
     
}
    
cardDetailPrinter = () => {
    
     return <div className="ml-4 mt-2 mb-2">  
         <img src={this.selectedItem.src} width="120px"/><br></br>
         <strong>Title:</strong>  {this.selectedItem.title}<br></br>
         <strong>Description:</strong>      {this.selectedItem.description} <br></br>
         <strong>ID :</strong>       {this.selectedItem.uId} 
        </div>
}


    render () {
        return (
            <div className="container-fluid">
                {/* <img src="images/card11.png" /> */}
                {/* <h1> {this.modalContent.cardText}</h1> */}
                <DemoModal appear={this.state.showModal} closeModal={this.state.showModal}
                 content={this.cardDetailPrinter()}
                header1={"Rehman"}
                footer={<div>
                <button onClick={()=>{this.closeHandler()}} className="btn btn-primary"> Close</button>
                <button onClick={()=>{this.buyNowHandler(this.selectedItem.uId)}} className="btn btn-primary ml-1"> Buy Now</button>
                </div>
                 }
                >

                    
                </DemoModal>
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-6 mt-4">

              {/* {console.log(this.props.apiData)} */}

             {
            this.props.apiData.map((saleItem)=>{
                       return    <Item
                           cardId = {saleItem.uId}
                           imgSrc = {saleItem.src}
                           cardTitle = {saleItem.title}
                        //    cardText = {saleItem.status}
                           cardText = {saleItem.status}
                           cardCost = {saleItem.cost}
                           cardLikes = {saleItem.likes}
                           onBuyClickItem = {this.cardBuyHandler}
                           CardDetail = {this.cardDetailHandler}
                       > 
                      </Item>
                 }  
                )};
            </div>
            </div>
        )
    }
}

export default ItemList