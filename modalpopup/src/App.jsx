import { useState, useCallback, useEffect,useRef } from 'react'
import "./index.css"

function App() {
  const [passwordLength, setpasswordLength] = useState(8);
  const [password, setPassword] = useState("abcdefgh");
  const [number, setNumber] = useState(false);
  const [char, setchars] = useState(false);

  //useRef
  const passwordRef=useRef(null);

  const cpoyPassowrd=()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }

  const passwordgenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789";
    if (char) str += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";

    for (let i = 0; i < passwordLength; i++) {
      const ch = str[Math.floor(Math.random() * str.length)]
      pass += ch;
    }
    setPassword(pass);
  }, [passwordLength, number, char,setPassword])


 useEffect(()=>{
  passwordgenerator()
 },[passwordLength,number,char,setPassword])

  return (
    <div className='w-[100vw] h-[100vh] flex flex-col items-center gap-4 justify-center-safe'>

      <div className='w-full max-w-md shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 flex flex-col items-center justify-center gap-4 py-4'>
        <h1 className='header text-2xl text-center text-white'>Password generator</h1>

        <div className='flex shadow rounded-lg overflow-hidden bg-white w-[80%] mb-4'>

          <input type="text"
            value={password}
            className='outline-none w-full py-3 px-4'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 cursor-pointer' onClick={cpoyPassowrd}>Copy</button>

        </div>

          <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input type="range"
          min={8}
          max={100}
          value={passwordLength}
          className='cursor-pointer'
          onChange={(e)=>setpasswordLength(e.target.value)}
          />
          <label htmlFor="">Length: {passwordLength}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
         defaultChecked={number}
          className='cursor-pointer'
          onChange={(e)=>setNumber((prev)=>!prev)}
          />
          <label htmlFor="">Add number</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={char}
          className='cursor-pointer'
        onChange={(e)=>setchars((prev)=>!prev)}
          />
          <label htmlFor="">Add char</label>
        </div>
      </div>

      </div>
    </div>
  )
}

export default App
