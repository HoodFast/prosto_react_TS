import {useState} from "react";

type OnOffPropsType = {
    onChange: (on: boolean) => void
    defaultOn?: boolean
}


export const UncontrolledOnOff = (props: OnOffPropsType) => {
    let [on, setOn] = useState(props.defaultOn?props.defaultOn:false)
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

    return (
        <div>
            <div style={onStyle} onClick={() => setOn(!on)}>On</div>
            <div style={offStyle} onClick={() => setOn(!on)}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
