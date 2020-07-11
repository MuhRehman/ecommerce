//// draw a table ////    item list

import React, { Component } from 'react'
import TableRow from "./TableRow"
import TableHead from "./TableHead"

export default class SmartTable extends Component {


    render () {

      

        let headerContent = ["first", "second", "gender", "Age","Address","Phone Number"];


        {/* <TableHead header= {headerContent} />  */}

        return (
            <div>

                <table className="table">
                    
                          { this.props.content.length != 0 ?     
                         <TableHead rowHeader={this.props.content[0]}></TableHead>
                          :  ""
                          
                          
                        }
                    
                <tbody>
                   
                   {
                      this.props.content.map((rowContent)=>{
                          return <TableRow onModify={(id)=>{this.props.onModify(id)}} rowData={rowContent}></TableRow>
                      })          
                   
                    }
                </tbody>


                    </table>
            </div>
        )
    }
}

