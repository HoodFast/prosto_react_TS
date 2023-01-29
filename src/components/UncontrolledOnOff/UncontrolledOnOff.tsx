import {useState} from "react";

type OnOffPropsType = {

    onChange: (value: boolean) => void
}


export const UncontrolledOnOff = (props: OnOffPropsType) => {
    let [on, setOn] = useState(false)
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        padding: "2px",
        display: "inline-block",
        backgroundColor: on ? 'green' : 'white',
    };
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        marginLeft: "2px",
        padding: "2px",
        display: "inline-block",
        backgroundColor: on ? 'white' : 'red',
    };
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "5px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "10px",
        backgroundColor: on ? 'green' : 'red',
    };
const onClicked=()=>{
    setOn(true)
    props.onChange(true)
}
    const ofClicked=()=>{
        setOn(false)
        props.onChange(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={ofClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}