import React from 'react';

function CartItemRow({item,quantity}) {
    const capitalizeFirst = str => {
        return str.charAt(0).toUpperCase() + str.slice(1);
       };
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
            ${item.price}
        </td>
        <td >
          {/* <div className="d-flex align-items-end align-items-center" style={{height:"50px"}}>
           <input type="Number" className = "Quantity" onChange={handleChange}
        value={message}/>
            <Button className="add-to-cart" onClick={handleClick}><i className="fa fa-shopping-cart" style={{fontSize:"10px"}}></i></Button>
           </div> */}
           {
            quantity
           }
        </td>
        <td>
           ${item.price*quantity}
        </td>
        
    </tr>
  );
}

export default CartItemRow;
