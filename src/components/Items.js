import Table from 'react-bootstrap/Table';
import ItemRow from './ItemRow';
function ResponsiveExample(props) {
    const {items}=props;
    const itemList= items.map(item => <ItemRow  key={item.id} item={item}/>)
  return (
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {Array.from({ length: 7 }).map((_, index) => (
            <th key={index}>Table heading</th>
          ))}
        </tr>
      </thead>
      <tbody>
       {itemList}
      </tbody>
    </Table>
  );
}

export default ResponsiveExample;