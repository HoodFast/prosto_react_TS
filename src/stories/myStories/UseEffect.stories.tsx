import {useEffect, useState} from "react";

export default {
    title: 'useEffect demo'
}

export const SimpleExample = () => {
    const [counter, setCounter] = useState(1)
    console.log("SimpleExemple")

    useEffect(() => {
        console.log("every render")
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log("only first render")
        document.title = counter.toString()
    },[])

    useEffect(() => {
        console.log("useEffect")
        document.title = counter.toString()
    },[counter])


    return <>
    Hello, {counter}
        <button onClick={()=>setCounter(counter+1)}>+</button>
    </>
}

export const SetTimeOutExample = () => {
    const [counter, setCounter] = useState(1)
    console.log("SetTimeOut")

    useEffect(() => {setTimeout(()=>{
        document.title = counter.toString()
    },1000)
    },[counter])




    return <>
    Hello, {counter}
        <button onClick={()=>setCounter(counter+1)}>+</button>
    </>
}

export const SetIntervalExample = () => {
    const [counter, setCounter] = useState(1)
    console.log("SetTimeOut")

    useEffect(() => {setInterval(()=>{
        setCounter((state:number)=>state+1)
    },1000)
    },[])




    return <>
        Hello, {counter}
        <button onClick={()=>setCounter(counter+1)}>+</button>
    </>
}

export const ResetEffectExample = () => {
    const [counter, setCounter] = useState(1)
    console.log("rendered component")

    useEffect(() => {
        console.log("effect occurred"+ counter)
        return ()=>{
            console.log("reset")
        }
    },[counter])




    return <>
        Hello, {counter}
        <button onClick={()=>setCounter(counter+1)}>+</button>
    </>
}

export const KeysTrackerExample = () => {
    const [text, setText] = useState('')
    console.log("rendered component" + text)

    useEffect(() => {
        const handler=(e:KeyboardEvent)=>{
            console.log(e.code);
            setText(text+e.key)
        }
        window.document.addEventListener('keypress',handler)
        return ()=>{
            window.document.removeEventListener('keypress',handler)
        }
    },[text])




    return <>
        Typed text: {text}
    </>
}