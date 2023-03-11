import React, {useState} from "react";


export type SelectPropsType = {
    titleValue: string
    onChange: (value: any) => void
    items: itemType[]
}

type itemType = {
    title: string
    value: any
}

export const SelectIt = (props: SelectPropsType) => {
    const [value, setValue] = useState(false)
    const onClickHandler = (el:itemType) => {
        props.onChange(el.title)
        setValue(!value)
    }
    return (
        <div>
            <div onClick={() => {
                setValue(!value)
            }}>{props.titleValue}</div>
            {value && props.items.map(el => <div onClick={() => onClickHandler(el)}>{el.title}</div>)}

        </div>
    )
}