import React, {MouseEvent, useState} from "react";
import {RatingValueType} from "../Rating/Rating";

type RatingPropsType = {
    // value: number
}

export function UnControlledRating(props: RatingPropsType) {
    let [value, setValue] = useState<RatingValueType>(0)
    // const onClickButtonHandler = (e: MouseEvent<HTMLButtonElement>) => {
    //     setValue(Number(e.currentTarget.title))
    // }

    return (
        <div>
            <Star selected={value >= 1} setValue={()=>setValue(1)} />

            <Star selected={value >= 2} setValue={()=>setValue(2)} />

            <Star selected={value >= 3} setValue={()=>setValue(3)} />

            <Star selected={value >= 4} setValue={()=>setValue(4)} />

            <Star selected={value >= 5} setValue={()=>setValue(5)} />

        </div>
    )
}

type StarsPropType = {
    selected: boolean
    setValue: () => void
}

function Star(props: StarsPropType) {
    return (
        <span onClick={()=>props.setValue()}>
            {props.selected ? <b>star </b> : "star "}
        </span>)
}