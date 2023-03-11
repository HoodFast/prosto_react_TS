import React, {useRef, useState} from 'react';
import {OnOff} from "../../components/OnOff/OnOff";


export default {
    title: "UnInput",
}

export const UnInput = () => <input/>
export const UnInputTrack = () => {
    const [value, setValue] = useState("")
    return <><input onChange={(e) => setValue(e.currentTarget.value)}/> {value}</>
}

export const UnInputTrackGetValue = () => {
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={save}>save
        </button>
        - actual value: {value}</>
}

export const ControlledInput = () => {
    const [value, setValue] = useState("")
    return <><input value={value} onChange={(e) => setValue(e.currentTarget.value)}/> - {value} </>
}

export const ControlledCheckbox = () => {
    const [value, setValue] = useState(true)
    return <><input type = "checkbox" checked={value} onChange={(e) => setValue(!value)}/> - {value && "True"} </>
}

export const ControlledSelect = () => {
    const [value, setValue] = useState("")
return <select value={value} onChange={(e)=>{setValue(e.currentTarget.value)}}>
    <option >none</option>
    <option value={"1"}>Minsk</option>
    <option value={"2"}>Moscow</option>
    <option value={"3"}>Varshava</option>
</select>

}