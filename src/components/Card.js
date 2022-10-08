import Card from 'react-bootstrap/Card';
import FunctionalityBar from './FunctionalityBar';
import  './Cardcss.css';
import Results from './Results';
import { useState } from 'react';
function TextExample() {
  const [selectedFilter,setSelectedFilter]=useState('No Filter');
  const [keyWord, setSearchKeyword] = useState('');
  
  return (
    <Card className="cardcss">
      <Card.Body>
      <FunctionalityBar setSelectedFilter={setSelectedFilter} setSearchKeyword={setSearchKeyword}/>
      <Results selectedFilter={selectedFilter} keyWord={keyWord}/>
      </Card.Body>
    </Card>
  );
}

export default TextExample;