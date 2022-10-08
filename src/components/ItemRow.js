import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import './ItemRow.css';
import Form from 'react-bootstrap/Form';
import { Link,useNavigate } from 'react-router-dom';
import { useState } from 'react';

function ItemRow(props){
    const [message, setMessage] = useState('');
   const item=props.item;
   const capitalizeFirst = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
   };
   const handleChange = (event) => {
    setMessage(event.target.value);
  };

   let navigate=useNavigate();
   const handleClick=(e)=>{
        e.preventDefault();
        let cartItems=JSON.parse(sessionStorage.getItem("cart"));
    cartItems.push({id:item.id,quantity:parseInt(message)});
    sessionStorage.setItem("cart",JSON.stringify(cartItems));
    
   }


    return (
        <tr>
        <td>
          <img src={item.image} alt={item.title} className="item-image"/>
        </td>
        <td>
            {item.title}
        </td>
        <td>
            {capitalizeFirst(item.category)}
        </td>
        <td>
        <i className="fa fa-check" aria-hidden="true" style={{color:"green"}}></i>
        </td>
        <td>
            ${item.price}
        </td>
        <td >
          <div className="d-flex align-items-end align-items-center" style={{height:"50px"}}>
           <input type="Number" className = "Quantity" onChange={handleChange}
        value={message}/>
            <Button className="add-to-cart" onClick={handleClick}><i className="fa fa-shopping-cart" style={{fontSize:"10px"}}></i></Button>
           </div>
        </td>
        <td className="align-items-center">
        <Form.Check 
            type='checkbox'
            style={{marginLeft:"20px",marginRight:"20px", marginTop:"15px"}}/>
        </td>
        
    </tr>
    )
}

export default ItemRow;



