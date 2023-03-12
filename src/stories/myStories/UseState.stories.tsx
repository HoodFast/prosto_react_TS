import React, {useState} from "react";
import {number} from "prop-types";

export default {
    title: 'Use state'
}



function generateData(){
    console.log('generate')
    return 1212312;
}

export const UseStateExample = () => {

    const [counter, setCounter] = useState(generateData);

    const changer = (state:number)=>{
        return state+1
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}


