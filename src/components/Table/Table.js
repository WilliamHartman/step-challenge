import React, { Component } from 'react';
import './Table.css';

class Table extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        };
        this.tableJSX = this.tableJSX.bind(this);
    }

    tableJSX(){

        return (
            <div className='table-tablejsx'>
                
            </div>
        )
    }

    render(){
        return(
            <div className='Table'>
                {this.tableJSX()}
            </div>
        )
    }
}
  
export default (Table);