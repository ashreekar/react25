import { useEffect, useState } from "react"

export default function RandomColor() {
    const [typeOf, setTypeof] = useState('hex')
    const [color, setColor] = useState('#000000')


    useEffect(()=>{
        handleGenerate()
    },[typeOf])

    function randomColor(length){
        return Math.floor(Math.random()*length)
    }

    function handleGenerate() {
        if (typeOf === 'hex') {
            const heax = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A', 'B', 'C', 'D', 'E', 'F'];
            let hexColor='#'
            for(let i=0;i<6;i++){
                hexColor += heax[randomColor(heax.length)];
            }

            setColor(hexColor)
        } else {
            const r=randomColor(256)
            const g=randomColor(256)
            const b=randomColor(256)

            setColor(`rgb(${r},${g},${b})`)
        }
    }

    return (
        <div className="container" style={{
            width: '100%',
            height: '100vh',
            background: color,
            
        }}>
            <button onClick={() => { setTypeof('hex') }} >
            Create hex color
            </button>
            <button onClick={() => { setTypeof('rgb') }} >Create rgb color</button>
            <button onClick={handleGenerate}>Generate random color</button>

            <div style={
               color !== '#ffffff'? {
                    color:"white",
                    display:"flex",
                    justifyContent:"center",
                    alignItems:"center",
                    height:"100%",
                    width:"100%"
                }:{
                    color:"black"
                }
            }>
                {color}
            </div>
        </div>
    )
}