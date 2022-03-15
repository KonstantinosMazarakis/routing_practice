import React from "react";
import { useParams } from "react-router-dom";

const Number = () =>{
    const {id} = useParams()
    const {textColor} = useParams()
    const {bgColor} = useParams()

    return<>
    <div>
        {isNaN(id)?<h1 style={{color:textColor,  backgroundColor:bgColor}} >{id}</h1>:<h1>The number is {id}</h1>}
    </div>
    </>
}
export default Number