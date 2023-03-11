import React from "react";


type itemType={
    title:string
    value:any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: itemType[]
    onClick:(value:any)=>void
}

type AccordionPropsBodyType={
    items:itemType[]
    onClick:(value:any)=>void
}

export function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle onChange={props.onChange} title={props.titleValue}/>
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={(e) => props.onChange()}>{props.title}</h3>
    )
}

function AccordionBody(props:AccordionPropsBodyType) {
    const bodyMap=props.items.map((el,index)=><li key={index} onClick={()=>{props.onClick(el.value)}}>{el.title}</li>)
    return (
        <ul>
            {bodyMap}
        </ul>
    )
}

