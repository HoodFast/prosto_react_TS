import React, {useReducer} from "react";
import {reducer, reducerAC, stateType} from "./reducer";



type UnAccordionPropsType = {
    titleValue: string
}

export function UncontrolledAccordion(props: UnAccordionPropsType) {

    let [collapsed, dispatch] = useReducer(reducer, {collapsed:false})

    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={()=>dispatch(reducerAC())}
                            accordionCollapsed={collapsed}/>
            {!collapsed.collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onChange: (value: boolean) => void
    accordionCollapsed: stateType
}

function AccordionTitle(props: AccordionTitlePropsType) {

    return (
        <h3 onClick={() => props.onChange(!props.accordionCollapsed)}>{props.title}</h3>
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

