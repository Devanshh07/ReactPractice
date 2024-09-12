import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


  
function App() {
  
  var[count,setCount] = useState(0);
  const addValue = () =>{
     if(count<20){
      setCount(count+1);
     }
      return;
  }
  const minValue = ()=>{
    if(count>0)setCount(count-1);
    return
  }
  return (
    
    <>

     <h2>React with Vite : {count} </h2>
     <h3>Counter : {count}</h3>
      <button onClick={addValue}>Add Value {count}</button>
      <button onClick={minValue}>Remove Value : {count}</button>
    </>
  )
}

export default App
