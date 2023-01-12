import s from "./OnOff.module.css"
import {On} from "./On";
import {Off} from "./Off";

type OnOffPropsType = {
    value: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    return (
        <div>
            {props.value ? <On/>:<Off/>}
        </div>
    )
}