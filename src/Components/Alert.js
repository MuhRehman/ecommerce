import React, { Component } from 'react'

export default class Alert extends Component {


    render () {
 
        if (this.props.appear ==true)
        setTimeout(()=>{
        this.props.onDisappear();
      }, this.props.seconds * 1000);


    /// if appear prop is true. component should appear
    //  but only for the given "seconds" then the component should disappear

        return (
            <div>
                  <div className= {`alert alert-${this.props.type}
                    ${this.props.appear === false ? "d-none": ""}` } style={{transitionTimingFunction:easeIn;}}
                 
                  role="alert"   >
                  <button onClick={()=>{this.props.onDisappear()}} type="button" class="close" data-dismiss="alert" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                           </button>
                          {this.props.msg}
                    </div>   
           
            </div>    
  )}}

