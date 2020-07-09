//// Draw a single table row   ///////// Item  /////
import React, { Component } from 'react'

class TableHead extends Component {
    render () {
        return (   
            <thead>
                 
                    <tr>
                    <th scope="col"> Update </th>
                    {   
                        Object.keys(this.props.rowHeader).map((item)=>{
                            if (typeof this.props.rowHeader[item] =="object");
                            else
                            return   <th scope="col">
                                  {item.toLocaleUpperCase()}
                                
                                </th>
                        })
                  
                    }
                  
                     </tr>
                  </thead>
                
        )
    }   ////// this.props.rowHeader.age   /// 37
            //// this.props.rowHeader["age"] //////   37
}

export default TableHead