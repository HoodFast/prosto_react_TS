import React from "react";

type RatingPropsType = {
    value: number
}

export function Rating(props: RatingPropsType) {

    return (
        <div>
            <Star selected={props.value >= 1}/>
            <Star selected={props.value >= 2}/>
            <Star selected={props.value >= 3}/>
            <Star selected={props.value >= 4}/>
            <Star selected={props.value >= 5}/>
        </div>
    )
}

type StarsPropType = {
    selected: boolean
}

function Star(props: StarsPropType) {
    if (props.selected === true) {
        return (<span><b>star </b></span>)
    } else {
        return (<span>star </span>)
    }
}