import logo from './logo.svg';
import './App.css';
import { Button } from './component/button/Button';
import { Input } from './component/input/Input';
import { AiFillBell } from "react-icons/ai";

function App() {

  const handleClick=() => {
    console.log('test')
  }

  const handleChange= (e) => {
    console.log(e.target.value)
  }
  return (
    <div className="App">
      <h1>learn react</h1>
      <Input size='medium' onChange={(e) => handleChange(e)} error={'error'} />
      <Button mode="secondary" size='large' onClick={handleClick} label='Submit' icon={<AiFillBell />} disabled />
    </div>
  );
}

export default App;
