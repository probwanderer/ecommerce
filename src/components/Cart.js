import React,{useEffect, useState} from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import CartItemRow from './CartItemRow';
import './cartcss.css'
import { Button } from 'react-bootstrap';
function Cart() {
  const [items,setitems]=useState([]);
  const [isLoaded,setisLoaded]=useState(false);
  const fetchdata=async ()=>{
    const response=await axios.get('https://fakestoreapi.com/products');
    setitems(response.data);
    setisLoaded(true);
  }
  let newCartItems=[];
let total=0;
  let cartItems=JSON.parse(localStorage.getItem("cart"));
  for(let i = 0; i < cartItems.length; i++) {
    for(let j = 0; j < items.length; j++) {
        if(cartItems[i].id === items[j].id) {
          total+=cartItems[i].quantity*items[j].price;
            newCartItems.push({item:items[j],quantity:cartItems[i].quantity});
        }
    }
}

let newCartList= newCartItems.map(item => <CartItemRow  key={item.item.id} item={item.item} quantity={item.quantity}/>)

 total=total.toFixed(2);

  useEffect(()=>{
    fetchdata();
  },[])
  if(!isLoaded)
    return <div> <h1> Please wait some time.... </h1> </div> ;
  return (
    <div style={{display:"flex"}}>
      <Card className="cartcard">
      <Card.Body>
      <Table responsive>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Category</th>
          <th>Unit Price</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {newCartList}
        <tr>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>Total</td>
          <td>{total}</td>
        </tr>
       
      </tbody>
      </Table>
      </Card.Body>
      </Card>
      <Card style={{width:"30%"}}>
      <Card.Body>
    <h4>Subtotal <span style={{display:"inline-block" , width: "40%"}}></span> {total}</h4>
    <hr />
    <h3>Total: <span style={{display:"inline-block" , width: "45%"}}></span> {total}</h3>
    <hr />
    <Button className="btn btn-primary">Proceeed to Checkout</Button>

      </Card.Body>
      </Card>
 </div>
  )
}

export default Cart