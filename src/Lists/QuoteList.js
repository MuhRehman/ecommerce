import React, { Component } from 'react'
import QuoteItem from '../Components/QuoteItem';
import DemoModal from '../Components/DemoModal';
const axios = require('axios');
// import Item from '../Components/Item';
class Quotlist extends Component {

    state = {
        showModal : false,
        quoteApiData: [],
    };

    constructor (props){
           super([props]);
       

    }

    showInDetail=(item)=>{
        this.setState({showModal: true});
       let  selectedContent =   item.slice(0, item.indexOf(" ")) ;

    //    console.log(selectedContent);
       

        //  console.log(`https://www.breakingbadapi.com/api/characters?name=${selectedContent}`);
        
        axios.get(`https://www.breakingbadapi.com/api/characters?name=${selectedContent}`)

        .then((response)=> {
      
        //    let apiData = response.data;
          
              
           
                    //  this.name = item.name;
                    //  this.Uid = item.char_id;
                    //  this.Dob = item.birthday;
                    //  this.img = item.img;
                    //  this.status = item.status;
                    //  this.nickname = item.nickname;
                    //  this.portrayed = item.portrayed;
                    //  this.category = item.category;
 

          console.log(response.data);
              

                // return console.log();
                
                
                  this.setState({quoteApiData: response.data});
                   
                  
        })
        .catch((error)=>{
          console.log(error);
        })
        ;
       
            
     }
    closeHandler =()=>{
        
         this.setState({showModal: false});
     }


    printDetail = () => {
       
 return this.state.quoteApiData.map((item) => {
     console.log(item);
     
    return   <div className="ml-4 mt-2 mb-2">  
    <img src={item.img} width="120px"/><br></br>
    <strong>Author Name : </strong>{item.name}<br></br>
    <strong>ID : </strong>{item.Uid}<br></br>
    <strong>Date Of Birth : </strong>{item.Dob}<br></br>
    <strong>Status : </strong>{item.status}<br></br>
    <strong>Nick Name : </strong>{item.nickname}<br></br>
    <strong>Portrayed : </strong>{item.portrayed}<br></br>
    <strong>Category : </strong>{item.category}<br></br>
    <strong>Qoute : </strong>{item.category}<br></br>
   
   </div>
    })
  
   }

    render () {


        
        return (
<div>
            <DemoModal  appear={this.state.showModal} closeModal={this.closeHandler}
                        content={this.printDetail()}
            ></DemoModal>


            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-6 mt-4">
        
                {
                    // console.log(this.props.apiData)
                    this.props.apiData.map((item)=> {
                      
                      return  <QuoteItem 
                           char_id = {item.quote_id}
                           title =  {item.author}
                           quote =  {item.quote}
                           cardDetail = {this.showInDetail}
                        ></QuoteItem>
                        
                    })
                }
            </div>
            </div>
        )
    }
}

export default Quotlist