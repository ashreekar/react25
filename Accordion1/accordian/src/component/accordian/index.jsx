import { useState } from "react"
import accordionData from "./data.js"
import "./styles.css"

export default function Accordian() {

    const [selected, setSelected] = useState(null);
    const [enableMulti, setEnableMulti] = useState(false);

    const [multi, setMulti] = useState([]);

    function handleSingelSelection(id) {
        // console.log(accordionData[id-1])
        setMulti([])
        if (id === selected) {
            setSelected(null);
            return;
        }

        setSelected(id)
    }

    function handleMultiselection(id) {
        setSelected(null)
        let cpyMut=[...multi];

        const findIndex=cpyMut.indexOf(id)
        if(findIndex === -1){
           cpyMut.push(id)
        }else{
            cpyMut.splice(findIndex,1)
        }

        setMulti(cpyMut)
    }

    return (
        <div className="wrapper">
            <button onClick={(e) => {
                return setEnableMulti(!enableMulti)
            }}>
                {enableMulti ? "Disable multi selection" : "Enable multi selection"}
            </button>
            <div className="accordian">
                {
                    accordionData && accordionData.length > 0 ?
                        accordionData.map(item => {
                            return (
                                <div className="item" key={item.id}>
                                    <div onClick={(e) => {
                                        return enableMulti ?
                                            handleMultiselection(item.id) :
                                            handleSingelSelection(item.id)
                                    }} className="title">

                                        <h3>{item.title}</h3>
                                        {
                                            (selected && selected == item.id) ?
                                                <span>-</span> :
                                                <span>+</span>
                                        }

                                    </div>
                                    {
                                        enableMulti ?
                                        multi.indexOf(item.id) !== -1 && <
                                            div className="content">
                                            {item.content}
                                        </div> : selected === item.id && <
                                            div className="content">
                                            {item.content}
                                        </div>
                                    }
                                    {/* {
                                        (selected === item.id || multi.indexOf(item.id) !== -1) && <
                                            div className="content">
                                            {item.content}
                                        </div>
                                    } */}
                                </div>
                            )
                        }) :
                        <div>Data not found</div>
                }
            </div>
        </div>
    )
}