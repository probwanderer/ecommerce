import Table from 'react-bootstrap/Table';
import ItemRow from './ItemRow';
function ResponsiveExample(props) {
    var items=props.items;
    const selectedFilter=props.selectedFilter;
   var itemList;
   if(props.keyWord.length>0)
   {
     items = items.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.includes(props.keyWord)));
   }
   if(selectedFilter==='No Filter')
   {
    itemList= items.map(item => <ItemRow  key={item.id} item={item}/>)

   }
   else
   {
    itemList= items.filter(item => item.category===selectedFilter)
    itemList=itemList.map(item => <ItemRow  key={item.id} item={item}/>)
  }
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