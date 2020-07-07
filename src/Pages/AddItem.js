import React, { Component } from "react";
import { Button, Form, Col, Spinner } from "react-bootstrap";
import axios from "axios";
import Alert from "../Components/Alert";

export default class AddItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      price: "150",
      currency: "Rs",
      unit: "Kg",
      description: "",
      image: "",
      ready: false,
      isLoading: false,
      alertAppear: false,
    };
  }

  postData = () => {
    //// post the data to the Api

    let fields = {};

    /////////// What are the Data fields
    fields["title"] = this.state.title;
    fields["description"] = this.state.description;
    fields["price"] = this.state.price;
    fields["unit"] = this.state.unit;
    fields["currency"] = this.state.currency;

    ///////////////////////

    const formData = new FormData(); /// create a new form Data

    //////////// Append the file or files.
    formData.append("files.image", this.state.image, this.state.image.fileName); /// Strapi accepts files on "files.AttributeName"
    ////// Append the Data fields..
    formData.append("data", JSON.stringify(fields)); /// the second attribute strapi requires is "data" where we have all the dataFields

    //files.image = {Blob}
    //data={data that we have collected}

    axios({
      method: "post",
      url: "https://mangakure.com/dummies",
      data: formData, ////// data is the attribute for Axios for whatever object to be posted.
    })
      .then((success) => {
        console.log(success);
        this.setState({
          title: "",
          price: "150",
          currency: "Rs",
          unit: "Kg",
          description: "",
          image: "",
          ready: false,
          isLoading: false,
          alertMsg: "Record has been successfully created",
          alertType: "success",
          alertAppear: true,
        });
        /// display that record has been uploaded.
      })
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

    console.log(this.state.image);

    let form = e.currentTarget;

    if (form.checkValidity()) {
      this.setState({ isLoading: true }); /// display a spinner while data is uploading.   //// Once uploaded.. reset the form
      this.postData(); //// if all goood .... /// post the data to the Api
    }
  };

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

          {/* ///// whenever we call this component. it will display a message  


          props 
          msg="Hello"
          seconds= {5}  /// if someone press X during the 5 seconds. it will close even before 5 seconds
           type= "success", */}

          <Form.Group controlId="formGridEmail">
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
            </Form.Label>
            <Form.Control
              required
              name="image"
              //value={this.state.image.fileName}
              onChange={(e) => {
                this.setState({ [e.target.name]: e.target.files[0] });
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

          <Button className="mt-4" variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
