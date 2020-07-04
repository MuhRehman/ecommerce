import React, { Component } from 'react'
// import QuoteItem from '../Components/QuoteItem'   
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
cardBuyHandler = (cardId1)=> {

   let modalContent = [];

   modalContent = this.props.apiData.filter((product)=> product.char_id === cardId1  );


   
   
// console.log(modalContent[0]);
// this.setState({ showModal : true});
this.props.onBuyItem(modalContent[0]);

}
cardDetailHandler = (char_id1) => { 
    let cardList =[];
    console.log (char_id1);

    cardList = this.props.apiData.filter((data)=> data.char_id  === char_id1 );
    this.selectedItem = cardList[0];
  
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
         <img src={this.selectedItem.img} width="120px"/><br></br>
         <strong>Name:</strong>  {this.selectedItem.name}<br></br>
         <strong>Description:</strong>      {this.selectedItem.birth} <br></br>
         <strong>ID :</strong>       {this.selectedItem.char_id} 
        </div>
}


    render () {
        return (
            <div className="container-fluid">
                {/* <img src="images/card11.png" /> */}
                {/* <h1> {this.modalContent.cardText}</h1> */}
                <DemoModal appear={this.state.showModal} closeModal={this.closeHandler}
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
                           imgSrc = {saleItem.img}
                           cardTitle = {saleItem.name}
                           nickName = {saleItem.nickname}
                           status = {saleItem.status}
                           birth = {saleItem.birthday}
                           occupation = {saleItem.occupation}
                           cardText = {saleItem.portrayed}
                           cardCost = {saleItem.cost}
                           cardLikes = {saleItem.portrayed}
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