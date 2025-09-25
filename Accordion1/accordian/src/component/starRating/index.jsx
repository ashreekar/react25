import { useEffect, useState } from "react";
import "./styles.css"

export default function StarRating({ numberOfStars = 5 }) {
    const [rating, setRating] = useState(0)
    const [hover,sethover]=useState(0)

    function handleClick(idx) {
        // console.log(idx+1)
        setRating(idx+1)
    }

    function handleMouseEnter(idx){
        // console.log(idx+1)
        sethover(idx+1)
    }

    function handlemouseleave(){
        
        sethover(rating)
    }

    return (
        <div className="star-rating">
            {
                [...Array(numberOfStars)].map((_, index) => {
                    return <span 
                    className={(index <(rating || hover)) ?"star":"nostar"}
                    key={index} 
                    // id={index} 
                    onClick={() => handleClick(index)} 
                    onMouseMove={()=>handleMouseEnter(index)}
                    onMouseLeave={()=>handlemouseleave()}
                    >

                    </span>
                })
        }
        </div >
    )
}