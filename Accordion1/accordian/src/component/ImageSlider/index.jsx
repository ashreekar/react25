import { useEffect, useState } from "react"
import {BsArrowLeftCircleFill,BsArrowRightCircleFill} from "react-icons/bs"

import "./styles.css"


export default function ImageSlider({url,limit,page}){
    const [images,setimages]=useState([])
    const [currentSlide,setCurrentSlide]=useState(0)
    const [err,setErr]=useState(null)
    const [loading,setLoading]=useState(false)

    async function fetchImages(url) {
        try{
            setLoading(true)
            const res=await fetch(`${url}?page=1&limit=${limit}`);
            const data=await res.json();

            if(data){
                setimages(data)
            }
        }catch(err){
            setLoading(false)
            setErr(err)
        }finally{
            setLoading(false)
        }
    }

    useEffect(()=>{
        if(url !==""){
            fetchImages(url);
        }
    },[url])

    if(loading){
        return (
            <div>Loading....</div>
        )
    }

    if(err){
       return (
            <div>Error occured....</div>
        ) 
    }

    function handlePrev(){
        setCurrentSlide(currentSlide==0?images.length-1:currentSlide-1)
    }

    function handlenext(){
        setCurrentSlide(currentSlide==images.length-1?0:currentSlide+1)
    }

    return (
        <div className="container">
            <BsArrowLeftCircleFill onClick={handlePrev} className="arrow-left"/>
            {
                images && images.length ?
                images.map((item,index)=>{
                    return (
                        <img
                        key={item.id}
                        alt={item.download_url}
                        src={item.download_url}
                        className={currentSlide===index?"current-image":"current-image hide-current-image"}
                        />
                    )
                })
                :null
            }
            <BsArrowRightCircleFill onClick={handlenext}  className="arrow-right" />
            <span className="circle-indicators">
                {
                    images && images.length ?
                    images.map((_,index)=><button onClick={()=>{
                        setCurrentSlide(index)
                    }}  key={index} className={currentSlide===index?"current-indicator":" big-current-indicator"}></button>)
                    :null
                }
            </span>
        </div>
    )
}