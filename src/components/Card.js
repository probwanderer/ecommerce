import Card from 'react-bootstrap/Card';
import FunctionalityBar from './FunctionalityBar';
import  './Cardcss.css';
function TextExample() {
  return (
    <Card className="cardcss">
      <Card.Body>
      <FunctionalityBar/>
      </Card.Body>
    </Card>
  );
}

export default TextExample;