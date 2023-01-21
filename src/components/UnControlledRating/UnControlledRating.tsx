import React, {MouseEvent, useState} from "react";

type RatingPropsType = {
    // value: number
}

export function UnControlledRating(props: RatingPropsType) {
    let [value, setValue] = useState(3)
    const onClickButtonHandler = (e: MouseEvent<HTMLButtonElement>) => {
        setValue(Number(e.currentTarget.title))
    }

    return (
        <div>
            <Star selected={value >= 1}/>
            <button title='1' onClick={onClickButtonHandler}>1</button>
            <Star selected={value >= 2}/>
            <button title='2' onClick={onClickButtonHandler}>2</button>
            <Star selected={value >= 3}/>
            <button title='3' onClick={onClickButtonHandler}>3</button>
            <Star selected={value >= 4}/>
            <button title='4' onClick={onClickButtonHandler}>4</button>
            <Star selected={value >= 5}/>
            <button title='5' onClick={onClickButtonHandler}>5</button>
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