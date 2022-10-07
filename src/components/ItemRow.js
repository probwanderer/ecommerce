import React from 'react';

function ItemRow({item}) {
  return (
    <tr>
        <td>
           {item.title}
        </td>
        <td>
            {item.title}
        </td>
        <td>
            {item.id}
        </td>
        <td>
            {item.id}
        </td>
        <td>
            {item.price}
        </td>
        <td>
            {item.description}
        </td>
        <td>
            {item.title}
        </td>
        
    </tr>
  );
}

export default ItemRow;
