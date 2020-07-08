import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';


class DemoModal extends Component {
    render () {
        return (
            <div style={this.props.style}>
  <Modal 
  //  size="lg"
   //   show={lgShow}

  
  show={this.props.appear}  onHide={this.props.closeModal}  >
  <Modal.Header closeButton  >
    <Modal.Title>{this.props.title}</Modal.Title>
  </Modal.Header>

  <Modal.Body >
  
    {this.props.content}
  </Modal.Body>

  <Modal.Footer>
     {this.props.footer}
    
  </Modal.Footer>
</Modal>
            </div>
        )
    }
}

export default DemoModal