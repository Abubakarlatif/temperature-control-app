import { useState } from "react";
import './App.css';
function App() {
  const [counter, setcounter]= useState(0);
  const [temp ,settemp] = useState("neutral");
  
  const increasetempaertaure = () =>{
    const newtemp= counter+1
    if (newtemp >= 15){
      settemp('hot');
    }
    setcounter(newtemp);
    
  }
  const decreasetemperature =() =>{
    const newtemp = counter - 1
    if (newtemp < 15 ){ 
      settemp('cold');
    }
    setcounter(newtemp)
  }
  return (
    <div className='app-container'>
      <div className="temperature-display-container">
        <div className={`temperature-display ${temp}`}>
         {counter} C
        </div>
      </div>
        <div className='button-container'>
            <button onClick={increasetempaertaure} >+</button>
            <button onClick={decreasetemperature}>-</button>
        </div>
    </div>
  );
}

export default App;
