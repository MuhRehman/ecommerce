//// draw a table ////    item list

import React, { Component } from 'react'
import TableRow from "../Components/TableRow"
import TableHead from "../Components/TableHead"

class componentName extends Component {


    render () {

      

        let headerContent = ["first", "second", "gender", "Age","Address","Phone Number"];


        {/* <TableHead header= {headerContent} />  */}

        return (
            <div>

                <table className="table">
                    
                
                         <TableHead rowHeader={this.props.content[0]}></TableHead>
                    
                    
                <tbody>
                   
                   {
                      this.props.content.map((rowContent)=>{
                          return <TableRow rowData={rowContent}></TableRow>
                      })          
                   
                    }
                </tbody>


                    </table>
            </div>
        )
    }
}

export default componentName