import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Foot from './Footer'

function App() {
  const[color,setColor] = useState("green")

  return (
    <>
    <h3 className=" font-bold  text-2xl m-2">Color Changer in React using Hooks!</h3>
    <div id="container" className=" bg-zinc-700 rounded-md ">
            <button onClick = {()=>setColor("red")} className= "bg-red-600 m-3">Red</button>
            <button onClick = {()=>setColor("green")} className=" bg-green-600 m-3">Green</button>
            <button onClick = {()=>setColor("blue")} className=" bg-blue-500 m-3">Blue</button>
            <button onClick = {()=>setColor("yellow")} className=" bg-yellow-300 m-3">yellow</button>
            <button onClick = {()=>setColor("violet")} className=" bg-violet-200 m-3">Olive</button>
            <button onClick = {()=>setColor("gray")} className=" bg-gray-500 m-3">Gray</button>
            <button onClick = {()=>setColor("black")} className=" bg-black m-3">Black</button>
            <button onClick = {()=>setColor("white")}  className=" bg-slate-100 m-3 font-black ">White</button>
            <button onClick = {()=>setColor("purple")} className=" bg-purple-400 m-3">Purple</button>
            <button onClick = {()=>setColor("pink")} className=" bg-slate-700 m-3">levender</button>
        </div>
     <div id="mainDiv"style={{backgroundColor:color}}></div>
    <Foot/>
    </>
  )
}

export default App
