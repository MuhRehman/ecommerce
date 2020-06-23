import React, { Component } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
class DemoModal extends Component {
    render () {
        return (
            <div>
  <Modal show={this.props.appear}  onHide={this.props.closeModal}  >
  <Modal.Header closeButton  >
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  
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