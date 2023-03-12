import React, {KeyboardEvent, useEffect, useState} from "react";
import s from './Select.module.css'

export type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: itemType[]
}

type itemType = {
    title: string
    value: any
}

export const SelectIt = (props: SelectPropsType) => {
    const [value, setValue] = useState(false)
    const [hover, setHover] = useState(props.value)
    const selectItem = props.items.find(el => el.value === props.value)
    const hoveredItem = props.items.find(el => el.value === hover)

    useEffect(() => {
        setHover(props.value)
    }, [props.value])

    const onClickHandler = (el?: itemType) => {
        el && props.onChange(el.value)
        setValue(!value)
    }

    const body = props.items.map((el, index) =>
        <div
            onMouseEnter={() => setHover(el.value)}
            className={`${s.item} ${hoveredItem === el && s.selected}`}
            key={index}
            onClick={() => onClickHandler(el)}
        >
            {el.title}
        </div>)
    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hover) {
                    const pretendentEl = e.key === "ArrowDown"
                        ? props.items[i + 1]
                        : props.items[i - 1];
                    if (pretendentEl) {
                        props.onChange(pretendentEl.value)
                        return
                    }
                }
            }
            if(value) {
                props.onChange(props.items[0].value)
            }
        }
        if (e.key==="Escape" || e.key==="Enter") {
            setValue(false)
            return
        }
    }

    return (
        <>
            <div
                tabIndex={0}
                onKeyUp={onKeyUp}
                className={s.select}>
                <span className={s.main} onClick={() => onClickHandler()}>
                    {selectItem && selectItem.title}
                </span>
                {value &&
                    <div className={s.items}>
                        {body}
                    </div>
                }
            </div>
        </>

    )
}