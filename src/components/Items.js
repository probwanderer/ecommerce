import Table from 'react-bootstrap/Table';
import ItemRow from './ItemRow';
function ResponsiveExample(props) {
    const {items}=props;
    const itemList= items.map(item => <ItemRow  key={item.id} item={item}/>)
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>Image</th>
          <th>Name</th>
          <th>Category</th>
          <th>Stock</th>
          <th>Price</th>
          <th></th>
          <th>Buy</th>
        </tr>
      </thead>
      <tbody>
       {itemList}
      </tbody>
    </Table>
  );
}

export default ResponsiveExample;