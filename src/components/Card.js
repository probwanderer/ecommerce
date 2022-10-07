import Card from 'react-bootstrap/Card';
import FunctionalityBar from './FunctionalityBar';
import  './Cardcss.css';
import Results from './Results';
import { useState } from 'react';
function TextExample() {
  const [selectedFilter,setSelectedFilter]=useState('No Filter');
  return (
    <Card className="cardcss">
      <Card.Body>
      <FunctionalityBar setSelectedFilter={setSelectedFilter}/>
      <Results selectedFilter={selectedFilter}/>
      </Card.Body>
    </Card>
  );
}

export default TextExample;