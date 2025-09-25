import { useState } from "react"

function App() {

  const [color, setColor] = useState("wheat");

  return (
    <div className="mainCont" style={
      {
        backgroundColor: color
      }
    }>

      <div className="buttonParent">
        <button className="button" onClick={()=>setColor("violet")} style={{backgroundColor:"violet"}}>Violet</button>
        <button className="button" onClick={()=>setColor("indigo")} style={{backgroundColor:"indigo"}}>Indigo</button>
        <button className="button" onClick={()=>setColor("blue")} style={{backgroundColor:"blue"}}>Blue</button>
        <button className="button" onClick={()=>setColor("green")} style={{backgroundColor:"green"}}>Green</button>
        <button className="button" onClick={()=>setColor("yellow")} style={{backgroundColor:"yellow"}}>Yellow</button>
        <button className="button" onClick={()=>setColor("orange")} style={{backgroundColor:"orange"}}>Orange</button>
        <button className="button" onClick={()=>setColor("red")} style={{backgroundColor:"red"}}>Red</button>
      </div>
    </div>
  )
}

export default App
