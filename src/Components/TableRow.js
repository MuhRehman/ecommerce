//// Draw a single table row   ///////// Item  /////
import React, { Component } from 'react'

class componentName extends Component {
    render () {
        return (
            
          
                    <tr>
                        
                       {
                           Object.keys(this.props.rowData).map((key)=>{
                           return <td >{this.props.rowData[key]}</td>
                           })
                                        
                                        
                        }
                    </tr>

                
        )
    }
}

export default componentName