import React, {useState} from "react";

type UnAccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: UnAccordionPropsType) {
    let [collapsed, setCollapsed] = useState(false)

    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={()=>setCollapsed(!collapsed)} accordeonCollapsed={collapsed}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onChange: (value:boolean) => void
    accordeonCollapsed:boolean
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3 onClick={()=>props.onChange(!props.accordeonCollapsed)}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}

