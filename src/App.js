import logo from './logo.svg';
import './App.css';
import { Button } from './component/button/Button';

function App() {

  const handleClick=() => {
    console.log('test')
  }
  return (
    <div className="App">
    
      <Button size='small' onClick={handleClick} label='jancook' />
    </div>
  );
}

export default App;
