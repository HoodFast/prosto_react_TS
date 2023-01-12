import s from "./OnOff.module.css";

export const On = () => {
    return (
        <div>
            <span className={s.styleOnText}>On     </span>
            <span>Off</span>
            <span className={s.styleOn}>  __  </span>
        </div>
    )
}