import React, { Component } from 'react'
import Item from './Item'   
import DemoModal from './DemoModal';


class ItemList extends Component {
   state = {
       showModal : false,
   };

constructor(props){
super(props);
    this.cardContent = [];
      
    // this.cardContent.push({
    //     cardId:,
    //     imgSrc:"images/arrowroot1.jpg",
    //     cardTitle:"Asparagus",
    //     cardText:"It is a nutrient-dense vegetable which is high in folic acid. It is an excellent source of potassium, fiber, vitamin",
    // });
    // this.cardContent.push({
    //     cardId:2,
    //     imgSrc:"images/arrowroot.jpg",
    //     cardTitle:"Arrowroot:",
    //     cardText:" This vegetable contains remarkable levels of copper and iron. Both these minerals are an essential .",
    // });
    // this.cardContent.push({
    //     cardId:3,
    //     imgSrc:"images/cabbage.jpg",
    //     cardTitle:"Cabbage",
    //     cardText:"Cabbage has vitamin C in abundance. Its rich fiber content could possibly provide relief in constipation.",
    // });
    // this.cardContent.push({
    //     cardId:4,
    //     imgSrc:"images/Potato.jpg",
    //     cardTitle:"Potato",
    //     cardText:"Potato is one of the most commonly used ingredients in Indian households. It helps protect the skin",
    // });
    // this.cardContent.push({
    //     cardId:5,
    //     imgSrc:"images/room.jpg",
    //     cardTitle:"Mashroom",
    //     cardText:"They are packed with proteins, minerals, vitamins, antioxidants. A mushroom rich diet cant",
    // });
    // this.cardContent.push({
    //     cardId:6,
    //     imgSrc:"images/oil.jpg",
    //     cardTitle:"Olives",
    //     cardText:" From reducing inflammation to improved digestion, olives can provide a lot of health benefits",
    // });



    this.selectedItem = {};
};
cardBuyHandler = (cardId)=> {

   let modalContent = [];

   modalContent = this.props.apiData.filter((product)=> product.uId === cardId  );


   
   
// console.log(modalContent[0]);
// this.setState({ showModal : true});
this.props.onMeraJahezWalaFunction(modalContent[0]);

}
cardDetailHandler = (cardId) => { 
    let cardList =[];


    cardList = this.props.apiData.filter((data)=> data.uId  === cardId );
    this.selectedItem = cardList[0];
    //  console.log(this.selectedItem.title);
     this.setState({ showModal : true });
     
}
modalHandler = () => {
   
     this.setState({ showModal : false });
     
}
modalHandler1 = () => {
   console.log("Rehman");
   
     
}
// cartModalHandler = () => {
//        alert("YEs");
//      this.setState({ showModal : true });
     
// }
    
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
            <div className="container">
                {/* <img src="images/card11.png" /> */}
                {/* <h1> {this.modalContent.cardText}</h1> */}
                <DemoModal appear={this.state.showModal} closeModal={this.state.showModal} content={this.cardDetailPrinter()}
                header1={"Rehman"}
                footer={<div>
                <button onClick={()=>{this.modalHandler()}} className="btn btn-primary"> Close</button>
                <button onClick={()=>{this.cartModalHandler1()}} className="btn btn-primary ml-1"> Buy Now</button>
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
                           cardText = {saleItem.status}
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