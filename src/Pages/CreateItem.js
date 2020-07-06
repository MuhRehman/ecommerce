import React, { Component } from 'react'
import { Button,Form,Col } from 'react-bootstrap';

class componentName extends Component {

    state = {
        title : "",
        price : "",
        currency : "",
        description : "",
        img : "",
        ready:false
    }
     
  
    render () {
        
        
        return (
   <div>
<Form
 noValidate
 validated ={this.state.ready} 
 onSubmit={
    (e)=>{
        e.preventDefault();
        ///// verify that all the inputs are valid  .... VALIDATION ... 
        this.setState({ready:true});

        let form = e.currentTarget; 

      console.log(form.checkValidity());


        //// if all goood .... /// post the data to the Api
        
        /// display a spinner while data is uploading.   //// Once uploaded.. reset the form
 
        //console.log(this.state);
        

    }
} 

style={{      
               width: "450px",
               margin: "auto",
              
               background: "#ffffff",
               boxShadow: "0px 1px 5px rgba(34, 35, 58, 0.2)",
               marginTop: "30px",
               padding: "20px 55px 45px 55px",
               borderRadius: "15px",
                          
             }}>
  
    <Form.Group  controlId="formGridEmail">
      <Form.Label>Title <span style={{color:"red"}}>*</span></Form.Label>
      <Form.Control minLength={3} maxLength={50} name="title" value={this.state.title} onChange={(e) => {this.setState({[e.target.name] : e.target.value})}} type="text" placeholder="Title" />
        <Form.Control.Feedback type="valid" > Very Good </Form.Control.Feedback>
        <Form.Control.Feedback type="invalid" > Value is required. Please input a Valid Title </Form.Control.Feedback>
            
    </Form.Group>

    <Form.Row>

    <Form.Group as={Col}  controlId="formGridPassword">
      <Form.Label>Price <span style={{color:"red"}}>*</span> </Form.Label>
      <Form.Control required min={0} max={1000} name="price" value={this.state.price} onChange={(e) => {this.setState({[e.target.name] : e.target.value})}}type="number" placeholder="Price" />
      <Form.Control.Feedback type="valid" > Very Good </Form.Control.Feedback>
      <Form.Control.Feedback type="invalid" > Value is required. (between 0 to 1000) Please input a numeric value </Form.Control.Feedback>
    </Form.Group>

    <Form.Group as={Col}   controlId="formGridPassword">
      <Form.Label>Currency<span style={{color:"red"}}>*</span>  </Form.Label>
      <Form.Control as="select" name="currency"  value={this.state.currency} onChange={(e) => {this.setState({[e.target.name] : e.target.value})}} type="text" placeholder="Currency">
      <option>Rs</option>
      <option>$</option>
      <option>‎€</option>
      <option>AED</option>
      <option>AUD</option>
      <option>CAD</option>
    </Form.Control>
    
    </Form.Group>

    <Form.Group  as={Col}  controlId="formGridPassword">
      <Form.Label>Unit <span style={{color:"red"}}>*</span></Form.Label>

      <Form.Control required as="select" name="unit"  value={this.state.unit} onChange={(e) => {this.setState({[e.target.name] : e.target.value})}} type="text" placeholder="Unit" >
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
    <Form.Control name="description" value={this.state.description} onChange={(e) => {this.setState({[e.target.name] : e.target.value})}} as="textarea" rows="3" placeholder="Description" />
  </Form.Group>


  <Form.Group  > 
    <Form.Control required  name="img"  value={this.state.img} onChange={(e) => {this.setState({[e.target.name] : e.target.value})}} type="file" label="" />
    <Form.Control required name="file" type="text" value={this.state.img} onChange={(e) => {this.setState({[e.target.name] : e.target.value})}} as="text" style={{display:"none"}} />
    <Form.Control.Feedback type="valid" > Very Good </Form.Control.Feedback>
    <Form.Control.Feedback type="invalid" >Please Upload a Picture of the Product </Form.Control.Feedback>
    
  </Form.Group>

  <Button className="mt-4" variant="primary" type="submit">
    Submit
  </Button>
  
  </Form>

  
  
            </div>
        )
    }
}

export default componentName