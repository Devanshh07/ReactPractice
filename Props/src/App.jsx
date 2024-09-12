import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './Card'

function App() {
  const [count, setCount] = useState(0)
   const data ={
           age:22,
           username : "Devansh",
           country: "india",
           objective: "From NIT Bhopal",
           url : "https://www.photopea.com/img/table.webp"
   }
  return (
   
    <>
      <h2 className='bg-blue-600 text-2xl font-sans text-black mb-4'>Tailwind Test</h2>
      <Card newdata = {data}/>
    </>
  )
}

export default App
