import React from "react";

import {Clock} from "./clock";

export default {
    title: 'Clock'
}





export const DigitalClock = () => {
    return <>
        <Clock mode={"digital"}/>
    </>
}

export const AnaloglClock = () => {
    return <>
        <Clock mode={"analog"}/>
    </>
}


