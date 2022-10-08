import './App.css';
import Logo from './components/Logo';
import MainBody from './components/MainBody';
import { BrowserRouter } from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
     <Logo/>
     <MainBody />
     </BrowserRouter>
    </div>
  );
}

export default App;
