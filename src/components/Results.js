import React, { Component } from 'react';
import Items from './Items'
class Results extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         items:[],
         DataisLoaded:false
      };
    }
    componentDidMount(){
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then((json)=>{
           
            this.setState({
            items:json,
            DataisLoaded:true
        }
        );
    })
    }
    
    render() {
        
        const { DataisLoaded, items } = this.state;
        if (!DataisLoaded) return <div>
            <h1> Please wait some time.... </h1> </div> ;
   
        return (
        <div >
           <Items items={items} selectedFilter={this.props.selectedFilter} keyWord={this.props.keyWord}/>
        </div>
    );
    
}
}

export default Results;
