import React,{useEffect, useState} from 'react'
import axios from 'axios';
function Cart() {
  const [items,setitems]=useState([]);
  const [isLoaded,setisLoaded]=useState(false);
  const fetchdata=async ()=>{
    const response=await axios.get('https://fakestoreapi.com/products');
    setitems(response.data);
    setisLoaded(true);
  }

  let cartItems=JSON.parse(sessionStorage.getItem("cart"));

  useEffect(()=>{
    fetchdata();
  },[])
  if(!isLoaded)
    return <div> <h1> Please wait some time.... </h1> </div> ;
  return (
    <div>{
      cartItems.map((x)=>{
          return (<div key={`${x}`}>{`${x}`}</div>);
      })
    }</div>
  )
}

export default Cart