//// Draw a single table row   ///////// Item  /////
import React, { Component } from 'react'

class TableHead extends Component {
    render () {
        return (
         
              
           

              
              
            <thead>
                 
<tr>
                    {
                        Object.keys(this.props.rowHeader).map((item)=>{
                            return   <th scope="col">
                                  {item.toLocaleUpperCase()}
                                
                                </th>
                        })
                  
                    }
                    </tr>
                  </thead>
                
        )
    }
}

export default TableHead