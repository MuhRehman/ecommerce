import React, { Component } from 'react'
import QuoteItem from '../Components/QuoteItem';
// import Item from '../Components/Item';
class Quotlist extends Component {
    render () {
        return (
            <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-6 mt-4">
        
                {
                    // console.log(this.props.apiData)
                    this.props.apiData.map((item)=> {
                      
                      return  <QuoteItem 
                           char_id = {item.quote_id}
                           title =  {item.author}
                           quote =  {item.quote}
                        ></QuoteItem>
                        
                    })
                }
            </div>
        )
    }
}

export default Quotlist