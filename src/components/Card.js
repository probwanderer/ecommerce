import Card from 'react-bootstrap/Card';
import FunctionalityBar from './FunctionalityBar';
import  './Cardcss.css';
import Results from './Results';
function TextExample() {
  return (
    <Card className="cardcss">
      <Card.Body>
      <FunctionalityBar/>
      <Results/>
      </Card.Body>
    </Card>
  );
}

export default TextExample;