import React, { Component } from "react";
import { Button, Form, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import Alert from "../Components/Alert";
import SmartTable from "../Lists/SmartTable";


export default class ModifyItem extends Component {
  state={};
  constructor(props) {
    super(props);

    this.state= this.stateReset();
    this.state.apiData=[];
   
  }


  stateReset = () => {
    return {
      id:"",
      title: "",
      price: "150",
      currency: "Rs",
      unit: "Kg",
      category: "Fruits",
      description: "",
      image: {},
      ready: false,
      isLoading: false,
      alertAppear:false,
      alertType:"",
      alertMsg:"",
      imageUrl:""


         } 
  } 

     componentDidMount () {
 // Make a request for a user with a given ID
  axios.get('https://mangakure.com/dummies')
  .then((response)=>{
    // handle success
    // console.log(response.data);
      this.setState({apiData :response.data});
  })
  .catch((error)=>{
    // handle error
    console.log(error);
  })
     }
  
  postDataForUpdate = () => {
    //// post the data to the Api

    let fields = {};

    /////////// What are the Data fields
  // 
    fields["title"] = this.state.title;
    fields["description"] = this.state.description;
    fields["price"] = this.state.price;
    fields["unit"] = this.state.unit;
    fields["currency"] = this.state.currency;
    fields["category"] = this.state.category;

    ///////////////////////

    const formData = new FormData(); /// create a new form Data

    //////////// Append the file or files.
    
    ////// aik tareeqa  ////  to skip the following statement if user input is empty.

    if (this.state.image.url)
    {
      formData.append("data", JSON.stringify(fields)); /// the second attribute strapi requires is "data" where we have all the dataFields
      
    }
  
   else  

   {
    formData.append("files.image", this.state.image, this.state.image.fileName); /// Strapi accepts files on "files.AttributeName"
    ////// Append the Data fields..
    formData.append("data", JSON.stringify(fields)); /// the second attribute strapi requires is "data" where we have all the dataFields
    

   }
  
    
    ////// second method   //// to convert this.state.image into a blob ////



    // const blob = new Blob(this.state.image);


    // formData.append("files.image", blob, this.state.image.name); /// Strapi accepts files on "files.AttributeName"
    // ////// Append the Data fields..
    // formData.append("data", JSON.stringify(fields)); /// the second attribute strapi requires is "data" where we have all the dataFields

    //files.image = {Blob}
    //data={data that we have collected}

    axios({
      method: "put",
      url: `https://mangakure.com/dummies/${this.state.id}`,
      data: formData, ////// data is the attribute for Axios for whatever object to be posted.
    })
      .then((success) => {
        
        let newObj =this.stateReset();
        
        newObj.alertMsg ="Record has been successfully Updated";
        newObj.alertType= "success";
        newObj.alertAppear= true;

        ////// kuw na... apiData  .... sirf us record ko update kar den..

        ////success.data //// updated object
        
        

        newObj.apiData =this.state.apiData.map((item)=>{ 

          if (item.id ===success.data.id)
          return success.data;
          else
          return item;
           });

                
        //// table ka data /// apiData


        ///////////


        console.log(success);    /////// update the table content ///
        
        this.setState(newObj);
          
        })
        /// display that record has been uploaded.
      
      .catch((err) => {
        this.setState({
          isLoading: false,
          alertMsg: err.message,
          alertType: "danger",
          alertAppear: true,
        });

        ////  display the error msg
      });
  };


  onSubmit = (e) => {
    e.preventDefault();
    ///// verify that all the inputs are valid  .... VALIDATION ...
    this.setState({ ready: true });

  

    let form = e.currentTarget;
       
    if (form.checkValidity()) {
      this.setState({ isLoading: true }); /// display a spinner while data is uploading.   //// Once uploaded.. reset the form
      this.postDataForUpdate(); //// if all goood .... /// update the data to the Api
    }
  };


loadRecord = (id)=>{
  
   let  selectedRecord = this.state.apiData.filter((item)=> item.id === id );
      
      

  this.setState ({
    id,
    title: selectedRecord[0].title,
      price: selectedRecord[0].price,
      currency:selectedRecord[0].currency,
      unit: selectedRecord[0].unit,
      category: selectedRecord[0].category,
      description: selectedRecord[0].description,
      image: selectedRecord[0].image,
      imageUrl: `https://mangakure.com/${selectedRecord[0].image.url}`
     
  });


  console.log(selectedRecord[0].image.name)


}




  render() {
    if (this.state.isLoading == true)
      return (
        <center className="mt-4">
          {" "}
          <Spinner animation="grow" size={"lg"} variant="primary"></Spinner>
        </center>
      );




    return (
      <div>
        <Form
          noValidate
          validated={this.state.ready}
          onSubmit={this.onSubmit}
          style={{
            width: "450px",
            margin: "auto",

            background: "#ffffff",
            boxShadow: "0px 1px 5px rgba(34, 35, 58, 0.2)",
            marginTop: "30px",
            padding: "20px 55px 45px 55px",
            borderRadius: "15px",
          }}
        >
         

          {/* ///// whenever we call this component. it will display a message  


          props 
          msg="Hello"
          seconds= {5}  /// if someone press X during the 5 seconds. it will close even before 5 seconds
           type= "success", */}

          <Form.Group controlId="formGridEmail">
          <Form.Group  controlId="formGridPassword">
              <Form.Label>
                Category <span style={{ color: "red" }}>*</span>
              </Form.Label>

              <Form.Control
                required
                as="select"
                name="category"
                value={this.state.category}
                onChange={(e) => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
                type="text"
                placeholder=""
              >
                <option  >Vegetable</option>
                <option  >Fruits</option>
                
              </Form.Control>
            </Form.Group>
            <Form.Label>
              Title <span style={{ color: "red" }}>*</span>
            </Form.Label>
            <Form.Control
              required
              minLength={3}
              maxLength={50}
              name="title"
              value={this.state.title}
              onChange={(e) => {
                this.setState({ [e.target.name]: e.target.value });
              }}
              type="text"
              placeholder="Title"
            />
            <Form.Control.Feedback type="valid">
              {" "}
              Very Good{" "}
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              {" "}
              Value is required. Please input a Valid Title{" "}
            </Form.Control.Feedback>
          </Form.Group>
     
          <Form.Row>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>
                Price <span style={{ color: "red" }}>*</span>{" "}
              </Form.Label>
              <Form.Control
                required
                min={0}
                max={1000}
                name="price"
                value={this.state.price}
                onChange={(e) => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
                type="number"
                placeholder="Price"
              />
              <Form.Control.Feedback type="valid">
                {" "}
                Very Good{" "}
              </Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                {" "}
                Value is required. (between 0 to 1000) Please input a numeric
                value{" "}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>
                Currency<span style={{ color: "red" }}>*</span>{" "}
              </Form.Label>
              <Form.Control
                as="select"
                name="currency"
                value={this.state.currency}
                onChange={(e) => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
                type="text"
                placeholder="Currency"
              >
                <option>Rs</option>
                <option>$</option>
                <option>‎€</option>
                <option>AED</option>
                <option>AUD</option>
                <option>CAD</option>
              </Form.Control>
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>
                Unit <span style={{ color: "red" }}>*</span>
              </Form.Label>

              <Form.Control
                required
                as="select"
                name="unit"
                value={this.state.unit}
                onChange={(e) => {
                  this.setState({ [e.target.name]: e.target.value });
                }}
                type="text"
                placeholder="Unit"
              >
                <option>KG</option>
                <option>Unit</option>
                <option>Litter</option>
                <option>Dozen</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Description</Form.Label>
            <Form.Control
              name="description"
              value={this.state.description}
              onChange={(e) => {
                this.setState({ [e.target.name]: e.target.value });
              }}
              as="textarea"
              rows="3"
              placeholder="Description"
            />
          </Form.Group>

          <Form.Group>
            <Form.Label className={"form-label col-form-label"}>
              {" "}
              Item Picture{" "}
            </Form.Label >
                 {this.state.imageUrl !== "" ?
                 <img  className="form-control mb-2"  style={{height:"120px",margin:"auto",objectFit:"contain"}} 
                 src={this.state.imageUrl}></img>
                 :"" 
                 }
            
            <Form.Control 
              
              name="image"
              //value={this.state.image.name}
              onChange={(e) => {

                this.setState({ [e.target.name]: e.target.files[0], imageUrl: URL.createObjectURL(e.target.files[0]) });
              }}  
              type="file"
            />
            {/* <Form.Control required name="file" type="text" value={this.state.img} onChange={(e) => {this.setState({[e.target.name] : e.target.value})}} as="text" style={{display:"none"}} /> */}
            <Form.Control.Feedback type="valid">
              {" "}
              Very Good{" "}
            </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please Upload a Picture of the Product{" "}
            </Form.Control.Feedback>
          </Form.Group>
          <Alert
            msg={this.state.alertMsg}
            seconds={5}
            type={this.state.alertType}
            appear={this.state.alertAppear}
            onDisappear={() => {
              this.setState({
                alertAppear: false,
                alertMsg: "",
                alertType: "",
              });
            }}
          ></Alert>
          <Button className="mt-4" variant="primary" type="submit" >
            Save
          </Button>
        </Form>

        <SmartTable onModify ={this.loadRecord}  content={this.state.apiData}></SmartTable>

      </div>
    );
  }
}
