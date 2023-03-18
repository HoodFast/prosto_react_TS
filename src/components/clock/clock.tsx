import {useEffect, useState} from "react";


type propsType = {}

const getStringTwoDigit = (num: number) => num < 10 ? "0" + num : num

export const Clock: React.FC<propsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
       const id = setInterval(() => {
            setDate(new Date())
        }, 1000)
        return()=>{
            clearInterval(id)
        }
    },[])

    return <div>
        <span>{ getStringTwoDigit(date.getHours())}</span>
        :
        <span>{getStringTwoDigit(date.getMinutes())}</span>
        :
        <span>{getStringTwoDigit(date.getSeconds())}</span>

    </div>
}