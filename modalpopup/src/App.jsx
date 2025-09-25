import { useState } from 'react'
import "./index.css"

function App() {
  const [passwordLength,setpasswordLength]=useState(8);
  const [password,setPassword]=useState("abcdefgh");
  const [number,setNumber]=useState(false);
  const [char,setchars]=useState(false);
  
  return (
    <>
     <h1 className='header'>Password generator</h1>
    </>
  )
}

export default App
