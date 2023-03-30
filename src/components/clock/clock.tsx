import React, {useEffect, useState} from "react";
import {DigitalClockView} from "./digitalClockView";
import {AnalogClockView} from "./analogClockView";


type propsType = {
    mode?: 'digital' | 'analog'
}

export const getStringTwoDigit = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<propsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const id = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return () => {
            clearInterval(id)
        }
    }, [])

    let view;

    switch (props.mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>
        {view}
    </div>
}

export type ViewClockType = {
    date: Date
}

